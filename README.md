# Paygate Payment Tester

Browser-based development tool for creating and inspecting encrypted
[Paygate](https://www.computop.com) payment requests.

![Version](https://img.shields.io/badge/version-3.6.1-blueviolet)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen)

**[Open the live app](https://krebs3r.github.io/computop-tester/)**

> This is an independent development tool and is not currently an officially
> approved product of Computop or Nexi Group. The optional Nexi presentation is
> an unofficial technical preview.

## Overview

The tester supports Classic Paygate Hosted Payment Page (`paymentPage.aspx`),
Credit Card Form (`payssl.aspx`) and Pay By Link (`PayByLink.aspx`) integrations,
plus local REST API V1/V2 request generation. It creates the HMAC-SHA256 MAC,
encrypts request payloads with Blowfish ECB or Helpdesk-enabled AES-CBC, decrypts encrypted Paygate callback
responses and analyses REST JSON responses.

Everything runs in the browser. There is no application backend and no build
step.

## Main Features

- HMAC-SHA256 MAC generation using the native Web Crypto API
- Blowfish ECB request encryption and callback decryption, plus optional AES-CBC/PKCS7 Classic Data/Len handling for MIDs configured by Computop Helpdesk
- HPP, PaySSL and Pay By Link integration modes
- Pay By Link request generation with documented two-stage encryption
- Local REST API V1/V2 request builder without sending requests from the browser
- Transaction-status inquiries through REST V1 and Classic `inquire.aspx` / `inquire24.aspx`
- Use-case selector prepared for additional workflows such as MIT/CIT after documentation review
- cURL, PowerShell, Postman Collection and raw HTTP output formats
- Optional REST API key storage in encrypted local credential profiles
- REST request generation without credentials, using safe authentication placeholders by default
- Bilingual inline explanations for REST version, payment type, environment, authentication and output format
- Automatic locally unique Pay By Link reference numbers
- Configurable redirect URLs, payment methods and templates
- Optional customer, billing and shipping data with transparent Base64 JSON breakdown
- Optional multi-line `ArticleList` data with amount validation and Klarna support
- Optional unencrypted `CustomField1` through `CustomField9` values for supporting HPP templates
- Design-aware transparent 276 × 87 PNG assets for the `CustomField3` merchant logo in Original and Nexi presentations
- Visible Classic, REST V1 and REST V2 API names directly beside workflow fields
- Ordered request preview showing composed objects, payload, query parameters and executable output
- Outdated-preview protection that blocks executable Step 3 actions after request inputs change until the preview is refreshed
- In-app "Start new payment flow" confirmation for resetting the current workflow without deleting saved profiles or logs
- Callback receiver for Classic callbacks and REST success, failure and cancel browser redirects
- Named credential profiles stored locally in the browser
- IndexedDB request and combined Classic/REST response logs with up to 250 entries each
- Response Log badges for interface, status and detected payment method
- Syntax-highlighted Classic requests, REST JSON/commands, decrypted callbacks and analysed REST responses
- Paygate simulation presets and Non-3DS/3DS test-card references
- Bilingual Help view with Classic/REST comparison, usage guidance, official documentation, test resources, error codes and privacy notes
- Bilingual Mobile SDK guide for native Android/Compose and iOS/SwiftUI integrations, available in both application designs
- Colour-coded navigation badges for Payment Workflow, Classic and Guide sections
- Automatic desktop navigation overflow controls plus horizontal touch and mouse-wheel scrolling
- German and English interface
- Dark, light and automatic system theme
- Installable PWA with network-first offline caching
- Payment-focused app icon set with standard, Apple Touch and maskable PWA variants
- Original-design header uses the payment app icon without an additional logo frame; Nexi design keeps the Nexi header logo
- Original-design header icons are aligned to the title area, with refined light-mode glass treatment for the main header and Help view boxes
- Navbar-aligned badges in the Payment Workflow, Request Log, Response Analysis and Response Log headers for consistent Classic, REST and Payment Workflow scanning
- Local download guidance distinguishes the current main-branch development build from stable tagged GitHub releases
- Touch-oriented responsive layout with safe-area support and 44px interaction targets
- Direct local operation through `file://` without a development server

## Application Views

The fixed glass navigation keeps the main tools available from every view:

| View | Purpose | URL hash |
|---|---|---|
| Payment Workflow | Classic Paygate requests and local REST API request generation | `#payment-workflow` |
| Request Log | Generated Classic requests and REST status inquiries | `#request-log` |
| Response Analysis | Classic callback decryption and REST JSON inspection | `#response` |
| Response Log | Decrypted Classic responses, analysed REST JSON and captured REST browser redirects | `#response-log` |
| Tools | Standalone MAC validator and Base64 encoder/decoder with credentialOnFile presets | `#tools` |
| Help | Integration guidance, usage, official documentation, test resources and privacy notes | `#help` |
| Changelog | Complete bilingual release history | `#changelog` |

The footer, language selector and theme control remain available throughout
the application. Navigation badges distinguish Payment Workflow, Classic,
orange REST and Guide tools; the optional Nexi design maps them to its own CI
palette. When the desktop navigation does not fit, edge arrows appear
automatically; touch gestures and horizontal mouse-wheel scrolling remain
available as well.

The **Help** view explains the differences between Classic and REST, guides
users through the application and links to official Paygate documentation,
test cards, error and response codes, and the Paygate status page. Its resource
cards use self-contained inline SVG icons and require no external icon library.

## Local Usage

1. Download and extract the repository ZIP or clone the repository.
2. Open `index.html` directly in a modern browser.
3. In Step 1 enter the Merchant ID, choose Classic or REST, and enter only the credentials shown for that interface. Classic status inquiries do not require the HMAC password; REST credentials remain optional for placeholder-based output.
4. In Step 2 select payment creation or transaction-status inquiry, choose the Classic encryption mode when using Classic, and configure the interface-specific request.
5. Configure the fields and generate the preview.
6. Inspect and copy the generated request. Classic payment pages and Classic
   status inquiries can also be opened directly from the preview; REST requests
   remain copy-only.

If Step 1 credentials or Step 2 request data are changed after generating a
preview, Step 3 is marked as outdated and executable actions are disabled until
the preview is refreshed. Use **Start new payment flow** in Step 2 to discard
the current workflow and restart with a new Transaction ID; stored profiles,
request logs, response logs, language, theme and settings remain untouched.

For Pay By Link, the tester generates a locally unique reference number and a
default expiration date. The preview exposes both the inner HPP payload and the outer Pay By Link payload.
The Paygate documentation describes this endpoint as a server-to-server API, so browser CORS
rules may prevent the app from reading the returned customer link directly.
The generated `action=create` request URL can still be inspected, copied and
opened from the preview.

No local HTTP server is required. Service-worker and installation features are
available only when the app is served through HTTP/HTTPS, including GitHub
Pages.

The in-app local download link points to the current `main` branch ZIP, so it
always contains the newest committed state. For a stable, tagged version with
release notes, use the project's [GitHub Releases](https://github.com/krebs3r/computop-tester/releases).

The internal callback receiver also requires HTTP/HTTPS. Browsers do not allow
an external Paygate page to redirect reliably to a local `file://` URL. Use the
GitHub Pages deployment or serve the directory through a local HTTP server when
testing automatic callback returns.

## Request Preview

Step 3 follows the same order in which a request is assembled:

For Classic payment requests, the "How is the GET URL generated?" explanation
is shown as its own Step 3 preview block with a dedicated workflow navigation
entry.

1. **Composed API parameters** explain generated objects such as
   `billToCustomer`, `billingAddress`, shipping objects and `ArticleList`,
   including decoded JSON and transmitted Base64 values.
2. **Classic plain-text payload** shows the parameters before Classic Data
   encryption (Blowfish ECB or AES-CBC). This payload becomes `Data`; Pay By Link additionally exposes
   its outer payload.
3. **Encrypted Data parameter** shows the complete generated `Data` value for
   comparison with external tools or Computop examples.
4. **Unencrypted query parameters** show values outside `Data`, including
   language, template, callback URL and optional template `CustomField1–9`
   values.
5. **Final request** shows the complete Classic URL. REST mode instead shows
   the composed objects, final JSON payload and executable client command.

Long API paths are kept close to their inputs and expose their complete value
as a tooltip. Customer and article controls use theme-aware checkboxes and
consistent action-button placement in both Original and Nexi designs.

Step 3 also tracks whether the displayed output still matches the current
workflow inputs. When credentials, integration options, payment data,
redirects, customer data, article data or advanced settings change, the preview
shows a refresh notice and blocks Paygate/status launch actions until the
request is generated again.

## REST Request Builder

The REST builder is part of the **Payment Workflow**. Select **REST API** below
the Merchant ID in Step 1, then choose the use case, API version, payment type,
target environment, authentication method and output format in Step 2.

**Step 1 is optional in REST mode.** The JSON payload and executable templates
can be generated without entering a Merchant ID or API key. The navigation
badge changes to `OPTIONAL`, only the REST credential block is shown, and
generated commands use safe placeholders. Real REST credentials are only
needed when explicitly embedding authentication values into the output.

- V1 generates requests for the shared `/api/v1/payments` endpoint.
- V1 status inquiries generate `GET /api/v1/payments/{paymentId}` or
  `GET /api/v1/payments/transactions/{transactionId}` without a request body.
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

## Response Analysis

1. Open **Response Analysis** from the navigation and choose Classic or REST.
2. Paste the complete Paygate callback URL, or enter `Data` and `Len`
   manually.
3. The tester uses the selected Classic encryption mode and the Blowfish/AES password from the Payment Workflow.
4. The decrypted Classic payload or formatted REST response is displayed and added to the shared Response Log.

When the callback receiver is enabled, successful and failed redirect URLs are
set to the tester itself. Returning callback parameters automatically open the
Response Analysis view.

On HTTP/HTTPS deployments, the internal callback receiver is enabled by default
for new users. `URLNotify` is required for Classic payment requests, but it needs
a reachable server-to-server endpoint and cannot be observed by this static
browser app. The optional httpbingo.org preset sets an external notify URL for
payload completeness and uses parameter-free URLs as required by the Paygate
documentation, but the notify is received only by httpbingo.org and must be used
with synthetic test data.

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
| Payment payload | Blowfish ECB by default; optional AES-CBC/PKCS7 when enabled for the MID by Computop Helpdesk |
| Credential profiles | Merchant ID, Classic secrets and optional REST API key encrypted with AES-GCM in `localStorage` |
| Request/response logs | Plain records in `IndexedDB`, with `localStorage` fallback |
| Language/theme/settings | `localStorage` |
| External resource loading | Blocked — scripts, styles and fonts are self-hosted; a Content Security Policy meta tag forbids inline scripts, restricts cross-origin requests, allows framing only for the embedded `computop-paygate.com` credit card form and limits form submissions to `computop-paygate.com` |

## Preview Designs

The existing presentation remains the default. An unofficial Nexi preview can
be enabled explicitly with `?design=nexi`; `?design=original` restores the
default presentation. Light, dark, and automatic system appearance continue to
work independently from the selected design.

Nexi trademarks, logos, fonts, and other brand assets are not covered by this
project's MIT License. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

By default the credential encryption key is derived from an application-owned
static passphrase, which protects against casual inspection of `localStorage`.
An optional master password (step 1 → profiles) derives the key from a
user-owned secret instead, so stored profiles can no longer be decrypted from
the public source code alone. Neither mode protects against malicious scripts
running inside the active browser profile.

Use this application only for development and testing. Prefer test credentials
and small test amounts. Credit-card authorisations may still be real depending
on the merchant configuration.

## Project Structure

```text
index.html                 Main application and runtime logic
css/style.css              Application styles
assets/fonts/              Self-hosted Syne, DM Sans and DM Mono web fonts
assets/nexi/               Official Nexi preview fonts and logos
assets/payment-page/       Hosted Payment Page merchant-logo PNGs
js/bootstrap.js            Early design/theme bootstrap before first render
js/app.js                  Application runtime logic
js/vendor/qrcode.js        Vendored MIT-licensed QR code generator
js/i18n.js                 German and English translations
js/changelog-data.js       Bilingual in-app release history
js/help-data.js            Bilingual Help view content and resource links
icons/                     Browser, Apple Touch, PWA and original header icons
service-worker.js          PWA network-first cache
manifest.json              Web app manifest
og-image.png               Open Graph and social sharing preview
THIRD_PARTY_NOTICES.md     Font, brand-asset sources and license exclusions
VERSION                    Canonical application version
CHANGELOG.md               Complete release history
```

## Release History

The complete history is available in [CHANGELOG.md](CHANGELOG.md) and in the
application's **Changelog** view.

## License

Original source code: MIT, see [LICENSE](LICENSE). Third-party trademarks and
brand assets are excluded; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
