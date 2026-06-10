# Computop Paygate Payment Tester

Browser-based development tool for creating and inspecting encrypted
[Computop Paygate](https://www.computop.com) payment requests.

![Version](https://img.shields.io/badge/version-2.8.0-blueviolet)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen)

**[Open the live app](https://krebs3r.github.io/computop-tester/)**

## Overview

The tester supports Computop Hosted Payment Page (`paymentPage.aspx`), Credit
Card Form (`payssl.aspx`) and Pay By Link (`PayByLink.aspx`) integrations. It
creates the HMAC-SHA256 MAC, encrypts request payloads with Blowfish ECB and can
decrypt encrypted Computop callback responses.

Everything runs in the browser. There is no application backend and no build
step.

## Main Features

- HMAC-SHA256 MAC generation using the native Web Crypto API
- Blowfish ECB request encryption and callback decryption
- HPP, PaySSL and Pay By Link integration modes
- Pay By Link request generation with documented two-stage encryption
- Automatic locally unique Pay By Link reference numbers
- Configurable redirect URLs, payment methods and templates
- Callback receiver for returning directly to the tester
- Named credential profiles stored locally in the browser
- IndexedDB request and response logs with up to 250 entries each
- Syntax-highlighted request URLs and decrypted response parameters
- Computop simulation presets and Non-3DS/3DS test-card references
- German and English interface
- Dark, light and automatic system theme
- Installable PWA with network-first offline caching
- iOS-friendly app icon set with standard and maskable PWA variants
- Touch-oriented responsive layout with safe-area support and 44px interaction targets
- Direct local operation through `file://` without a development server

## Application Views

The fixed glass navigation keeps the main tools available from every view:

| View | Purpose | URL hash |
|---|---|---|
| Payment Workflow | Credentials, payment parameters and encrypted preview | `#payment-workflow` |
| Request Log | Generated Computop requests | `#request-log` |
| Response Decryption | Callback URL or manual Data/Len decryption | `#response` |
| Response Log | Previously decrypted responses | `#response-log` |
| Changelog | Complete bilingual release history | `#changelog` |

The footer, language selector and theme control remain available throughout
the application.

## Local Usage

1. Download and extract the repository ZIP or clone the repository.
2. Open `index.html` directly in a modern browser.
3. Enter your Computop Merchant ID, Blowfish password and HMAC password.
4. Configure the payment parameters in the Payment Workflow.
5. Generate the preview and inspect `MAC`, `Len`, `Data` and the final URL.
6. Open the selected Computop endpoint from the preview.

For Pay By Link, the tester generates a locally unique reference number and a
default expiration date. The preview exposes both the inner HPP payload and the outer Pay By Link payload.
Computop documents this endpoint as a server-to-server API, so browser CORS
rules may prevent the app from reading the returned customer link directly.
The generated `action=create` request URL can still be inspected, copied and
opened from the preview.

No local HTTP server is required. Service-worker and installation features are
available only when the app is served through HTTP/HTTPS, including GitHub
Pages.

## Callback Decryption

1. Open **Response Decryption** from the navigation.
2. Paste the complete Computop callback URL, or enter `Data` and `Len`
   manually.
3. The tester uses the Blowfish password from the Payment Workflow.
4. The decrypted payload is displayed and added to the Response Log.

When the callback receiver is enabled, successful and failed redirect URLs are
set to the tester itself. Returning callback parameters automatically open the
Response Decryption view.

## Data and Security

| Data | Storage/processing |
|---|---|
| Payment request | Generated locally in the browser |
| MAC | HMAC-SHA256 through Web Crypto |
| Payment payload | Blowfish ECB as required by Computop |
| Credential profiles | AES-GCM encrypted data in `localStorage` |
| Request/response logs | Plain records in `IndexedDB`, with `localStorage` fallback |
| Language/theme/settings | `localStorage` |

The credential encryption key is derived from an application-owned static
passphrase. This protects against casual inspection of `localStorage`, but it
is not equivalent to encryption with a user-owned master password and does not
protect against malicious scripts or access to the active browser profile.

Use this application only for development and testing. Prefer test credentials
and small test amounts. Credit-card authorisations may still be real depending
on the merchant configuration.

## Project Structure

```text
index.html                 Main application, styles and runtime logic
js/i18n.js                 German and English translations
js/changelog-data.js       Bilingual in-app release history
icons/                     Browser, Apple Touch and PWA icons
service-worker.js          PWA network-first cache
manifest.json              Web app manifest
og-image.png               Open Graph and social sharing preview
VERSION                    Canonical application version
CHANGELOG.md               Complete release history
```

## Release History

The complete history is available in [CHANGELOG.md](CHANGELOG.md) and in the
application's **Changelog** view.

## License

MIT, see [LICENSE](LICENSE).
