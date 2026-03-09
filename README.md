# 🛡️ Computop Paygate — Payment Tester

A client-side tool for testing [Computop Paygate](https://www.computop.com) Hosted Payment Page (HPP) integrations. Generates encrypted payment requests using Blowfish ECB and HMAC-SHA256 — entirely in the browser, no backend required.

---

## ✨ Features

### Core
- **Blowfish ECB encryption** of the `Data` parameter (pure JavaScript, no dependencies)
- **HMAC-SHA256** MAC calculation via the native Web Crypto API
- **Hosted Payment Page redirect** opens in a new tab, keeping the tester available for debugging
- **Parameter preview** with color-coded plain-text display before submission

### Credentials
- **AES-GCM 256-bit encrypted credential storage** — MerchantID, Blowfish password and HMAC password are saved locally in `localStorage`, never transmitted
- **PBKDF2 key derivation** with 100,000 iterations for storage hardening
- **Auto-load on startup** — saved credentials are decrypted and filled in automatically
- **Save / Delete controls** with live status indicator

### Request Log
- **Automatic logging** of every generated request (timestamp, MerchantID, TransID, amount, currency, full URL)
- **Persistent storage** via `localStorage`, last 50 entries retained
- **Expandable entries** — click any log entry to reveal the full encrypted URL
- **Copy URL** button per entry
- **Clear log** button

### Payment Options
- **PayTypes selector** — defaults to no `PayTypes` parameter, which shows all payment methods enabled for the merchant account (credit cards, PayPal, Klarna, direct debit, etc.)
- Explicit options for `CC` (all configured card brands), `VISA`, `MasterCard` and `AMEX`

### UI & Theme
- **Dark / Light Mode toggle** — fixed button in the top-right corner
- **Automatic system theme detection** via `prefers-color-scheme` with live updates
- **Manual override** persisted in `localStorage`; `auto` badge shown while following the system
- **No flash on load** — theme applied via inline script before first render
- **Professional SVG icons** (Lucide icon set, fully inline — zero external dependencies)
- Smooth CSS transitions between themes

### General
- **Zero dependencies** — single self-contained HTML file, no build step, no CDN calls at runtime
- Pure browser, no server, no data leaves the machine

---

## 🔒 Security

| What | How |
|---|---|
| Credentials at rest | AES-GCM 256-bit, PBKDF2 (100,000 iterations) |
| Credentials in transit | Never transmitted — `localStorage` only |
| Payment data | Blowfish ECB, as required by Computop |
| MAC | HMAC-SHA256 via Web Crypto API |

> **Note:** This tool is intended for development and testing only. Use only small amounts (e.g. 0.11–2.00 EUR) in test mode, as credit card authorisations may be real even in test environments.

---

## 🚀 Usage

1. Open `index.html` directly in your browser — or visit the [live version](https://krebs3r.github.io/computop-tester/)
2. Enter your Computop credentials (MerchantID, Blowfish password, HMAC password)
3. Optionally save them encrypted via **Save**
4. Fill in the payment parameters (amount, currency, redirect URLs)
5. Select which payment methods to display, or leave at default to show all enabled methods
6. Click **Vorschau generieren** to build and preview the encrypted request
7. Click **Zur Hosted Payment Page** to open Computop in a new tab

---

## 🛠 Technical Details

- **No build step** — single HTML file, vanilla JavaScript
- **No external runtime dependencies** — all icons are inline SVGs; all crypto uses the native [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- **`localStorage` keys:**

| Key | Contents |
|---|---|
| `computop_credentials_enc` | AES-GCM encrypted credentials (salt + IV + ciphertext) |
| `computop_request_log` | JSON array of last 50 generated requests |
| `computop_theme` | User's theme preference (`dark` / `light`); absent = auto |

---

## 📋 Changelog

### v1.3 — Payment Methods
- Added **"All enabled payment methods"** as the default `PayTypes` option — omitting the parameter causes Computop to display every method configured for the merchant account
- Clarified existing `CC`, `VISA`, `MasterCard` and `AMEX` options in the selector

### v1.2 — Icons
- Replaced all emoji with **professional inline SVGs** (Lucide icon set)
- Fully self-contained — no CDN required, works offline
- Spinning loader animation on the generate button while processing

### v1.1 — Dark / Light Mode
- Added **Dark / Light Mode toggle** (fixed top-right button)
- **Auto mode** follows `prefers-color-scheme` and reacts to live system changes; displays `auto` badge
- Manual preference saved in `localStorage` and restored on next visit
- Flash-free load via inline `<script>` in `<head>` that applies the theme before render
- Full Light Mode colour palette with adjusted gradients, shadows and code colours

### v1.0 — Initial Release
- Blowfish ECB encryption of the `Data` parameter
- HMAC-SHA256 MAC calculation
- **Encrypted credential storage** (AES-GCM) in `localStorage` with PBKDF2 key derivation
- **Request log** persisted in `localStorage` (last 50 entries, expandable, copyable)
- **New tab redirect** — Computop HPP opens in a new tab instead of replacing the current page
- Parameter preview with color-coded plain-text display

---

## 📄 License

MIT — see [LICENSE](LICENSE) for details.
