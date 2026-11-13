# Audio Reader for my Friends

![Screenshot of the Audio Reader app interface](image.png)

Audio Reader for my Friends is a lightweight, web-based audio player designed for seamless playback, looping, and memory bank management of your local and Google Drive audio files. 

## Features

**Core Playback & Navigation**

* **Local & Cloud Playback:** Load audio files (MP3, WAV, OGG) via local file upload, drag-and-drop, or browse and download directly from Google Drive with built-in search and pagination.


* **Playback Controls:** Play, pause, skip to next/previous tracks, rewind 5 seconds, and fast-forward 5 seconds.


* **Speed & Volume Controls:** Adjust playback speed (0.25x to 1.5x) with a 1.0x reset shortcut, and adjust volume on the fly without altering the pitch.


* **Interactive Waveform:** A canvas-based visualizer that generates peak data for the track and allows click-and-drag selection for easy navigation and setting loop regions.


* **Background Playback:** Native HTML5 audio integration allows playback to continue even when the device is locked.



**Looping & Memory**

* **Precision A-B Looping:** Select specific segments to loop continuously, featuring nudge buttons to fine-tune loop points by +/- 0.1 seconds.


* **Custom Loop Pauses:** Option to repeat the selection indefinitely or inject a pause interval (1s, 2s, or 5s) between loop iterations.


* **Memory Banks:** Save and recall up to three specific A-B loop selections per track (hold to save, tap to load).


* **Global Pinning:** Double-click memory banks to "pin" them, saving those specific loop points globally so they can be applied across different tracks.



**Playlist Management**

* **Track Organization:** Reorder tracks (up/down arrows), remove tracks, or temporarily disable/skip specific tracks using checkboxes without removing them from the list.


* **Search & Filter:** Built-in search bar to quickly find specific tracks within the active playlist.


* **Repeat Modes:** Options to repeat a single track continuously or loop the entire playlist.


* **Internal Save System:** Name and save multiple playlists internally to the browser's database, allowing you to switch between different setups instantly.


* **Import/Export:** Export complete playlists (including base64 audio data and specific loop points) as JSON files, and import them to restore setups or share with others.



**Accessibility & UI**

* **Keyboard Shortcuts:** Full keyboard support for playback (Space), navigation (Arrows, Page Up/Down), setting points (A/B), and memory banks (1/2/3 to load, Shift+1/2/3 to save).


* **Touch & Mobile Optimized:** Responsive Tailwind CSS design with expanded invisible touch targets for memory banks to prevent mobile misclicks.


* **Persistent Sessions:** Automatically saves the current playlist, active loop points, volume, speed, and exact playback position to IndexedDB/LocalStorage, allowing you to resume exactly where you left off upon reloading.

## How to Deploy to Google Apps Script

To enable the Google Drive integration, this app must be deployed via Google Apps Script. 

1. Go to script.google.com and create a New Project.
2. Replace the contents of the default `Code.gs` file with the code provided above. *(Note: Ensure your Google Apps Script backend code is pasted here).*
3. Click the + next to Files on the left, select HTML, and name it exactly `advanced_mp3_player`. Paste the HTML code above into this file.
4. Click the Deploy button at the top right, select New deployment.
5. Click the gear icon next to "Select type" and choose Web app.
    - Execute as: "Me"
    - Who has access: "Only myself" (or "Anyone with Google account" if you want to share the link).
6. Click Deploy. Authorize the permissions (it needs access to read your Google Drive).
7. Open the Web App URL!

## Credits
- **Designed by:** Thierry MARTIN
- **Implemented by:** Gemini

## License
Released under the [MIT License](LICENSE).