# 🛡️ Computop Paygate — Payment Tester

A client-side tool for testing [Computop Paygate](https://www.computop.com) Hosted Payment Page (HPP) integrations. Generates encrypted payment requests using Blowfish ECB and HMAC-SHA256, and decrypts Computop callback responses — entirely in the browser, no backend required.

---

## ✨ Features

### Core
- **Blowfish ECB encryption** of the `Data` parameter (pure JavaScript, no dependencies)
- **Blowfish ECB decryption** of Computop callback responses — closes the full request/response loop
- **HMAC-SHA256** MAC calculation via the native Web Crypto API
- **Hosted Payment Page redirect** opens in a new tab, keeping the tester available for debugging
- **Parameter preview** with color-coded plain-text display before submission

### Response Decryptor
- **Paste the full callback URL** (URLSuccess / URLFailure / URLNotify) — `MerchantID`, `Len` and `Data` are extracted automatically
- **Manual mode** — enter `Data` (hex) and `Len` directly if only parts of the response are available
- **Color-coded output** — `Status` highlighted green / red / orange by value, `MAC` in purple, all other parameters in teal
- Uses the **Blowfish password already entered** in Step 1 — no duplicate input required

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

### Test Simulation
- **OrderDesc dropdown** with pre-built simulation presets:
  - `Testzahlung via Computop Paygate` — regular test, no simulation
  - `Test:0000` — always successful
  - `Test:0305` — always declined by acquirer/issuer
  - Custom input — enter any `OrderDesc` value freely
- **Test card table** (Non-3DS) — Visa, MasterCard and Amex with success and decline card numbers, inline in the payment form
- Card numbers are click-to-copy

### UI & Theme
- **Dark / Light Mode toggle** — fixed button in the top-right corner
- **Automatic system theme detection** via `prefers-color-scheme` with live updates
- **Manual override** persisted in `localStorage`; `auto` badge shown while following the system
- **No flash on load** — theme applied via inline script before first render
- **Professional SVG icons** (Lucide icon set, fully inline — zero external dependencies)
- Smooth CSS transitions between themes

### Language
- **DE / EN language toggle** — fixed button next to the theme toggle, switches the entire UI instantly
- Full English translation of all labels, buttons, hints, toasts, error messages and confirmation dialogs
- Language preference persisted in `localStorage` and restored automatically on next visit
- Lightweight built-in i18n system via a `TRANSLATIONS` object and a `t(key)` helper — no external framework

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

### Generating a payment request
1. Open `index.html` directly in your browser — or visit the [live version](https://krebs3r.github.io/computop-tester/)
2. Optionally switch the UI language via the **DE | EN** toggle in the top-right corner
3. Enter your Computop credentials (MerchantID, Blowfish password, HMAC password)
4. Optionally save them encrypted via **Save**
5. Fill in the payment parameters (amount, currency, redirect URLs)
6. Select which payment methods to display, or leave at default to show all enabled methods
7. Click **Generate Preview** (EN) / **Vorschau generieren** (DE) to build and preview the encrypted request
8. Click **Go to Hosted Payment Page** (EN) / **Zur Hosted Payment Page** (DE) to open Computop in a new tab

### Decrypting a Computop response
1. After a payment attempt, copy the full callback URL from the browser address bar (URLSuccess / URLFailure) or from your server log (URLNotify)
2. Open the **Response Decryptor** / **Response-Entschlüsseler** section
3. Paste the URL into the text field — `Len` and `Data` are extracted automatically
4. Click **Decrypt** (EN) / **Entschlüsseln** (DE)
5. The decrypted payload is displayed with color-coded parameters

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
| `computop_lang` | User's language preference (`de` / `en`); absent = German |

---

## 📋 Changelog

### v1.8.1 — Bugfix: MAC Calculation
- Fixed MAC string format: `*TransID*MerchantID*Amount*Currency` — the leading `*` for empty PayID was missing
- Without this fix Computop rejected every request with **"MAC INVALID"**
- Updated the technical explainer in the Credentials section accordingly

### v1.8 — Test Cards & Simulation Modes
- **OrderDesc dropdown** with presets for success (`Test:0000`), decline (`Test:0305`) and custom input
- **Test card table** (Non-3DS) embedded in the payment form — Visa, MasterCard, Amex with success and decline card numbers
- Card numbers are click-to-copy
- Table and dropdown fully translated (DE / EN)

### v1.7 — Response Decryptor
- Added **Response Decryptor** section — decrypts Computop callback URLs directly in the browser
- Paste the full callback URL: `MerchantID`, `Len` and `Data` are extracted automatically via `URLSearchParams`
- Alternative manual mode: enter `Data` (hex) and `Len` directly
- Color-coded output — `Status` green/red/orange by value, `MAC` purple, all other parameters teal
- Added Blowfish **`decrypt`** function alongside the existing `encrypt` in the ECB implementation

### v1.6 — Multilingual UI (DE / EN)
- Added **DE / EN language toggle** in the header (next to the theme toggle) — switches the entire UI instantly
- Full **English translation** of all UI text — labels, buttons, hints, error messages, toasts and confirmation dialogs
- Language preference saved in `localStorage` and restored automatically on the next visit
- Lightweight built-in i18n system using a `TRANSLATIONS` object and a `t(key)` helper function — no external dependencies

### v1.5 — Technical Explanation of URL Generation
- Added detailed **3-step explanation** in the Credentials section: MAC calculation, payload encryption and URL composition
- Role of the **HMAC password** explained — HMAC-SHA256 signature over `TransID * MerchantID * Amount * Currency` to ensure request integrity
- Role of the **Blowfish password** explained — ECB encryption of the full payload including MAC, hex-encoded as the `Data` parameter
- Visual **URL anatomy** with colour-coded parameters (`MerchantID`, `Len`, `Data`) and legend

### v1.4 — Security Disclaimer
- Security disclaimer regarding productive credentials added prominently to the start page
- User is explicitly informed of their **responsibility** for the safe handling of API credentials
- **Download button** for local execution — recommended alternative to using the public URL

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
