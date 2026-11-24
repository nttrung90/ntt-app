# T-Ebook Privacy Policy

**Effective date:** November 24, 2026
**Last updated:** November 24, 2026
**Version:** 1.0
**App identifier (Package ID / Application ID):** `com.ntt.tebook`

---

## 1. Introduction

**T-Ebook** is a cross-platform ebook reader (supporting Android, Desktop and Web), designed around a **local-first** philosophy. You can read books, take notes, highlight, bookmark and manage your reading progress right on your device without being required to create an account.

This policy explains:

- What types of data T-Ebook processes.
- Where data is stored and for how long.
- When data is transmitted off your device or connected to third parties.
- Your rights regarding your personal data and how to exercise them.

In this policy:

- **"T-Ebook"**, **"the app"** or **"the Service"** means the official T-Ebook ebook reader (including the Android version with package ID `com.ntt.tebook`, and related desktop and web builds) published by us.
- **"we"** means the developer / publisher of T-Ebook (**NTT**).
- **"you"** means the individual user who installs and uses the T-Ebook app.

This policy does **not** apply to:

- Third-party websites, apps or cloud storage services that you connect yourself (e.g. Google Drive, OneDrive, personal WebDAV, KOReader servers).
- Plugins or add-ons developed by third parties.
- Unofficial distributions or mods of the app.

---

## 2. Quick summary

- **Offline reading, no account needed:** All books, notes, highlights, bookmarks and reading history are stored directly on your device.
- **No data selling:** We do not sell, rent or trade your personal data to any third party.
- **No ads, no tracking:** The app integrates no ad SDKs and contains no user behavior tracking or marketing analytics tools.
- **Sync is your decision:** Data only leaves your device when you **actively enable sync** (with your personal cloud storage or a sync server) or when you **use online features** (translation, dictionary, AI, TTS, OCR).
- **Full control:** You can turn off sync, delete local data, disable AI features, or disconnect storage services at any time.

---

## 3. Scope

This policy applies to:

- The **T-Ebook** mobile app on Android (package ID: `com.ntt.tebook`).
- The desktop app for Windows, macOS and Linux.
- The official T-Ebook web application.
- Accompanying online support services (if you use them).

---

## 4. Data we process

### 4.1. Data stored locally on your device

By default, T-Ebook stores all of the following data **right in your device's local storage**:

- **Book library** — Examples: book files (EPUB, PDF, MOBI, AZW3, TXT...), book covers, metadata (title, author, genre), file paths. Stored in: the app's private data folder, or the original file if you open it from external storage.
- **Reading data** — Examples: reading position, page/% progress, bookmarks, highlights, quotes, notes, looked-up vocabulary, reading time and statistics. Stored in: a local SQLite database and app storage.
- **Settings & Appearance** — Examples: theme (Theme, Material You), fonts, font size, line spacing, page layout, display language, feature configuration. Stored in: the app's local configuration files.
- **Cache** — Examples: temporarily generated TTS audio files, temporary OCR/translation results, extracted cover images. Stored in: the app's cache folder.
- **App protection** — Examples: app lock password or PIN (if you set one). Stored in: encrypted storage on the device.
- **Authentication tokens** — Examples: sign-in tokens for cloud storage sources (Google Drive, OneDrive, WebDAV...) that you configure. Stored in: a secure encrypted keystore on the device.

**Storage mechanisms and OS permissions:**

- **On Android (`com.ntt.tebook`):** Data is stored in the app's isolated private storage area (App Internal Storage). The app **only declares the basic network permission (`android.permission.INTERNET`)** to download resources (fonts, dictionaries) or to sync when you actively request it. T-Ebook interacts with book files through the standard Android file picker (Storage Access Framework / SAF or FileProvider) and **does not request sensitive full-device storage permissions** (`MANAGE_EXTERNAL_STORAGE` or `READ_EXTERNAL_STORAGE`).
- **On Desktop:** Data resides in the user data folder (`%APPDATA%` on Windows, `~/Library/Application Support` on macOS, or `~/.config` on Linux).
- **On Web:** Data is stored in the browser's `IndexedDB` or `localStorage`.

**File access:** T-Ebook only reads files or folders that you actively select to import or open. The app does not scan or collect other personal files on your device on its own.

---

### 4.2. Data when connecting Cloud storage sources (Optional)

T-Ebook lets you connect to personal cloud storage services such as: Google Drive, Microsoft OneDrive, Dropbox, iCloud, WebDAV, FTP/SFTP, SMB, and S3-compatible object storage.

When you connect a storage source:

- You are redirected to the provider's sign-in/authorization page to grant access.
- The access token is stored securely and encrypted on your device.
- Book files, covers and reading progress are exchanged **directly between your device and your storage server**, without passing through any intermediary server of ours.

**Google Drive user data policy (Google API Services User Data Policy):**

> When you connect a Google Drive account, T-Ebook only uses data from the Google Drive API to browse, import or back up book files and reading progress at your direct request. This data is never used for advertising, never shared with third parties, and never sold. T-Ebook's use and transfer of information received from Google APIs to any other feature or app will strictly comply with the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the **Limited Use requirements**.

---

### 4.3. Google Play Data Safety section

For the Android version of the app (package ID: `com.ntt.tebook`):

- **Data Collection:** The app collects no personal data by default. All book files, notes and reading activity are stored on the device.
- **Data Sharing:** No data is shared with third parties for commercial, analytics or advertising purposes.
- **Encryption in Transit:** All network connections (when you sync or call dictionary/translation APIs) use secure HTTPS/TLS encryption.
- **Data Deletion:** You have full control to delete app data directly on the device (Android Settings → Apps → T-Ebook → Clear data/storage).

---

### 4.4. Online features, Translation, OCR, TTS and AI (Optional)

When you use advanced features:

- **Translation & Dictionary lookup:** The text passage or word you select is sent to the translation provider (Google Translate, DeepL, online dictionaries) to retrieve results.
- **Text-to-speech (TTS):** The text passage is sent to a speech synthesis service to receive an audio file.
- **Optical character recognition (OCR):** The book page image you capture/select is sent for text recognition.
- **AI assistant:** Your selected quote or question is sent to a large language model (LLM) to receive an answer.

*Note:* You can completely disable AI features in **Settings → AI Features**. Content is only sent when you actively perform the action. We do not use your book content or notes to train commercial AI models.

---

### 4.5. Third-party note and study integrations (Optional)

If you actively configure note export to apps such as **Notion, Readwise, SiYuan, Obsidian, AnkiConnect**, or enable **Discord Rich Presence**:

- Note data, vocabulary cards, or the title of the book you are reading are only sent to that service's endpoint according to your configuration.
- Configuration information and API keys for these services are stored locally on your device.

---

### 4.6. Technical data and error logs

- **Update checks:** The app may send your display language and current version to the update server to notify you when an upgrade is available.
- **Local error logs:** The desktop/mobile versions may record technical errors in an internal log file on your machine to help with troubleshooting. This file is **not automatically uploaded**; you only send it when you attach it yourself to a bug report email to us.

---

## 5. Purposes and legal bases for processing

- **Provide offline reading features** — Data: book files, reading progress, personal settings. Legal basis: performing the app's function / legitimate interests.
- **Sync data via your own cloud** — Data: book files, reading data, storage source tokens. Legal basis: at your active request and with your consent.
- **Perform dictionary lookup, translation, TTS, OCR, AI** — Data: excerpts, images or vocabulary you select. Legal basis: your active consent when activating the feature.
- **Troubleshoot issues, app security** — Data: technical error logs (when you provide them). Legal basis: legitimate interest in ensuring quality.

---

## 6. Sharing data with third parties

We commit to:

1. **No data business:** We absolutely do not sell, rent, trade or commercialize any of your information.
2. **Sharing only at your request:** Data is only sent to storage services (Google Drive, OneDrive...) or support services (DeepL, AI...) that you yourself choose and connect.
3. **Legal requirements:** We only provide information in special cases required by law or by order of a competent authority.

---

## 7. Storage, security and data deletion

- **Retention period:** Reading data and book files are stored on your device until you actively delete the books or uninstall the app.
- **Connection security:** All data transmitted over the network must use Transport Layer Security (TLS/HTTPS).
- **Local security:** Tokens and the app lock password are securely encrypted on the device.
- **How to delete data:**
  - You can delete individual books, all notes, or clear the cache in T-Ebook's Settings.
  - On Android: Go to *System Settings → Apps → T-Ebook → Clear storage & cache*. This returns the app to a clean initial state.
  - When you uninstall T-Ebook, all of the app's separately stored internal data is automatically deleted by the operating system.

---

## 8. Your privacy rights

Depending on the laws of your country of residence, you have the following legal rights:

### Under Decree 13/2023/ND-CP (Vietnam)

You have all 11 data subject rights under Article 9 of Decree 13/2023/ND-CP:

1. **Right to know:** To be informed about the processing of your data.
2. **Right to consent:** To decide whether to allow data processing.
3. **Right of access:** To view, edit, or request a copy of your data.
4. **Right to withdraw consent:** To withdraw previously given consent at any time.
5. **Right to erasure:** To request deletion or delete your personal data yourself.
6. **Right to restrict processing:** To request limits on the scope of processing.
7. **Right to data provision:** To receive data in a machine-readable format.
8. **Right to object:** To prevent processing for unwanted purposes.
9. **Right to complain, denounce, and sue:** As provided by law.
10. **Right to claim compensation:** When a violation causes damage.
11. **Right to self-protection:** To protect your personal rights as provided by law.

### Under GDPR (Europe / United Kingdom) & CCPA/CPRA (California, USA)

- Right to access, rectify, and request erasure of data (*Right to be forgotten*).
- Right to object to processing and the right not to be discriminated against for exercising privacy rights.
- We do not sell or share user data for cross-context behavioral advertising.

---

## 9. Children's privacy

T-Ebook is a general ebook reader, contains no harmful content, and is not directed at collecting personal data from children under 13 (or under 16 depending on local regulations). Children may use the app to read educational and literary works under the companionship and guidance of parents or guardians.

---

## 10. Changes to this privacy policy

We may update this policy over time to reflect feature improvements or changes in legal regulations. When there is an important update:

- The update date at the top of the document will be adjusted.
- The new policy version will be published publicly in the source code and on T-Ebook's official information page.

---

## 11. Contact information

If you have any questions, concerns or requests regarding privacy and personal data in the **T-Ebook** app, please contact us:

- **App name:** T-Ebook
- **App identifier (Package ID):** `com.ntt.tebook`
- **Developer:** NTT (T-Ebook Development Team)
- **Support & Privacy email:** `firstntt90@gmail.com` *(or send feedback directly via the developer's release channel)*
- **Website / Repository:** Updated on the T-Ebook app showcase page

---

## Appendix: User-configured third-party services

Below are the online service providers you can choose to connect within the T-Ebook app. When you connect, each provider's own privacy policy applies:

- **Personal cloud storage:** Google Drive, Microsoft OneDrive, Dropbox, personal WebDAV, FTP/SFTP, S3.
- **Translation & Dictionaries:** Google Translate, DeepL, Bing Translator, online dictionary sources.
- **Notes & Quotes:** Notion, Readwise, SiYuan, AnkiConnect, Obsidian.
- **AI & Recognition assistants:** AI model or OCR providers that you supply an API key for or integrate yourself.
