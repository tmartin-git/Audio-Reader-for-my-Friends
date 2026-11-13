### Frequently Asked Questions (FAQ)

**Q: Why can't I see all the tracks from my Google Drive directly, and why does the search sometimes miss files (e.g., finding 4 instead of 5)?**
A: The application loads Drive files in paginated batches of 100 to optimize performance. If your drive contains more files, you must click the "Load More Files" button at the bottom of the list to retrieve the rest. If a specific file isn't showing up in search, it may be sitting on a subsequent unpaginated page of results, or it might not have a recognized audio file extension (like `.mp3`, `.wav`, or `.ogg`).

**Q: Will I lose my playlist if I clear my browser history?**
A: Yes. Your current playlist, memory banks, loop points, and playback states are saved locally inside your browser using IndexedDB and Local Storage. Clearing your site data or browser history wipes this database. To protect your setup, you should regularly use the **Export** button in the Playlists menu to download your configuration as a `.json` file.

**Q: Does the player continue to work when the phone is locked?**
A: Yes. Because the app utilizes the native HTML5 `<audio>` engine, playback will continue in the background even if your device screen is locked or turned off.

**Q: Can I loop specific parts of a track and change the playback speed?**
A: Yes. The app includes an A-B loop feature that allows you to isolate and repeat specific sections of a track indefinitely. It also includes a playback speed slider (ranging from 0.25x to 1.5x) that preserves the original pitch of the audio.

**Q: How are the downloaded tracks stored?**
A: When you add files from Google Drive, the script downloads them as base64 data, converts them into binary blobs, and stores them as `File` objects directly inside your browser's internal IndexedDB database. They are cached locally for offline app use but will not appear as standard MP3 files in your device's default "Downloads" folder.
