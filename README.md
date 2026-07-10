# Paygate Payment Tester

Browser-based development tool for creating, inspecting and troubleshooting
encrypted [Paygate](https://www.computop.com) payment requests.

![Version](https://img.shields.io/badge/version-3.6.6-blueviolet)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen)

**[Open the live app](https://krebs3r.github.io/computop-tester/)**

> This is an independent development tool and is not currently an officially
> approved product of Computop or Nexi Group. The optional Nexi presentation is
> an unofficial technical preview.

Everything runs in the browser. There is no application backend and no build
step. The app can be opened directly through `file://`; PWA installation,
offline caching and automatic browser redirects require HTTP/HTTPS.

## Supported Workflows

### Classic Paygate

- Hosted Payment Page (`paymentPage.aspx`), Credit Card Form (`payssl.aspx`)
  and Pay By Link (`PayByLink.aspx`)
- HMAC-SHA256 MAC generation through the native Web Crypto API
- Blowfish ECB encryption and decryption
- Optional AES-CBC/PKCS7 `Data`/`Len` handling for MIDs enabled by Computop
  Helpdesk
- Transaction-status inquiries through `inquire.aspx` and `inquire24.aspx`
- Configurable payment methods, templates, redirect URLs and callback URLs
- Optional customer, billing, shipping, `ArticleList` and template
  `CustomField1`–`CustomField9` data
- Simulation presets, Non-3DS/3DS test-card references and a non-executable
  demo preview that does not require real credentials
- QR sharing for suitable request URLs and a copyable-link fallback for URLs
  that are too long for a reliable QR code
- Optional embedded PaySSL form on supported HTTP/HTTPS deployments

### REST API

- Local REST V1/V2 request generation without sending requests from the browser
- REST V1 payment and status-inquiry requests
- REST V2 checkout-session, hosted-card and payment-link request shapes
- Basic Auth and OAuth2 Client Credentials output
- cURL, PowerShell, Postman Collection v2.1 and raw HTTP formats
- Safe authentication placeholders by default; credentials are optional until
  they are deliberately embedded into generated output
- Syntax-highlighted JSON and executable command previews

### Analysis, Tools and Local Data

- Classic callback decryption and REST JSON inspection
- Combined Classic/REST response log with interface, status and payment-method
  badges
- Request and response logs with up to 250 entries each
- JSON backup and restoration of both logs
- Standalone MAC validator and Base64 encoder/decoder
- `credentialOnFile` examples for CIT and MIT parameters
- Named, locally encrypted credential profiles with an optional master password
- German and English interface, three appearance modes and two presentations
- Installable PWA with network-first offline caching

The use-case selector also contains placeholders for possible future workflows
such as MIT/CIT. These are not implemented payment workflows yet; the current
MIT/CIT support consists of parameter examples in the Tools view.

## Quick Start

1. Open the [live app](https://krebs3r.github.io/computop-tester/), download a
   release or clone the repository.
2. For local use, open `index.html` in a modern browser. No local server is
   required.
3. In **Step 1 — Configuration**, select Classic or REST and enter only the
   credentials needed for the selected interface. REST requests can be built
   entirely with placeholders.
4. In **Step 2 — Configure Request**, choose payment creation or a
   transaction-status inquiry and configure the visible interface-specific
   fields.
5. Generate the preview, inspect the assembled values and copy or deliberately
   execute the result. The browser never submits REST requests itself.

Classic status inquiries do not require the HMAC password. For a Classic
payment preview without real credentials, enable the demo option. Demo URLs
cannot be opened, stored in the request log or shared as QR codes.

If Step 1 or Step 2 data changes after generation, Step 3 is marked as outdated
and executable actions remain disabled until the preview is refreshed. **Start
new payment flow** resets the current workflow and Transaction ID without
deleting saved profiles, logs or settings.

## Payment Workflow

The Payment Workflow follows the same three-step sequence for Classic and REST:

1. **Configuration** selects the interface and manages credentials or saved
   profiles.
2. **Configure Request** selects the use case and contains only the options
   relevant to the current interface.
3. **Preview & Submit** explains the assembled request before offering copy,
   download or Classic execution actions.

For Classic payment requests, Step 3 presents the construction process in this
order:

1. Composed API parameters such as `billToCustomer`, `billingAddress`,
   shipping objects and `ArticleList`, including decoded JSON and transmitted
   Base64 values
2. Plain-text Classic payload before Blowfish ECB or AES-CBC encryption
3. Complete encrypted `Data` parameter
4. Unencrypted query parameters, including language, template, callback URLs
   and supported `CustomField1`–`CustomField9` values
5. Final request URL and available execution actions

Pay By Link additionally shows its inner HPP payload and outer Pay By Link
payload. The endpoint is designed as a server-to-server API, so browser CORS
rules may prevent the app from reading the generated customer link. Its
`action=create` URL can still be inspected and copied.

REST mode instead shows composed objects, the final JSON payload and the
selected client command. V1 uses the shared `/api/v1/payments` endpoint; V2 uses
use-case-specific endpoints and an `Idempotency-Key` header. REST requests are
copy-only because API credentials and execution belong in a backend or a
controlled external tool.

## Responses and Callbacks

**Response Analysis** decrypts Classic callback data or formats and inspects
REST JSON. Analysed results are added to the shared Response Log.

On HTTP/HTTPS deployments, the internal callback receiver can set
`URLSuccess`, `URLFailure` and `URLBack` to the tester. Browser redirects then
return to Response Analysis automatically. REST success, failure and cancel
redirects can also be captured in the Response Log.

`URLNotify` is different: it is a server-to-server notification and cannot be
received or observed by this static browser app. It must point to a trusted,
reachable backend under your control. The optional httpbingo.org preset is
only a payload-completeness aid for synthetic test data; notifications sent
there are received externally, not by this application.

Direct `file://` use cannot reliably receive redirects from an external Paygate
page. Use the GitHub Pages deployment or serve the directory through a local
HTTP server when testing automatic callback returns.

When installed as a PWA, Paygate still opens in the browser because it is
outside the app's origin and scope. After the redirect, the callback can be
transferred to the already open PWA. Window focusing and closing behaviour
varies by browser and platform.

## Application Views

The app opens on the standalone **Overview** page. Below the local-download
links, app-area cards mirror the main navigation badges and jump directly to
the most common destinations.

| View | Purpose | URL hash |
|---|---|---|
| Overview | Start page with introduction, security notice, download links and app-area shortcuts | `#overview` |
| Payment Workflow | Build Classic and REST requests from configuration through preview | `#payment-workflow` |
| Configure Request | Jump directly to Step 2 in the Payment Workflow | `#card-payment` |
| Preview & Submit | Jump directly to Step 3 in the Payment Workflow | `#card-preview` |
| Request Log | Review recently generated requests | `#request-log` |
| Response Analysis | Decrypt Classic callbacks and inspect REST JSON | `#response` |
| Response Log | Review analysed responses and captured browser redirects | `#response-log` |
| Tools | Validate MACs and encode or decode Base64 parameters | `#tools` |
| Help | Read integration guidance and open official resources | `#help` |
| Changelog | Review the complete bilingual release history | `#changelog` |

The settings menu provides language, appearance and presentation controls,
log backup and restoration, log management and deletion of all local app data.
Deleting all local data also clears the app's service-worker caches and
unregisters its service worker.

## Local Use and Installation

Clone the repository or download and extract a ZIP, then open `index.html`.
Scripts, styles, fonts and runtime assets are self-hosted, so the core app works
without a development server.

Service workers require HTTP/HTTPS. Offline caching and PWA installation
therefore become available only on deployments such as GitHub Pages or a local
HTTP server.

The in-app source download points to the current `main` branch and may include
changes newer than the latest release. For a stable, tagged version with
release notes, use [GitHub Releases](https://github.com/krebs3r/computop-tester/releases).

The embedded PaySSL form also requires HTTP/HTTPS and permission from the
Paygate page to be framed. On `file://`, the app keeps the preview visible and
shows an explanatory placeholder; opening PaySSL in a new browser tab remains
available.

## Data, Privacy and Security

| Data | Storage or processing |
|---|---|
| Payment request | Generated locally in the browser |
| REST request | Generated and formatted locally; never submitted by the app |
| MAC | HMAC-SHA256 through Web Crypto |
| Classic payload | Blowfish ECB, or optional Helpdesk-enabled AES-CBC/PKCS7 |
| Credential profiles | AES-GCM-encrypted in `localStorage` |
| Request and response logs | Plain records in `IndexedDB`, with a `localStorage` fallback |
| Language, appearance and settings | `localStorage` |
| Runtime assets | Self-hosted; external scripts, styles and fonts are blocked |

By default, the credential-profile encryption key is derived from an
application-owned static passphrase. This protects against casual inspection
of `localStorage`, but the key can be reconstructed from the public source
code. Enabling the optional master password derives the key from a user-owned
secret instead. Neither mode protects against malicious code running in the
active browser profile, and neither replaces a password manager or backend
secret store.

When the hosted Paygate page or an external documentation link is opened, data
leaves the app deliberately. Callback query parameters also pass through the
hosting provider's server logs before being processed locally. Classic callback
`Data` remains encrypted during that redirect and is decrypted only in the
browser.

The Content Security Policy blocks inline and external scripts, styles and
fonts, restricts cross-origin connections and limits forms and frames to the
required Paygate origins. A runtime frame-buster protects the application
itself because the `frame-ancestors` directive cannot be enforced through a
meta CSP.

Use only trusted HTTPS callback targets under your control. Prefer test
credentials, synthetic customer data and small test amounts. Credit-card
authorisations may still be real depending on the merchant configuration.

## Presentation and Branding

The original presentation is the default. The optional, unofficial Nexi
preview can be enabled in Settings or with `?design=nexi`;
`?design=original` restores the default. Light, dark and automatic system
appearance work independently of the selected presentation.

Nexi trademarks, logos, fonts and other brand assets are not covered by this
project's MIT License. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Project Structure

```text
index.html                 Application markup and static entry point
css/style.css              Application styles
js/bootstrap.js            Early presentation/theme bootstrap
js/app.js                  Application runtime logic
js/i18n.js                 German and English translations
js/changelog-data.js       Bilingual in-app release history
js/help-data.js            Bilingual Help content and resource links
js/vendor/qrcode.js        Vendored MIT-licensed QR generator
assets/fonts/              Self-hosted application fonts
assets/nexi/               Nexi preview fonts, logos and notices
assets/payment-page/       Hosted Payment Page merchant-logo PNGs
icons/                     Browser, Apple Touch, PWA and header icons
service-worker.js          PWA network-first cache
manifest.json              Web app manifest
og-image.png               Open Graph and social sharing preview
CNAME                      GitHub Pages custom domain
.nojekyll                  Disables Jekyll processing on GitHub Pages
VERSION                    Canonical application version
CHANGELOG.md               Complete release history
THIRD_PARTY_NOTICES.md     Third-party sources and license exclusions
LICENSE                    MIT License for the original source code
```

## Releases and License

The complete release history is available in [CHANGELOG.md](CHANGELOG.md) and
in the application's **Changelog** view.

Original source code is licensed under the MIT License; see
[LICENSE](LICENSE). Third-party trademarks and brand assets are excluded; see
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
