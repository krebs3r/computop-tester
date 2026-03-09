# 🔐 Computop Paygate — Payment Tester

A client-side tool for testing [Computop Paygate](https://www.computop.com) Hosted Payment Page (HPP) integrations. Generates encrypted payment requests using Blowfish ECB and HMAC-SHA256 — entirely in the browser, no backend required.

## ✨ Features

- **Blowfish ECB encryption** of the `Data` parameter
- **HMAC-SHA256** MAC calculation
- **AES-GCM encrypted credential storage** — credentials are saved locally in the browser's localStorage, never transmitted
- **Request log** — all generated requests are stored locally for review and re-use
- **Opens Computop in a new tab** — keeps the tester open for debugging
- Pure browser, zero dependencies, no server, no data leaves your machine

## 🚀 Usage

1. Open `index.html` directly in your browser — or visit the [live version](https://dein-username.github.io/computop-tester/)
2. Enter your Computop credentials (MerchantID, Blowfish password, HMAC password)
3. Optionally save them encrypted via **💾 Speichern**
4. Fill in the payment parameters (amount, currency, redirect URLs)
5. Click **⚡ Vorschau generieren** to build and preview the encrypted request
6. Click **💳 Zur Hosted Payment Page ↗** to open the Computop HPP in a new tab

## 🔒 Security

| What | How |
|---|---|
| Credentials at rest | AES-GCM 256-bit, PBKDF2 (100,000 iterations) |
| Credentials in transit | Never transmitted — localStorage only |
| Payment data | Blowfish ECB, as required by Computop |
| MAC | HMAC-SHA256 via Web Crypto API |

> **Note:** This tool is intended for development and testing only. Use only small amounts (e.g. 0.11–2.00 EUR) in test mode, as credit card authorisations may be real even in test environments.

## 🛠 Technical Details

- **No build step** — single HTML file, vanilla JavaScript
- **No external dependencies** — Blowfish ECB is implemented in pure JS; all crypto uses the native [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- **localStorage keys used:**
  - `computop_credentials_enc` — AES-GCM encrypted credentials
  - `computop_request_log` — last 50 generated requests

## 📋 Request Log

Every time you generate a preview, the request is automatically saved to the log (last 50 entries). Click any log entry to expand the full URL. The log can be cleared at any time.

## 📄 License

MIT — see [LICENSE](LICENSE) for details.
