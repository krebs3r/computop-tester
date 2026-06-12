'use strict';

// Trusted, static help content rendered by index.html. Kept separate for readability.
const HELP_CONTENT = {
  de: `
    <nav class="help-jump" aria-label="Themen auf dieser Hilfeseite">
      <a href="#help-integration">Integration wählen</a>
      <a href="#help-usage">App verwenden</a>
      <a href="#help-docs">Dokumentation</a>
      <a href="#help-testing">Test & Fehler</a>
      <a href="#help-privacy">Datenschutz</a>
    </nav>

    <section class="help-section help-priority" id="help-integration">
      <div class="help-section-heading">
        <span class="help-kicker">Startpunkt</span>
        <h2>Welche Integration passt?</h2>
        <p>Die Wahl betrifft nicht nur das Datenformat, sondern auch Architektur, Credential-Schutz und den späteren Betrieb.</p>
      </div>
      <div class="help-comparison">
        <article class="help-option">
          <div class="help-option-title"><span class="help-type-badge classic">Classic</span><h3>Classic Paygate</h3></div>
          <p>Der Shop erzeugt einen verschlüsselten <code>Data</code>-String mit <code>Len</code> und <code>MAC</code> und leitet den Browser an eine Paygate-Seite weiter.</p>
          <h4>Geeignet für</h4>
          <ul><li>Bestehende oder kompatible Classic-Anbindungen</li><li>Schnelle browserbasierte Weiterleitung zu Hosted Payment Page, Kreditkartenformular oder Pay By Link</li><li>Teams, die die etablierte Data/Len/MAC-Schnittstelle betreiben</li></ul>
          <h4>Vorteile</h4>
          <ul><li>Direkt aus diesem Tester start- und nachvollziehbar</li><li>Gehostete Zahlungsformulare reduzieren den Umgang mit Kartendaten</li><li>Reife, breit dokumentierte Schnittstelle</li></ul>
          <h4>Nachteile</h4>
          <ul><li>Proprietäre Blowfish-/MAC-Aufbereitung</li><li>Callbacks und Redirects müssen sauber verarbeitet werden</li><li>Weniger nah an üblichen JSON-/REST-Toolchains</li></ul>
        </article>
        <article class="help-option recommended">
          <div class="help-option-title"><span class="help-type-badge rest">REST</span><h3>REST API</h3></div>
          <p>Das Integrationssystem sendet strukturierte JSON-Requests über HTTPS. Dieser Tester baut die Requests nur zusammen; die Ausführung erfolgt serverseitig oder mit einem externen Tool.</p>
          <h4>Geeignet für</h4>
          <ul><li>Neue Backend- und API-zentrierte Integrationen</li><li>Teams mit cURL, PowerShell, Postman oder REST-Clients</li><li>Systeme, die standardisierte HTTP- und JSON-Verarbeitung bevorzugen</li></ul>
          <h4>Vorteile</h4>
          <ul><li>Standardisierte JSON-/HTTP-Workflows</li><li>Basic Auth oder OAuth2 Client Credentials</li><li>Klare Trennung zwischen Browser-UI und sicherem Backend</li></ul>
          <h4>Nachteile</h4>
          <ul><li>Keine direkte Ausführung aus dieser Browser-App</li><li>Für die sichere Ausführung ist ein Backend oder kontrolliertes externes Tool erforderlich</li><li>V1 und V2 besitzen unterschiedliche Endpunkte und Schemas</li></ul>
        </article>
      </div>
      <div class="help-callout"><strong>Faustregel:</strong> Bestehende Classic-Strecken bleiben häufig bei Data/Len/MAC. Für neue API-Projekte ist REST meist die natürlichere Architektur. Vertrag, freigeschaltete Funktionen und die projektspezifische Vorgabe bleiben jedoch maßgeblich.</div>
      <div class="help-version-grid">
        <article><span>REST V1</span><p>Ein gemeinsamer Payments-Endpunkt und das im Builder abgebildete V1-Schema. Die offizielle Dokumentation weist V1 primär bestehenden Händlern zu; in abgestimmten Projekten kann V1 weiterhin ausdrücklich vorgegeben sein.</p></article>
        <article><span>REST V2</span><p>Neuere, stärker nach Anwendungsfall getrennte Endpunkte für Checkout Sessions, Hosted Card Payments und Payment Links. Schema und Aktivierung vor der produktiven Integration prüfen.</p></article>
      </div>
    </section>

    <section class="help-section" id="help-usage">
      <div class="help-section-heading"><span class="help-kicker">Anleitung</span><h2>So verwendest du die App</h2></div>
      <ol class="help-steps">
        <li><strong>Credentials nur bei Bedarf eintragen</strong><span>Für Classic sind Merchant ID, Blowfish- und HMAC-Passwort erforderlich. REST-Requests lassen sich ohne Zugangsdaten mit sicheren Platzhaltern erstellen; Merchant ID und API-Key werden nur für eine Ausgabe mit echter Authentifizierung benötigt.</span></li>
        <li><strong>Schnittstelle wählen</strong><span>In Schritt 2 zwischen Classic Paygate und REST API wechseln und Zahlungsart, URLs, Betrag und weitere Parameter konfigurieren.</span></li>
        <li><strong>Vorschau erzeugen</strong><span>Classic zeigt Klartextparameter, verschlüsselte Daten, Länge und GET-URL. REST zeigt JSON sowie das gewählte cURL-, PowerShell-, Postman- oder Raw-HTTP-Format.</span></li>
        <li><strong>Ausführung bewusst wählen</strong><span>Classic kann die Paygate-Seite in einem neuen Tab öffnen. REST wird nicht vom Browser gesendet: Ausgabe kopieren und im Backend oder externen Tool ausführen.</span></li>
        <li><strong>Ergebnis prüfen</strong><span>Classic Requests und entschlüsselte Callbacks können in den lokalen Logs nachvollzogen werden. REST-Antworten werden aktuell nicht automatisch in der App verarbeitet.</span></li>
      </ol>
    </section>

    <section class="help-section" id="help-docs">
      <div class="help-section-heading"><span class="help-kicker">Offizielle Quellen</span><h2>Dokumentation</h2><p>Die verlinkten Paygate-Seiten sind für die technische Umsetzung maßgeblich.</p></div>
      <div class="help-resource-grid">
        <a class="help-resource" href="https://developer.computop.com/pages/viewpage.action?pageId=25296736" target="_blank" rel="noopener"><span class="help-type-badge classic">Classic</span><strong>Einführung & Schnittstellen</strong><small>Überblick über Hosted Payment Page, paySSL und Server-to-Server-Anbindungen</small></a>
        <a class="help-resource" href="https://developer.computop.com/display/EN/Card+processing+-+common+form" target="_blank" rel="noopener"><span class="help-type-badge classic">Classic</span><strong>Kreditkartenformular</strong><small>Details zur gehosteten Kartenverarbeitung</small></a>
        <a class="help-resource" href="https://developer.computop.com/pages/viewpage.action?pageId=170952795" target="_blank" rel="noopener"><span class="help-type-badge rest">REST V1</span><strong>REST API V1</strong><small>Einführung, Sicherheit und Authentifizierung</small></a>
        <a class="help-resource" href="https://app.swaggerhub.com/apis-docs/Computop/Paygate_REST_API/1#/Payments" target="_blank" rel="noopener"><span class="help-type-badge rest">Swagger</span><strong>REST V1 OpenAPI</strong><small>Request-Schemas und Payments-Endpunkte</small></a>
        <a class="help-resource" href="https://developer.computop.com/pages/viewpage.action?pageId=179963381" target="_blank" rel="noopener"><span class="help-type-badge rest">REST V2</span><strong>REST API V2</strong><small>Übersicht und Integrationsansätze der aktuellen API</small></a>
        <div class="help-resource placeholder"><span class="help-type-badge pending">Offen</span><strong>REST V2 OpenAPI</strong><small>Direkter, final bestätigter Swagger-/OpenAPI-Link wird nachgereicht.</small></div>
      </div>
    </section>

    <section class="help-section" id="help-testing">
      <div class="help-section-heading"><span class="help-kicker">Validierung</span><h2>Testdaten & Fehlersuche</h2></div>
      <div class="help-resource-grid compact">
        <a class="help-resource" href="https://developer.computop.com/display/EN/Test+Guide" target="_blank" rel="noopener"><span class="help-resource-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12a2 2 0 0 1 2 2v16H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M8 3v18M8 7h8"/></svg></span><strong>Test Guide</strong><small>Allgemeiner Einstieg in Test- und Simulationsmöglichkeiten</small></a>
        <a class="help-resource" href="https://developer.computop.com/display/EN/Test+credit+card" target="_blank" rel="noopener"><span class="help-resource-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 9h18M7 15h3"/></svg></span><strong>Test-Kreditkarten</strong><small>Offizielle Karten, 3-D-Secure-Szenarien und Testhinweise</small></a>
        <a class="help-resource" href="https://developer.computop.com/display/EN/A4+Error+codes" target="_blank" rel="noopener"><span class="help-resource-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 2.8 19a1.4 1.4 0 0 0 1.2 2h16a1.4 1.4 0 0 0 1.2-2z"/><path d="M12 9v5M12 17.5v.01"/></svg></span><strong>Fehler- und Response-Codes</strong><small>Aufbau der Codes, betroffene Module und Parameterfehler</small></a>
        <a class="help-resource" href="https://computop.statuspage.io/" target="_blank" rel="noopener"><span class="help-resource-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 12h4l2.2-5 4.1 10 2.2-5H21"/><circle cx="12" cy="12" r="9"/></svg></span><strong>Paygate Status</strong><small>Aktuelle Betriebs- und Störungsinformationen</small></a>
      </div>
      <div class="help-callout"><strong>Bei Fehlern zuerst prüfen:</strong> Merchant ID und zugehörige Schlüssel, Test-/Produktivsystem, Betrag in kleinster Währungseinheit, Pflichtfelder, eindeutige Transaktions-ID sowie bei Classic die MAC-Reihenfolge und <code>Len</code>.</div>
    </section>

    <section class="help-section" id="help-privacy">
      <div class="help-section-heading"><span class="help-kicker">Sicherheit</span><h2>Datenschutz & Credentials</h2></div>
      <div class="help-privacy-grid">
        <article><h3>Was lokal bleibt</h3><p>Request-Aufbereitung, Verschlüsselung und REST-Codegenerierung erfolgen im Browser. Classic- und Response-Logs liegen lokal in IndexedDB, mit LocalStorage-Fallback.</p></article>
        <article><h3>Wann Daten das Gerät verlassen</h3><p>Bei Classic erst beim bewussten Öffnen der Paygate-URL. REST sendet diese App grundsätzlich nicht. Externe Dokumentationslinks verlassen beim Öffnen die App.</p></article>
        <article><h3>Gespeicherte Credentials</h3><p>Profile werden AES-GCM-verschlüsselt gespeichert. Der Schlüssel basiert jedoch auf einer app-eigenen statischen Passphrase und ersetzt keinen Passwortmanager oder geschützten Backend-Secret-Store.</p></article>
        <article><h3>Empfehlung</h3><p>Test-Credentials bevorzugen, produktive Secrets nur lokal und kurzzeitig verwenden, REST-Ausgaben standardmäßig mit Platzhaltern erzeugen und Browser-/Shell-History beachten.</p></article>
      </div>
      <div class="help-warning"><strong>Wichtig:</strong> REST API-Key oder OAuth Client Secret gehören im Produktivbetrieb in ein Backend oder Secret-Management-System. Sie sollten nicht aus öffentlich ausgeliefertem Browser-Code an die API gesendet werden.</div>
    </section>
  `,
  en: `
    <nav class="help-jump" aria-label="Topics on this help page">
      <a href="#help-integration">Choose integration</a><a href="#help-usage">Use the app</a><a href="#help-docs">Documentation</a><a href="#help-testing">Testing & errors</a><a href="#help-privacy">Privacy</a>
    </nav>
    <section class="help-section help-priority" id="help-integration">
      <div class="help-section-heading"><span class="help-kicker">Starting point</span><h2>Which integration fits?</h2><p>The choice affects data format, architecture, credential protection and ongoing operations.</p></div>
      <div class="help-comparison">
        <article class="help-option"><div class="help-option-title"><span class="help-type-badge classic">Classic</span><h3>Classic Paygate</h3></div><p>The shop creates an encrypted <code>Data</code> string with <code>Len</code> and <code>MAC</code>, then redirects the browser to a Paygate page.</p><h4>Suitable for</h4><ul><li>Existing or compatible Classic integrations</li><li>Browser redirects to Hosted Payment Page, credit card form or Pay By Link</li><li>Teams operating the established Data/Len/MAC interface</li></ul><h4>Advantages</h4><ul><li>Can be launched and inspected directly from this tester</li><li>Hosted forms reduce direct handling of card data</li><li>Mature and broadly documented interface</li></ul><h4>Disadvantages</h4><ul><li>Proprietary Blowfish and MAC preparation</li><li>Callbacks and redirects require careful handling</li><li>Less aligned with standard JSON/REST tooling</li></ul></article>
        <article class="help-option recommended"><div class="help-option-title"><span class="help-type-badge rest">REST</span><h3>REST API</h3></div><p>The integration system sends structured JSON over HTTPS. This tester only assembles requests; execution takes place server-side or in an external tool.</p><h4>Suitable for</h4><ul><li>New backend and API-centred integrations</li><li>Teams using cURL, PowerShell, Postman or REST clients</li><li>Systems preferring standard HTTP and JSON processing</li></ul><h4>Advantages</h4><ul><li>Standard JSON/HTTP workflows</li><li>Basic Auth or OAuth2 Client Credentials</li><li>Clear separation between browser UI and secure backend</li></ul><h4>Disadvantages</h4><ul><li>No direct execution from this browser app</li><li>Secure execution requires a backend or controlled external tool</li><li>V1 and V2 use different endpoints and schemas</li></ul></article>
      </div>
      <div class="help-callout"><strong>Rule of thumb:</strong> Existing Classic flows often remain on Data/Len/MAC. REST is usually the more natural architecture for new API projects. Contract, enabled features and project requirements remain decisive.</div>
      <div class="help-version-grid"><article><span>REST V1</span><p>A shared payments endpoint and the V1 schema represented by the builder. Official documentation primarily assigns V1 to existing merchants, though agreed projects may still explicitly require it.</p></article><article><span>REST V2</span><p>Newer, use-case-specific endpoints for checkout sessions, hosted card payments and payment links. Verify schema and account activation before production integration.</p></article></div>
    </section>
    <section class="help-section" id="help-usage"><div class="help-section-heading"><span class="help-kicker">Guide</span><h2>How to use the app</h2></div><ol class="help-steps"><li><strong>Enter credentials only when needed</strong><span>Classic requires Merchant ID plus Blowfish and HMAC passwords. REST requests can be built without credentials using secure placeholders; Merchant ID and API key are only needed for output with real authentication.</span></li><li><strong>Choose the interface</strong><span>In Step 2 select Classic Paygate or REST API, then configure payment type, URLs, amount and other parameters.</span></li><li><strong>Generate a preview</strong><span>Classic shows plain parameters, encrypted data, length and GET URL. REST shows JSON and the selected cURL, PowerShell, Postman or raw HTTP format.</span></li><li><strong>Choose execution deliberately</strong><span>Classic can open the Paygate page in a new tab. REST is never sent by the browser: copy it to a backend or external tool.</span></li><li><strong>Review the result</strong><span>Classic requests and decrypted callbacks are available in local logs. REST responses are not currently processed automatically by the app.</span></li></ol></section>
    <section class="help-section" id="help-docs"><div class="help-section-heading"><span class="help-kicker">Official sources</span><h2>Documentation</h2><p>The linked Paygate pages are authoritative for implementation.</p></div><div class="help-resource-grid">
      <a class="help-resource" href="https://developer.computop.com/pages/viewpage.action?pageId=25296736" target="_blank" rel="noopener"><span class="help-type-badge classic">Classic</span><strong>Introduction & interfaces</strong><small>Hosted Payment Page, paySSL and server-to-server overview</small></a><a class="help-resource" href="https://developer.computop.com/display/EN/Card+processing+-+common+form" target="_blank" rel="noopener"><span class="help-type-badge classic">Classic</span><strong>Credit card form</strong><small>Hosted card processing details</small></a><a class="help-resource" href="https://developer.computop.com/pages/viewpage.action?pageId=170952795" target="_blank" rel="noopener"><span class="help-type-badge rest">REST V1</span><strong>REST API V1</strong><small>Introduction, security and authentication</small></a><a class="help-resource" href="https://app.swaggerhub.com/apis-docs/Computop/Paygate_REST_API/1#/Payments" target="_blank" rel="noopener"><span class="help-type-badge rest">Swagger</span><strong>REST V1 OpenAPI</strong><small>Request schemas and payment endpoints</small></a><a class="help-resource" href="https://developer.computop.com/pages/viewpage.action?pageId=179963381" target="_blank" rel="noopener"><span class="help-type-badge rest">REST V2</span><strong>REST API V2</strong><small>Current API overview and integration approaches</small></a><div class="help-resource placeholder"><span class="help-type-badge pending">Pending</span><strong>REST V2 OpenAPI</strong><small>A final confirmed direct Swagger/OpenAPI link will be added.</small></div>
    </div></section>
    <section class="help-section" id="help-testing"><div class="help-section-heading"><span class="help-kicker">Validation</span><h2>Test data & troubleshooting</h2></div><div class="help-resource-grid compact"><a class="help-resource" href="https://developer.computop.com/display/EN/Test+Guide" target="_blank" rel="noopener"><span class="help-resource-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12a2 2 0 0 1 2 2v16H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M8 3v18M8 7h8"/></svg></span><strong>Test Guide</strong><small>General test and simulation guidance</small></a><a class="help-resource" href="https://developer.computop.com/display/EN/Test+credit+card" target="_blank" rel="noopener"><span class="help-resource-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 9h18M7 15h3"/></svg></span><strong>Test credit cards</strong><small>Official cards, 3-D Secure scenarios and notes</small></a><a class="help-resource" href="https://developer.computop.com/display/EN/A4+Error+codes" target="_blank" rel="noopener"><span class="help-resource-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 2.8 19a1.4 1.4 0 0 0 1.2 2h16a1.4 1.4 0 0 0 1.2-2z"/><path d="M12 9v5M12 17.5v.01"/></svg></span><strong>Error and response codes</strong><small>Code structure, modules and parameter errors</small></a><a class="help-resource" href="https://computop.statuspage.io/" target="_blank" rel="noopener"><span class="help-resource-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 12h4l2.2-5 4.1 10 2.2-5H21"/><circle cx="12" cy="12" r="9"/></svg></span><strong>Paygate status</strong><small>Current service and incident information</small></a></div><div class="help-callout"><strong>Check first:</strong> Merchant ID and matching keys, test versus production environment, amount in minor units, required fields, unique transaction ID and, for Classic, MAC order and <code>Len</code>.</div></section>
    <section class="help-section" id="help-privacy"><div class="help-section-heading"><span class="help-kicker">Security</span><h2>Privacy & credentials</h2></div><div class="help-privacy-grid"><article><h3>What stays local</h3><p>Request preparation, encryption and REST code generation run in the browser. Classic and response logs are stored locally in IndexedDB with a LocalStorage fallback.</p></article><article><h3>When data leaves the device</h3><p>For Classic, only when the Paygate URL is deliberately opened. This app never sends REST requests. External documentation links leave the app when opened.</p></article><article><h3>Stored credentials</h3><p>Profiles use AES-GCM encryption. The key is based on an application-owned static passphrase, so this is not equivalent to a password manager or protected backend secret store.</p></article><article><h3>Recommendation</h3><p>Prefer test credentials, use production secrets locally and briefly, keep REST placeholders enabled by default and consider browser and shell history.</p></article></div><div class="help-warning"><strong>Important:</strong> In production, REST API keys or OAuth client secrets belong in a backend or secret-management system, not in publicly delivered browser code.</div></section>
  `
};
