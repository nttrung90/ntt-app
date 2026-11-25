# T-Battery Privacy Policy

**Effective date:** November 25, 2026
**App identifier (Package ID / Application ID):** `com.ntt.tbattery`

---

This Privacy Policy describes how the Android app **T-Battery** (package ID: `com.ntt.tbattery`), developed and operated by **NTT-Studio**, handles information on your device.

## 1. Data the app accesses and processes

T-Battery reads technical battery information provided by the Android operating system and your device hardware (such as battery level, charging status, power source, temperature, voltage, current, power and estimated capacity) in order to:

- Display real-time battery status in the app, the notification bar and widgets.
- Record charge/discharge history and draw tracking charts.
- Estimate the time to full charge or the remaining usage time.
- Trigger battery alarms at thresholds you set.

The Diagnostics section may display some technical device information and hardware identifiers (for example, the battery serial number) if your device supports it. Root or Shizuku access is entirely optional, used to read additional advanced readings, and is not required to use the app.

## 2. Local storage and No data collection

- **Fully on-device processing:** All battery history data, prediction data, settings and alarms are stored locally in the app's private storage on your device.
- **No data sent out:** T-Battery does not use the Internet permission (INTERNET), contains no advertising SDKs, integrates no behavior-tracking (analytics) tools, and does not automatically collect or transmit your monitoring/diagnostics data to any external server.
- **No automatic cloud backup:** The app disables Android's automatic cloud backup and automatic device-to-device data transfer (allowBackup="false").

## 3. Data export, Backup and Sharing

You can actively:

- Export battery history (CSV/JSON format) manually or automatically to a folder of your choice.
- Create backup files (settings, alarms, history, prediction data) for personal storage.
- Share diagnostics information when you need technical support.

**Note:** Exported files and backup files are not encrypted by the app. If you store these files on a cloud service or send them to a third party, the handling of that data is governed by the policy of the storage provider or the recipient you chose.

## 4. System permissions the app uses

T-Battery requests only the minimum permissions needed to operate reliably:

- **Foreground service (FOREGROUND_SERVICE, FOREGROUND_SERVICE_SPECIAL_USE):** Keeps battery status monitoring running continuously and updates the notification/widgets.
- **Notifications (POST_NOTIFICATIONS, POST_PROMOTED_NOTIFICATIONS):** Displays the persistent battery status notification, sends battery alarms and supports Live Updates on Android 16+.
- **Run at startup (RECEIVE_BOOT_COMPLETED):** Automatically restores battery monitoring after your device restarts.
- **Vibration (VIBRATE):** Vibrates notifications when a battery alarm triggers.
- **Wake lock & ignore battery optimizations (WAKE_LOCK, REQUEST_IGNORE_BATTERY_OPTIMIZATIONS):** Ensures battery event recording and alarm delivery are not abruptly interrupted by the system.

## 5. Retention period and Your control

When logging is enabled, the history retention period can be customized in the app settings (28 days by default).

You have full control over your data at any time:

- Delete battery history directly inside the app.
- Clear the app's storage in Android Settings or uninstall the app to erase all data managed by T-Battery.
- For CSV/JSON files or backup files you exported yourself, please delete them at the folder or storage service you chose.

## 6. Children's privacy

The app is not directed at children under 13 (or the equivalent age under the laws of your country) and does not collect personal information from anyone.

## 7. Changes to this policy

This Privacy Policy may be updated over time to reflect changes in features or legal requirements. Any updates will be published on this page together with a new effective date.

## 8. Contact information

If you have any questions or requests regarding this Privacy Policy, please contact:

- **Developer:** NTT-Studio
- **Email:** firstntt90@gmail.com
