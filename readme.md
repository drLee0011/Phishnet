# 🛡️ PhishNet – Real-Time Phishing Detection Browser Extension

**PhishNet** is a powerful browser extension (Chrome & Firefox compatible) designed to detect and alert users of phishing websites in real time. It uses a combination of **heuristic analysis**, **keyword scanning**, and **VirusTotal threat intelligence** to safeguard user browsing.

---

## 🔍 Features

- ✅ **Heuristic Phishing Detection**
  - Scans URLs for suspicious keywords, brand impersonation, and risky top-level domains (TLDs)
- ✅ **VirusTotal Integration**
  - Uses VirusTotal's public API to verify each URL against 70+ security engines
- ✅ **Login Form Detection**
  - Flags pages that contain password fields for additional caution
- ✅ **Popup UI**
  - Displays URL status and phishing risk in real time
- ✅ **Badge Alert**
  - Shows a ⚠️ warning in the toolbar when a threat is detected

---

## 🚀 How It Works

1. User navigates to a webpage
2. Background script analyzes the URL using:
   - Keyword detection (from a refined phishing keyword list)
   - Domain/TLD and brand impersonation checks
3. Extension sends the URL to **VirusTotal API**
4. If flagged:
   - A red badge (⚠️) appears
   - The popup warns the user
5. Login forms are also flagged via a content script

---

## 🧰 Tech Stack

- JavaScript (Vanilla)
- Chrome Extension (Manifest V3)
- VirusTotal API
- HTML + CSS (Popup UI)
- Optional: Node.js/Express proxy (if needed for CORS)

---

