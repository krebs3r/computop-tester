# Changelog

All notable changes to Paygate Payment Tester are documented here.

### v3.1.2 — Help Resources and Interface Fixes
- Added optional shop-plugin documentation and download resources for supported branded preview contexts
- Refined the Help view with a dedicated plugin resource layout and source guidance
- Improved footer alignment so external links stay grouped next to the clear-all action
- Improved light-mode readability and hover behaviour for help navigation chips
- Kept header feature chips readable on hover in light-mode branded previews
- Clarified that the external callback demo only covers visible redirects and keeps asynchronous server notifications empty
- Standardised the visible application name to Paygate Payment Tester
- Kept the application cache and visible version metadata aligned with this release

### v3.1.1 — Status Guidance and Interface Polish
- Added explanatory tooltips for status lookup type, Payment ID/PayID and Transaction ID
- Clarified that `Status=OK` confirms a successful inquiry, not necessarily a successful payment
- Added guidance for interpreting `AmountAuth`, `AmountCap`, `AmountCred` and `LastStatus`
- Added matching SVG icons to the interface and use-case selectors
- Added the standard `mobile-web-app-capable` metadata required by current Chromium browsers

### v3.1.0 — Transaction Status Inquiries
- Renamed Step 2 to Request Configuration and added a dedicated use-case selector
- Added transaction-status inquiries for Classic Paygate through `inquire.aspx` and `inquire24.aspx`
- Added REST API V1 status inquiries by Payment ID or Transaction ID
- Added body-less GET output for cURL, PowerShell, Postman Collection and raw HTTP
- Added context-specific credential requirements for Classic status inquiries without HMAC
- Added a dedicated Classic status preview with encrypted parameters, final URL and direct execution
- Prepared the interface for future MIT/CIT workflows without enabling undocumented request logic
- Added Classic and REST interface badges to the Request Log, including detection for existing entries
- Improved Request Log entries for status inquiries with PayID or Transaction ID labels
- Removed public callback services from the default redirect URLs
- Enabled the internal callback receiver by default on HTTP/HTTPS deployments
- Added an optional httpbingo.org demo preset with explicit external-service and synthetic-data guidance
- Added clear guidance when the callback receiver is unavailable through `file://`
- Replaced localised sample-shop domains with translated paths on the reserved `example.com` domain

### v3.0.2 — Minor Design Adjustments
- Refined the visual presentation and supporting interface details

### v3.0.1 — Optional REST Credentials
- Clarified that Step 1 credentials are required for Classic Paygate but optional when building REST requests
- Changed the Step 1 navigation badge from Payment Workflow to Optional while REST is selected
- Added integration-specific guidance explaining when Classic and REST credentials are needed
- Grouped Classic credentials and optional REST authentication into clearly labelled visual sections
- Removed the Merchant ID required marker in REST mode and documented safe placeholder generation
- Updated the Help view and README to describe credential-free REST request generation
- Added bilingual inline tooltips for REST API version, payment type, environment, authentication and output format
- Increased transparency and backdrop depth across navigation, footer, workflow, Help and Changelog glass surfaces
- Added slim transparent glass scrollbars with dedicated dark, light and hover treatments
- Added immediate validation for REST credential opt-in: missing values disable the option again and guide users to Step 1
- Replaced the native browser confirmation for deleting credential profiles with a bilingual in-app confirmation dialog

### v3.0.0 — REST Request Builder
- Added Classic Paygate and REST API selection inside the Payment Workflow
- Added REST API V1 and V2 request generation for Hosted Payment Page, Card Form and Pay By Link
- Added version-specific V1/V2 payloads and endpoints, including V2 checkout sessions, hosted card payments and payment links
- Added V2 fields such as `transId`, string-based `order.description`, hosted card configuration and `Idempotency-Key`
- Added Basic Auth and OAuth2 Client Credentials output templates for production and test environments
- Added cURL, PowerShell, Postman Collection v2.1 and raw HTTP formats with execution guidance
- Added syntax highlighting to generated JSON and executable request output
- Added official test-card guidance while keeping card data outside generated REST payloads
- Added optional REST API key storage to encrypted local credential profiles
- Kept REST generation local with no browser-side request submission and safe placeholders by default
- Added an explicit opt-in before credentials are embedded into copied output
- Moved the Classic GET-URL explanation into the Classic integration flow and hid it in REST mode
- Added green Payment Workflow and blue Classic navigation badges to clarify feature ownership
- Added REST API, JSON Builder and external-tool feature pills below the main title
- Clarified REST version labels and removed outdated recommendation or schema-check wording
- Standardised visible product naming to Paygate across the interface, manifest and documentation
- Updated the footer, application metadata, PWA cache and documentation to version 3.0.0
- Stabilised workflow navigation highlighting during smooth scrolling and hid card-header dividers while cards are collapsed
- Restored a bilingual waiting message in Step 3 whenever switching between Classic and REST clears the current preview
- Added automatic desktop navbar overflow controls with glass arrow buttons and mouse-wheel horizontal scrolling
- Added a bilingual Help view with Classic/REST decision guidance, app instructions, official documentation, test resources, error codes and privacy notes
- Added a violet Guide badge below the Help navigation item
- Kept Payment Workflow, Classic and Guide navigation badges in their green, blue and violet group colours while their navigation item is active
- Refined the Step 3 waiting state to match the standard inline information style with a clean icon-and-text baseline
- Added themed inline SVG icons for the Help page's test guide, test cards, error-code and Paygate-status resources

### v2.9.0 — PWA Payment Return
- Added a secure callback relay from the external Paygate browser tab to an already open installed PWA
- Kept `noopener` isolation for the payment window and transferred callbacks through `BroadcastChannel` with a storage fallback
- Added acknowledgement handling so the callback tab only closes after the PWA has received the response
- Added manifest scope and launch-handler hints for browsers that can reuse an existing installed app window
- Added PWA-specific payment guidance while preserving the existing browser workflow
- Added the glass shield logo to every standalone application view
- Displayed the compact GitHub repository address in the footer and updated the Paygate documentation target

### v2.8.0 — Main Page Introduction
- Added a concise bilingual introduction explaining the purpose of the Paygate Payment Tester
- Summarised request creation, encryption inspection and response analysis in three responsive feature panels
- Added a clear local-processing note explaining that no installation or dedicated backend is required
- Matched the introduction to the existing glass design and mobile layout

### v2.7.9 — Unified Page Headings
- Removed the standalone page title override that increased headings to 56px
- Applied the Payment Workflow heading scale with a 44px maximum to every application view
- Matched the mobile heading scale and title spacing across all pages

### v2.7.8 — Inline Alignment Polish
- Corrected the text baseline of information-box labels and their icons
- Centered the Paygate badge icon, dot and text on one consistent line
- Applied the information-label fix to both the Payment Workflow and Response Decryption views

### v2.7.7 — Glass Header Icon & Feature Pills
- Reworked the header shield tile as a translucent glass surface with backdrop blur
- Added dedicated dark- and light-mode treatments while keeping the shield clearly visible
- Replaced the dot-separated integration subtitle with five compact responsive feature pills
- Kept every feature label individually translatable in German and English

### v2.7.6 — Compact Navigation Separators
- Removed redundant group separator lines from the horizontally scrollable navigation
- Preserved the subtle grouping divider in the full-width desktop layout

### v2.7.5 — Floating Glass Footer
- Matched the footer container width to the 1400px glass navigation
- Added the same complete glass border and 18px corner radius
- Added balanced outer spacing so the footer floats above the viewport edge
- Mirrored the navigation's compact width and 15px radius on small screens

### v2.7.4 — Glass Footer
- Matched the shared footer background to the glass navigation design
- Added backdrop blur, saturation, translucent borders and subtle inner highlights
- Added balanced dark- and light-mode shadows while preserving the existing full-width footer layout

### v2.7.3 — Consistent View Typography
- Aligned standalone page headings with the Payment Workflow title font weight, letter spacing and line height
- Matched standalone subtitles to the Payment Workflow subtitle family, size, weight and spacing
- Kept the intentionally larger standalone heading size for clear view hierarchy

### v2.7.2 — Social Metadata & SEO
- Completed Open Graph metadata with locale, secure image URL, PNG type and English alt text
- Aligned page, Twitter Card, manifest and social descriptions with the English preview image
- Added crawler directives with large image previews enabled
- Added `SoftwareApplication` structured data for search engines
- Added a preconnect hint for Google Fonts assets

### v2.7.1 — Social Sharing Preview
- Added a dedicated 1200×630 Open Graph image in the app's glass design
- Uses the Paygate Payment Tester shield, supported integrations and core security features
- Added Open Graph, Twitter Card, canonical URL and page description metadata
- Added the social preview image to the offline application cache

### v2.7.0 — IndexedDB Logs & Syntax Highlighting
- Migrated request and response logs from `localStorage` to dedicated IndexedDB object stores
- Automatically imports existing browser logs on first use without losing their history
- Keeps a `localStorage` fallback for browsers or local file contexts where IndexedDB is unavailable
- Increased request and response history from 50 to 250 entries each
- Added safe syntax highlighting for endpoints, parameter names, encrypted values, lengths and response statuses
- Updated log timestamps to follow the selected German or English locale
- Extended Clear All Data to remove both IndexedDB log stores

### v2.6.1 — Unique Pay By Link References
- Automatically generates a RefNr whenever Pay By Link is selected
- Uses cryptographically secure random values within Paygate's 30-character limit
- Keeps a local registry of up to 5,000 used references to prevent reuse in the same browser
- Generates and reserves a fresh reference for every new Pay By Link preview
- Added a manual regenerate button and bilingual UI messages
- Clears the reference registry when using the app's Clear All Data action

### v2.6.0 — Touch & Mobile Layout
- Added iPhone and iPad safe-area support through `viewport-fit=cover` and environment insets
- Reworked the compact navbar into an inertial horizontal touch strip instead of shrinking controls below usable sizes
- Increased navigation and primary interaction targets to at least 44px on coarse-pointer devices
- Added scroll snapping and automatic centering of the active navigation item
- Increased form controls to 16px on touch devices to prevent Safari input zoom
- Enlarged password, copy, tooltip, card-header and footer interaction areas
- Made test-card tables horizontally scrollable on narrow screens
- Stacked workflow buttons and profile controls where needed on very small displays

### v2.5.2 — Icon & Header Polish
- Matched the icon directory exactly to the proven eight-file structure used by Flux Todo
- Re-rendered all PNG icons with 8x oversampling and Lanczos downsampling for smooth antialiased edges
- Optically centered the shield and check mark with balanced top and bottom spacing
- Added separate standard, rounded browser and maskable SVG source variants
- Added the shield as a resolution-independent inline SVG at the left of the Paygate Payment Tester header
- Added responsive header-icon sizing for smaller screens
- Removed the colored outer glow around the header icon in dark mode

### v2.5.1 — iOS App Icon
- Replaced the previous favicon with a minimal blue-and-white shield icon designed for reliable iOS treatment
- Added a dedicated 180x180 Apple Touch icon plus standard and maskable 192/512 PWA icons
- Mirrored the proven eight-file Flux icon structure with dedicated app, browser and maskable sources
- Removed pre-rendered glass effects so iOS can apply its own dark, tinted and clear icon appearances

### v2.5.0 — Pay By Link
- Added Pay By Link as a third integration method in Step 2
- Added required RefNr and ExpirationDate handling with a seven-day default expiration
- Implemented the documented two-stage Blowfish encryption for inner HPP and outer Pay By Link payloads
- Added separate preview blocks for the inner parameters, outer payload, final query parameters and request URL
- Added bilingual labels, validation messages and an explicit server-to-server/CORS notice
- Added a regression test that decrypts and verifies both encryption layers
- Preserved the existing HPP and PaySSL request paths and direct local `file://` operation

### v2.4.0 — App Shell & Glass UI
- Added dedicated in-app views for Payment Workflow, Request Log, Response Decryption, Response Log and Changelog
- Kept the glass navigation and shared footer visible throughout every application view
- Added URL-hash routing with browser Back/Forward support and direct links to each view
- Kept credentials, payment parameters and preview together in one continuous Payment Workflow
- Replaced the native clear-all browser confirmation with an accessible bilingual in-app modal
- Added a layered blue, violet and cyan background plus translucent blurred cards to make the glass effect clearly visible
- Standardized content and footer widths across all views
- Preserved direct `file://` operation and automatic callback routing to Response Decryption
- Reworked the README for the current architecture, usage, security model, views and tests

### v2.3.0 — Glass Navigation
- Added a fixed three-zone glass navigation bar for the payment steps, logs, response decryptor, changelog, language and theme controls
- Navigation tracks the visible workflow section and remains horizontally usable on smaller screens
- Page content scrolls underneath the translucent backdrop blur

### v2.2.4 — Security & Maintainability
- Dynamic request, callback, profile and log values are rendered as text to prevent HTML injection
- Added crypto regression tests for the existing HMAC-SHA256 and Blowfish output
- Added central version tracking and extracted changelog data

### v2.2.3 — PWA Support & Favicon
- **Progressive Web App** — the app can now be installed as a standalone webapp on all devices (Chrome, Edge, Safari)
- **Favicon** — new shield icon with checkmark as browser tab favicon (inline data URI)
- **Service Worker** — network-first caching for offline usage of the app
- **Web App Manifest** — manifest for app name, icon, and standalone mode

### v2.2.2 — UX Improvements & Changelog Translation
- **Bilingual changelog** — changelog is now dynamically rendered and fully switches between German and English when changing the language
- **Buttons moved** — "Generate Preview" and "New Trans-ID" moved from Step 3 to Step 2, where parameters are configured
- **Test cards moved** — test card tables (Non-3DS & 3-D Secure 2.x) moved from Step 2 to Step 3, right above the submit button
- **Step 3 collapsed** — box is collapsed on first visit with a hint message; auto-expands after preview generation
- Button heights unified — removed inline style override on the submit button

### v2.2 — PaySSL Template Support & URL Parameter Overview
- **Template for payssl.aspx** — the Template parameter is now supported for the credit card form (`payssl.aspx`) as well; for PaySSL the parameter is passed encrypted inside the Data string, for HPP it remains unencrypted as a URL parameter
- **URL parameter box** — new overview in Step 3 displays all unencrypted query-string parameters (`MerchantID`, `Len`, `Data`, `Language`, `URLBack`, `Template`) at a glance
- First debug block renamed to "Encrypted Parameters (Data String)" for clearer distinction

### v2.1.1 — Template Parameter
- **Template parameter** — new dropdown in Advanced Settings to control the payment page layout; options: `ct_paymentpagelogos_v1`, `ct_paymentpagedropdown_v1`, `ct_paymentpagedropdown_v2` or empty (default)
- Template is appended unencrypted to the URL, only for `paymentPage.aspx` (HPP)

### v2.1 — Response Log & Callback Improvements
- **Response log** — stores the last 50 decrypted responses in the browser; expandable entries with status badge (OK/FAILED), TransID, MerchantID and copyable payload; own clear button; also cleared by the global "Clear all data" button
- **"Current" badge** — marks the most recently decrypted response in the result area
- **Auto-expand** — the Response Decryptor card automatically opens on callback redirect
- **OrderDesc default** changed to `Test:0000` (Simulation: success)
- Profile name is no longer written back into the name field when loading a profile
- Bugfix callback receiver: replaced `:has()` selector with compatible `.closest()`; fixed timing issue on auto-decrypt; wrapped `checkCallbackParams()` in try-catch

### v2.0.5 — Callback Receiver & UX Improvements
- **Callback receiver** — toggle in the Redirect URLs section sets URLSuccess, URLFailure and URLBack to the tool's own URL; on return from Paygate the response is auto-decrypted — no external service required
- **Multiple credential profiles** — named, AES-GCM encrypted profiles with a dropdown selector; automatic migration from the old single-credential storage
- **Clear all data** — button in the footer removes all stored data (profiles, request log, settings) in one step
- **Profile name field** is cleared automatically after saving
- **Load icon** corrected — arrow now points upward (upload semantics)
- Page subtitle updated: HPP spelled out as *Hosted Payment Page*
- Environment selector removed — both options pointed to the same URL
- Credential field layout: 2-column row (MerchantID + Blowfish) + full-width HMAC row

### v2.0 — Credit Card Form (payssl.aspx)
- **Integration method selector** — segmented control in Step 2 to switch between *Hosted Payment Page* (`paymentPage.aspx`) and *Credit Card Form* (`payssl.aspx`)
- Info box explains the difference of the selected method; submit button text updates automatically
- **Advanced Settings** section hides when payssl.aspx is selected — PayTypes is not supported there

### v1.9.1 — Tooltip Documentation & UX Improvements
- **Inline tooltips** — `?` icon next to all 15 parameters with a short explanation; viewport-aware positioning (never clipped at the edge)
- **Formatted card numbers** — 3DS 2.x test card numbers now use spaces like the Non-3DS cards (e.g. `4000 0199 6619 9434`)
- **Documentation link** — link to the Paygate documentation added to both test card tables (Non-3DS & 3DS) as a source reference
- **Template parameter removed** — was unnecessary; if Corporate PaymentPage is booked, Paygate loads the layout automatically

### v1.9 — 3-D Secure Test Card Numbers
- Added second test card table **(3-D Secure 2.x)** in the payment parameters section
- Scenarios covered: Frictionless – Authenticated, Challenge (OTP: `1234`), Not authenticated
- Cards for Visa, MasterCard and Amex — colour-coded by scenario

### v1.8.1 — Bugfix: MAC Calculation
- Fixed MAC string format: `*TransID*MerchantID*Amount*Currency` — the leading `*` for empty PayID was missing
- Without this fix Paygate rejected every request with **"MAC INVALID"**
- Updated the technical explainer in the Credentials section accordingly

### v1.8 — Test Cards & Simulation Modes
- **OrderDesc dropdown** with presets for success (`Test:0000`), decline (`Test:0305`) and custom input
- **Test card table** (Non-3DS) embedded in the payment form — Visa, MasterCard, Amex with success and decline card numbers
- Card numbers are click-to-copy
- Table and dropdown fully translated (DE / EN)

### v1.7 — Response Decryptor
- Added **Response Decryptor** section — decrypts Paygate callback URLs directly in the browser
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
- Added **"All enabled payment methods"** as the default `PayTypes` option — omitting the parameter causes Paygate to display every method configured for the merchant account
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
- **New tab redirect** — Paygate HPP opens in a new tab instead of replacing the current page
- Parameter preview with color-coded plain-text display
