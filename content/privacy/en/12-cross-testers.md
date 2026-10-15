# PRIVACY POLICY

**Last updated:** October 15, 2026
**Application:** 12 Cross Testers (Package: com.ntt.crosstest)
**Developer:** NTT Dev Team (Contact: firstntt90@gmail.com)

---

### 1. Introduction

**12 Cross Testers** ("the App", "we", "our") is a peer-to-peer testing community application created to help Android developers collectively fulfill Google Play's 14-day / 20-tester closed testing requirement. We respect your privacy and are committed to protecting your personal data.

This Privacy Policy describes what information we collect, how it is used, and how it is secured.

### 2. Information We Collect

1. **Account Information:** When you authenticate using Google Sign-In or email, we receive your email address, display name, and avatar URL to authenticate your profile and show your progress on the leaderboard.
2. **Testing Campaign Data (User-Generated Content):** App title, package name, Google Play URLs, closed testing track URLs, descriptions, and optional demo test credentials provided by campaign owners.
3. **Testing Reports & Reviews:** Screenshots uploaded as proof of testing (stored via Firebase Storage), bug reports, feedback ratings (1–5 stars), and daily check-in timestamps.
4. **Credits & Transaction Logs:** Credit reward logs and Google Play Billing purchase tokens. We **do not** collect or store credit card numbers or banking information; all financial transactions are processed securely by Google Play.

### 3. Sensitive Permission Usage (`QUERY_ALL_PACKAGES`)

The App declares and utilizes `android.permission.QUERY_ALL_PACKAGES` solely for the following core functional purposes:

- **Verification of Installed Test Apps:** To verify on-device whether a specific closed-testing application has actually been installed before registering a daily check-in, preventing fraudulent check-ins.
- **Direct App Launch & Metadata Assistance:** To launch the installed testing app directly from within the campaign view, and to extract app labels and icons when an owner registers their app.
- **Zero-Transmission Policy:** The list of installed packages is processed **strictly on-device**. We **NEVER** transmit, store on servers, profile, track, or share your installed apps inventory with any third party or advertising network.

### 4. Notification Permission (`POST_NOTIFICATIONS`)

Used on Android 13+ solely to post local daily check-in reminders at 20:00. Users can enable or disable reminders anytime within the app Settings.

### 5. Third-Party Services

We integrate standard industry services:

- **Google Sign-In / Credential Manager:** Secure user authentication.
- **Supabase:** PostgreSQL backend with Row Level Security (RLS).
- **Firebase Storage (Google Cloud):** Secure storage for report screenshots.
- **Google Play In-App Billing:** Processing in-app credit purchases.

### 6. Data Security & Storage

All network communication is strictly encrypted via HTTPS/TLS. Database access is governed by strict Row Level Security (RLS) rules.

### 7. User Rights and Data Deletion Policy

You have the right to request deletion of your account and associated data at any time:

- Users may submit a deletion request by emailing **firstntt90@gmail.com** with the subject *"Account Deletion Request - 12 Cross Testers"*.
- All personal data, profiles, campaigns, reports, and uploaded screenshots will be permanently purged within **7 business days**.

### 8. Children's Privacy

Our service is intended for software developers and testers aged 13 and above. We do not knowingly collect personal data from children under 13.

### 9. Contact Us

For any inquiries regarding this Privacy Policy, please contact:

- **Email:** firstntt90@gmail.com
- **Developer:** NTT Dev Team
