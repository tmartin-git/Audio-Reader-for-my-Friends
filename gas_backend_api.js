function doGet() {
  return HtmlService.createHtmlOutputFromFile('advanced_mp3_player')
      .setTitle('Audio Reader for my Friends')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1') // <-- Required for mobile responsiveness
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getDriveAudioFiles(searchQuery, pageIndex) {
  // Start fresh or use the passed pageIndex (our new 'pageToken')
  pageIndex = pageIndex || 0;
  
  let query = '(mimeType contains "audio/" or mimeType = "application/ogg") and trashed = false';
  if (searchQuery && searchQuery.trim().length > 0) {
    let safeQuery = searchQuery.replace(/"/g, '\\"');
    query += ' and title contains "' + safeQuery + '"';
  }
  
  let iterator = DriveApp.searchFiles(query);
  let allFiles = [];
  
  // 1. Collect all matching files so we can sort them properly
  while (iterator.hasNext()) {
    let file = iterator.next();
    allFiles.push({ 
      id: file.getId(), 
      name: file.getName(), 
      mimeType: file.getMimeType() 
    });
  }
  
  // 2. Sort the entire list alphabetically by filename (case-insensitive)
  allFiles.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  
  // 3. Apply Pagination (Slice the 100 files we need for the current page)
  const pageSize = 100;
  const startIndex = pageIndex * pageSize;
  const paginatedFiles = allFiles.slice(startIndex, startIndex + pageSize);
  
  // 4. Check if there are more files for a "Load More" button
  const nextToken = (startIndex + pageSize < allFiles.length) ? (pageIndex + 1) : null;
  
  return { 
    files: paginatedFiles, 
    nextPageToken: nextToken 
  };
}

// NEW FUNCTION: Retrieve Folders and Audio files for navigation (Includes Shared with me)
function getDriveContents(folderId) {
  let folders = [];
  let files = [];
  let parentId = null;
  let currentFolderId = folderId || 'root';
  let currentFolderName = 'Root';

  if (currentFolderId === 'root') {
    // 1. Load "My Drive" (Root)
    let rootFolder = DriveApp.getRootFolder();
    let folderIterator = rootFolder.getFolders();
    while (folderIterator.hasNext()) {
      let f = folderIterator.next();
      folders.push({ id: f.getId(), name: f.getName(), type: 'folder' });
    }
    folders.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    
    // Inject virtual "Shared with me" directory at the top of the list
    folders.unshift({ id: 'shared_with_me', name: '👥 Shared with me', type: 'folder' });

    let query = '"' + rootFolder.getId() + '" in parents and (mimeType contains "audio/" or mimeType = "application/ogg") and trashed = false';
    let fileIterator = DriveApp.searchFiles(query);
    while (fileIterator.hasNext()) {
      let f = fileIterator.next();
      files.push({ id: f.getId(), name: f.getName(), type: 'file', mimeType: f.getMimeType() });
    }
    files.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    
  } else if (currentFolderId === 'shared_with_me') {
    // 2. Load "Shared with me" Virtual Folder
    let folderIterator = DriveApp.searchFolders('sharedWithMe = true and trashed = false');
    while (folderIterator.hasNext()) {
      let f = folderIterator.next();
      folders.push({ id: f.getId(), name: f.getName(), type: 'folder' });
    }
    folders.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    let fileIterator = DriveApp.searchFiles('sharedWithMe = true and (mimeType contains "audio/" or mimeType = "application/ogg") and trashed = false');
    while (fileIterator.hasNext()) {
      let f = fileIterator.next();
      files.push({ id: f.getId(), name: f.getName(), type: 'file', mimeType: f.getMimeType() });
    }
    files.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    
    parentId = 'root';
    currentFolderName = '👥 Shared with me';
    
  } else {
    // 3. Load Standard Subfolders
    let folder;
    try {
      folder = DriveApp.getFolderById(currentFolderId);
    } catch (e) {
      return { error: 'Folder not found or accessible.' };
    }
    
    let folderIterator = folder.getFolders();
    while (folderIterator.hasNext()) {
      let f = folderIterator.next();
      folders.push({ id: f.getId(), name: f.getName(), type: 'folder' });
    }
    folders.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    let query = '"' + folder.getId() + '" in parents and (mimeType contains "audio/" or mimeType = "application/ogg") and trashed = false';
    let fileIterator = DriveApp.searchFiles(query);
    while (fileIterator.hasNext()) {
      let f = fileIterator.next();
      files.push({ id: f.getId(), name: f.getName(), type: 'file', mimeType: f.getMimeType() });
    }
    files.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    
    // Determine parent for the "Up" navigation button
    let parents = folder.getParents();
    parentId = parents.hasNext() ? parents.next().getId() : 'root';
    currentFolderName = folder.getName();
  }

  return { 
    folders: folders, 
    files: files, 
    parentId: parentId, 
    currentFolderId: currentFolderId, 
    currentFolderName: currentFolderName 
  };
}

function downloadDriveFile(fileId) {
  const file = DriveApp.getFileById(fileId);
  const blob = file.getBlob();
  return Utilities.base64Encode(blob.getBytes());
}
