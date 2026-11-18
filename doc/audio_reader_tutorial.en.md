# Audio Reader for my Friends - Complete Tutorial

## Introduction

**Audio Reader for my Friends** is a lightweight, fully-featured web-based audio player designed for detailed audio study, practice, and seamless playback. Whether you are learning a language, practicing a musical instrument, or simply listening to podcasts, this application provides precision tools to help you interact with your audio. 

Key features include A-B precision looping, customizable memory banks for your favorite loops, and the ability to layer synchronized "follower" tracks over your main audio. It supports offline local files, seamlessly integrates with Google Drive, and saves your session automatically so you never lose your place.

---

## Basic Features

### 1. Loading Audio Files
* **Local Files:** Click the **Add Local Files** button in the top-right header to select `.mp3`, `.wav`, or `.ogg` files from your device.
* **Drag & Drop:** Drag one or multiple audio files from your computer and drop them anywhere onto the player window.
* **Google Drive (Apps Script Mode):** If running inside a Google Apps Script environment, click the **Drive** button to browse folders or search globally across your Google Drive to add audio files directly.

### 2. Basic Playback Controls
* **Play / Pause:** Click the large blue circular **Play/Pause** button in the center, or press the `Space` bar.
* **Seek & Scrub:** Click anywhere along the **Waveform** or the horizontal **Progress Bar** to jump directly to that timestamp.
* **Skip & Rewind:**
  * Use the **-5s** and **+5s** buttons (or `Left` / `Right` arrow keys) to jump backward or forward by 5 seconds.
  * Click the **Previous** button (or press `Up Arrow`) to jump to the beginning of the track (or the `A` loop point if active).
  * Click the **Next** button (or press `PageDown`) to advance to the next enabled track.
* **Volume & Speed:**
  * Adjust the **Volume** slider on the bottom right.
  * Adjust the **Speed** slider on the bottom left (`0.25x` to `1.5x`). Pitch preservation is automatically enabled so voices and instruments stay in tune. Click the speed readout (e.g., `1.0x`) to instantly reset it to normal speed.
* **Repeat Modes:**
  * **Repeat Track:** Toggle the circular arrow icon to the left of the playback controls to loop the entire current track.
  * **Chain Tracks & Repeat Playlist:** In the Playlist header, check **Chain Tracks** to automatically play the next track when one finishes, and toggle the small repeat icon next to it to loop the entire playlist.

---

## Intermediate Features

### 3. Playlist Management
* **Play & Toggle Tracks:** Click any track name in the playlist to play it immediately. Uncheck the box next to a track to disable/skip it during continuous playback.
* **Reorder & Remove:** Drag and drop playlist items vertically to reorder them, or hover over a track to use the **Up**, **Down**, and **Delete (`X`)** buttons.
* **Search:** Type into the **Search tracks...** bar to filter long playlists in real time.
* **Save, Load, Export & Import:** Click the **Playlists** button in the header to open the manager:
  * **Save / Load:** Save your current track list (including each track's individual A-B loop points) to browser storage for later recall.
  * **Export / Import:** Click **Export** to bundle your audio files and loop settings into a single `.json` file that can be shared with friends and loaded via **Import**.

### 4. A-B Precision Looping
* **Setting Loop Points:**
  * **Click & Drag:** Click and drag across the **Waveform** or **Progress Bar** to highlight a specific region.
  * **On-the-Fly Buttons:** Click the **A** button (or press `A`) while listening to mark the start point, and click **B** (or press `B`) to mark the end point.
  * **Dual Sliders:** Drag the blue **A** and orange **B** circular thumbs directly on the progress bar.
* **Fine-Tuning & Manual Entry:**
  * Click the **+0.1** or **-0.1** nudge buttons next to A or B to shift boundaries by a tenth of a second.
  * Click directly inside the `A` or `B` timestamp boxes to type an exact time (e.g., `1:24.5`) and press `Enter`.
* **Loop Behavior:**
  * **Repeat Selection:** Keep checked to loop continuously between A and B. Uncheck to play through B once and stop (or advance to the next track if *Chain Tracks* is enabled).
  * **Pause Interval:** Use the **Pause** dropdown (`0s`, `1s`, `2s`, `5s`) to insert a silent gap between loop repetitions—useful for shadowing language audio or practicing musical phrases.
  * Click **Clear** to remove the A-B selection.

---

## Advanced Features

### 5. Loop Memory Banks & Global Pinning
The three circular LEDs in the A-B Control Panel let you store up to three A-B loop presets per track (or globally):
* **Save to a Bank:** Set your desired A-B loop, then **press and hold** one of the three LED buttons for 0.6 seconds (or press `Shift + 1`, `Shift + 2`, or `Shift + 3`). The LED will flash white and turn solid purple.
* **Recall a Loop:** **Tap** a lit LED (or press `1`, `2`, or `3`) to immediately jump to and load that saved A-B loop.
* **Global Pinning:** **Double-tap** (or double-click) any LED to pin it. Pinned LEDs turn **amber** and persist across *all* tracks in your playlist rather than being tied to a single audio file. Double-tap again to unpin and revert to track-specific memory.

### 6. Synchronized Follower Tracks (Multi-Track Playback)
You can layer multiple audio tracks (such as isolated stems, backing tracks, or translated voiceovers) so they play in strict synchronization with your main track:
1. Load your primary track and begin playback (or leave it paused at your starting point).
2. In the **Playlist**, hover over a secondary track and click the **Link/Chain icon** (*"Add as synchronously playing follower track"*).
3. A **Synchronized Follower Tracks** panel will appear above the playlist.
4. **Independent Mixing & Auto-Sync:** Each follower track features its own **Volume** slider so you can balance levels independently. Whenever you play, pause, seek, loop, or change playback speed on the main track, all follower tracks automatically stay locked in time (with built-in drift correction if buffers fall out of sync).

### 7. Session Auto-Restore
Your playlist order, active track, current playback timestamp, volume, playback speed, and A-B loop points are automatically saved to your browser's local database (`IndexedDB` and `localStorage`) so you can close the tab and resume right where you left off.

---

## Keyboard Shortcuts Reference

| Key | Action |
| :--- | :--- |
| `Space` | Play / Pause |
| `Left` / `Right` Arrow | Rewind 5s / Forward 5s |
| `Up` / `Down` Arrow | Jump to Start (or Point A) / Jump to End |
| `PageUp` / `PageDown` | Previous Track / Next Track |
| `A` / `B` | Set Loop Start (A) / Set Loop End (B) |
| `1`, `2`, `3` | Load Loop Memory Bank 1, 2, or 3 |
| `Shift` + `1`, `2`, `3` | Save current A-B loop to Bank 1, 2, or 3 |