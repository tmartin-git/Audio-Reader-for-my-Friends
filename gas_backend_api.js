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

function downloadDriveFile(fileId) {
  const file = DriveApp.getFileById(fileId);
  const blob = file.getBlob();
  return Utilities.base64Encode(blob.getBytes());
}
