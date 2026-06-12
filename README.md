# Paygate Payment Tester

Browser-based development tool for creating and inspecting encrypted
[Paygate](https://www.computop.com) payment requests.

![Version](https://img.shields.io/badge/version-3.0.0-blueviolet)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen)

**[Open the live app](https://krebs3r.github.io/computop-tester/)**

## Overview

The tester supports Paygate Hosted Payment Page (`paymentPage.aspx`), Credit
Card Form (`payssl.aspx`) and Pay By Link (`PayByLink.aspx`) integrations. It
creates the HMAC-SHA256 MAC, encrypts request payloads with Blowfish ECB and can
decrypt encrypted Paygate callback responses.

Everything runs in the browser. There is no application backend and no build
step.

## Main Features

- HMAC-SHA256 MAC generation using the native Web Crypto API
- Blowfish ECB request encryption and callback decryption
- HPP, PaySSL and Pay By Link integration modes
- Pay By Link request generation with documented two-stage encryption
- Local REST API V1/V2 request builder without sending requests from the browser
- cURL, PowerShell, Postman Collection and raw HTTP output formats
- Optional REST API key storage in encrypted local credential profiles
- Automatic locally unique Pay By Link reference numbers
- Configurable redirect URLs, payment methods and templates
- Callback receiver for returning directly to the tester
- Named credential profiles stored locally in the browser
- IndexedDB request and response logs with up to 250 entries each
- Syntax-highlighted Classic requests, REST JSON/commands and decrypted response parameters
- Paygate simulation presets and Non-3DS/3DS test-card references
- Bilingual Help view with Classic/REST comparison, usage guidance, official documentation, test resources, error codes and privacy notes
- Colour-coded navigation badges for Payment Workflow, Classic and Guide sections
- Automatic desktop navigation overflow controls plus horizontal touch and mouse-wheel scrolling
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
| Payment Workflow | Classic Paygate requests and local REST API request generation | `#payment-workflow` |
| Request Log | Generated Classic Paygate requests | `#request-log` |
| Response Decryption | Classic callback URL or manual Data/Len decryption | `#response` |
| Response Log | Previously decrypted Classic responses | `#response-log` |
| Help | Integration guidance, usage, official documentation, test resources and privacy notes | `#help` |
| Changelog | Complete bilingual release history | `#changelog` |

The footer, language selector and theme control remain available throughout
the application. Navigation badges keep their section colours in active and
inactive states: green for Payment Workflow, blue for Classic and violet for
Guide. When the desktop navigation does not fit, edge arrows appear
automatically; touch gestures and horizontal mouse-wheel scrolling remain
available as well.

The **Help** view explains the differences between Classic and REST, guides
users through the application and links to official Paygate documentation,
test cards, error and response codes, and the Paygate status page. Its resource
cards use self-contained inline SVG icons and require no external icon library.

## Local Usage

1. Download and extract the repository ZIP or clone the repository.
2. Open `index.html` directly in a modern browser.
3. Enter your Paygate Merchant ID, Blowfish password and HMAC password.
4. Configure the payment parameters in the Payment Workflow.
5. Generate the preview and inspect `MAC`, `Len`, `Data` and the final URL.
6. Open the selected Paygate endpoint from the preview.

For Pay By Link, the tester generates a locally unique reference number and a
default expiration date. The preview exposes both the inner HPP payload and the outer Pay By Link payload.
The Paygate documentation describes this endpoint as a server-to-server API, so browser CORS
rules may prevent the app from reading the returned customer link directly.
The generated `action=create` request URL can still be inspected, copied and
opened from the preview.

No local HTTP server is required. Service-worker and installation features are
available only when the app is served through HTTP/HTTPS, including GitHub
Pages.

## REST Request Builder

The REST builder is part of the **Payment Workflow**. Select **REST API** as the
interface, then choose the API version, payment type, target environment,
authentication method and output format.

- V1 generates requests for the shared `/api/v1/payments` endpoint.
- V2 uses dedicated endpoints for checkout sessions, hosted card payments and
  payment links, with the corresponding V2 payload shape and an
  `Idempotency-Key` header.
- Basic Auth uses the Merchant ID and REST API key. OAuth2 output uses them as
  client ID and client secret to obtain an access token.
- Available output formats are cURL, PowerShell, Postman Collection v2.1 and
  raw HTTP for REST clients or `.http` files.
- JSON and executable output are syntax highlighted and can be copied
  independently.

The browser only assembles the request; it does not submit it. By default,
generated commands contain safe placeholders. Credentials are inserted only
after enabling the explicit warning option. The REST API key can be stored in
the same locally encrypted profile as the Classic credentials.

Test card numbers are entered on the hosted Paygate form, not in the generated
JSON request. The builder links to the official test-card documentation for
reference.

## Callback Decryption

1. Open **Response Decryption** from the navigation.
2. Paste the complete Paygate callback URL, or enter `Data` and `Len`
   manually.
3. The tester uses the Blowfish password from the Payment Workflow.
4. The decrypted payload is displayed and added to the Response Log.

When the callback receiver is enabled, successful and failed redirect URLs are
set to the tester itself. Returning callback parameters automatically open the
Response Decryption view.

When installed as a PWA, the external Paygate payment page still opens in the
browser because it is outside the app's origin and scope. After the redirect,
the callback is transferred back to the already open PWA. The browser tab only
closes after the app confirms that it received the response. Browser support
for focusing the existing PWA window varies by platform.

## Data and Security

| Data | Storage/processing |
|---|---|
| Payment request | Generated locally in the browser |
| REST request | Generated and formatted locally; never submitted by the application |
| MAC | HMAC-SHA256 through Web Crypto |
| Payment payload | Blowfish ECB as required by Paygate |
| Credential profiles | Merchant ID, Classic secrets and optional REST API key encrypted with AES-GCM in `localStorage` |
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
js/help-data.js            Bilingual Help view content and resource links
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
