# PRIVACY POLICY

**App:** Clock Chess
**Package Name:** com.ntt.clockchess
**Effective date:** October 12, 2026

---

### 1. Overview

The Clock Chess app is committed to respecting and fully protecting user privacy. We built the app with safety, transparency, and non-interference with your personal data as core principles:

- We do not collect any personal data.
- The app works fully offline: it does not request Internet permission and does not send any data outside your device.
- No ads & no tracking code: no advertising SDKs, no user-behavior analytics services (such as Google Analytics, Firebase, etc.).
- Fully local storage: settings and custom time presets are stored directly on your device's memory.

---

### 2. Information Collection and Use

- **Personally identifiable information:** The app does not require registration, account sign-in, name, email, or phone number.
- **Sensitive data:** The app does not access contacts, camera, microphone, photo/file libraries, geographic location (GPS), or hardware identifiers (IMEI, Advertising ID).
- **Local storage:** UI options, sound/vibration toggles, keep-screen-on setting, and the time presets you create are stored locally using Android Jetpack DataStore. This data resides entirely on your device and is deleted when you choose "Clear app data" or uninstall the app.

---

### 3. Device Permissions Used

Clock Chess only requests the minimum system permissions needed for its timing features:

1. **Vibrate (android.permission.VIBRATE)**
   - **Purpose:** Haptic feedback when a player taps to switch turns or when time runs out (can be turned off in Settings).

2. **Foreground service (android.permission.FOREGROUND_SERVICE & FOREGROUND_SERVICE_SPECIAL_USE)**
   - **Purpose:** Keeps the clock running accurately even when the screen is locked or the app is temporarily backgrounded. The service stops automatically as soon as the game is paused or ends.

3. **Notifications (android.permission.POST_NOTIFICATIONS — Android 13+)**
   - **Purpose:** Shows both players' remaining time in the status bar during a game. The app does not send advertising or marketing notifications.

**Note:** The app does not declare the INTERNET permission in AndroidManifest.xml, so technically it is incapable of sending any data over the network.

---

### 4. Third-Party Services

Clock Chess does not use any third-party libraries, cloud services, or ad networks that collect user information.

---

### 5. Children's Privacy

Clock Chess is a timing tool for mind-sport competitions, suitable and safe for all ages (including children). We comply with children's privacy regulations (COPPA and Google Play's Families policy).

---

### 6. Policy Changes

If any future feature changes affect privacy, we will update the effective date at the top of this document.

---

### 7. Contact Information

If you have any questions about this policy, please contact:

- Email: firstntt90@gmail.com
