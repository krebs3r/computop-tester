// ══════════════════════════════════════════════════════════════
// INLINE SVG ICON SYSTEM — no external dependency
// ══════════════════════════════════════════════════════════════
const ICONS = {
  'shield':         '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  'key-round':      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>',
  'eye':            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
  'eye-off':        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>',
  'lock':           '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  'save':           '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>',
  'trash-2':        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>',
  'credit-card':    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',
  'refresh-cw':     '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>',
  'zap':            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
  'loader':         '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="animation:spin 1s linear infinite"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>',
  'external-link':  '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  'clipboard-list': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
  'copy':           '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
  'check-circle':   '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  'x-circle':       '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
  'info':           '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  'moon':           '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  'sun':            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
};

function icon(name) {
  return ICONS[name] || '';
}

function clearElement(el) {
  while (el && el.firstChild) el.removeChild(el.firstChild);
}

function appendTextElement(parent, tagName, className, text) {
  const el = document.createElement(tagName);
  if (className) el.className = className;
  el.textContent = String(text ?? '');
  parent.appendChild(el);
  return el;
}

function renderParamLines(target, entries, classForKey) {
  clearElement(target);
  entries.forEach(([key, value], index) => {
    if (index > 0) target.appendChild(document.createTextNode('\n'));
    appendTextElement(target, 'span', 'key', key);
    target.appendChild(document.createTextNode('='));
    appendTextElement(target, 'span', classForKey(key, value), value);
  });
}


// ══════════════════════════════════════════════════════════════
// INTERNATIONALISATION — DE / EN
// ══════════════════════════════════════════════════════════════
const LANG_LS_KEY = 'computop_lang';
let currentLang = 'de';

// ══════════════════════════════════════════════════════════════
// INTEGRATION METHOD — Classic Paygate or REST request builder
// ══════════════════════════════════════════════════════════════
let currentIntegration = 'classic';
const CLASSIC_DEMO_CREDENTIALS = Object.freeze({
  merchantId: 'DEMO_MERCHANT_ID',
  encryptionKey: 'DemoKey123456789',
  hmacKey: 'DemoHmacKey-NotReal'
});

function classicDemoEnabled() {
  return document.getElementById('classic-demo-mode')?.checked === true;
}

function classicCredentialsForPreview() {
  const demo = classicDemoEnabled();
  return {
    merchantId: document.getElementById('merchantId').value.trim() || (demo ? CLASSIC_DEMO_CREDENTIALS.merchantId : ''),
    blowfishKey: document.getElementById('blowfishKey').value || (demo ? CLASSIC_DEMO_CREDENTIALS.encryptionKey : ''),
    hmacKey: document.getElementById('hmacKey').value || (demo ? CLASSIC_DEMO_CREDENTIALS.hmacKey : ''),
    isDemo: demo
  };
}

function setClassicDemoPreviewState(isDemo, targetButton) {
  const notice = document.getElementById('classic-demo-preview-notice');
  if (notice) notice.style.display = isDemo ? '' : 'none';
  if (targetButton) targetButton.dataset.demo = String(isDemo);
}

function blockClassicDemoExecution(button) {
  if (button?.dataset.demo !== 'true') return false;
  showToast(t('classic_demo_execution_blocked'), 'error');
  return true;
}
let currentMethod = 'hpp';
let currentUseCase = 'create-payment';
let currentClassicEncryption = 'blowfish';
let statusTransactionCandidates = [];
let statusTransactionRefreshTimer = null;
let statusTransactionRefreshToken = 0;
const PBL_REFS_LS_KEY = 'computop_paybylink_refs';
const previewState = { hasPreview: false, isStale: false, isResetting: false };

function updatePreviewStaleUI() {
  const staleNotice = document.getElementById('preview-stale-notice');
  const submitButton = document.getElementById('btn-submit');
  const statusSubmitButton = document.getElementById('btn-status-submit');
  const isStale = previewState.hasPreview && previewState.isStale;
  staleNotice?.classList.toggle('is-visible', isStale);
  if (submitButton) submitButton.disabled = isStale;
  if (statusSubmitButton) statusSubmitButton.disabled = isStale;
}

function markPreviewFresh() {
  previewState.hasPreview = true;
  previewState.isStale = false;
  updatePreviewStaleUI();
}

function clearPreviewFreshness() {
  previewState.hasPreview = false;
  previewState.isStale = false;
  updatePreviewStaleUI();
}

function markPreviewStale() {
  if (previewState.isResetting || !previewState.hasPreview) return;
  previewState.isStale = true;
  updatePreviewStaleUI();
}

function initPaymentFlowChangeTracking() {
  [document.getElementById('card-creds'), document.getElementById('card-payment')].forEach(card => {
    if (!card) return;
    card.addEventListener('input', event => {
      if (event.target.closest('#btn-preview, #btn-new-flow')) return;
      markPreviewStale();
    });
    card.addEventListener('change', event => {
      if (event.target.closest('#btn-preview, #btn-new-flow')) return;
      markPreviewStale();
    });
  });
}

function onTemplateChange() {
  const sel = document.getElementById('template');
  const custom = document.getElementById('template-custom');
  if (!sel || !custom) return;
  custom.style.display = sel.value === '__custom__' ? '' : 'none';
  if (sel.value === '__custom__') custom.focus();
}

function setMethod(method) {
  const previousMethod = currentMethod;
  if (previousMethod !== method) markPreviewStale();
  currentMethod = method;
  document.getElementById('method-hpp').classList.toggle('method-active', method === 'hpp');
  document.getElementById('method-ccf').classList.toggle('method-active', method === 'ccf');
  document.getElementById('method-pbl').classList.toggle('method-active', method === 'pbl');

  // PayTypes is supported by HPP and the inner Pay By Link payment payload.
  const paytypesRow = document.getElementById('paytypes-row');
  if (paytypesRow) paytypesRow.classList.toggle('hidden', method === 'ccf');
  const pblFields = document.getElementById('pbl-fields');
  if (pblFields) pblFields.classList.toggle('hidden', method !== 'pbl');
  const refHint = document.getElementById('h-refnr');
  if (refHint) refHint.textContent = t(method === 'pbl' ? 'h_refnr_required' : 'h_refnr');
  const refInput = document.getElementById('refNr');
  const refButton = document.getElementById('btn-new-refnr');
  if (refInput) {
    refInput.readOnly = method === 'pbl';
    refInput.style.color = method === 'pbl' ? 'var(--muted2)' : '';
  }
  if (refButton) refButton.style.display = method === 'pbl' ? 'grid' : 'none';
  if (method === 'pbl' && refInput && (previousMethod !== 'pbl' || !refInput.value || isPayByLinkRefUsed(refInput.value))) {
    generatePayByLinkRef();
  }

  // Info-Box Text
  const infoEl = document.getElementById('method-info-text');
  if (infoEl) infoEl.innerHTML = t(`method_info_${method}`);
  updateArticleListVisibility();
  updateCustomFieldsVisibility();

  // Submit-Button Text
  const submitText = document.getElementById('btn-submit-text');
  const submitHint = document.getElementById('btn-submit-hint');
  const submitKey = method === 'hpp' ? 'btn_submit' : `btn_submit_${method}`;
  const submitHintKey = method === 'hpp' ? 'btn_submit_hint' : `btn_submit_hint_${method}`;
  if (submitText) submitText.textContent = t(submitKey);
  if (submitHint) submitHint.textContent = isStandaloneApp() && method !== 'pbl'
    ? t('btn_submit_hint_pwa')
    : t(submitHintKey);
  updateEmbedButtonVisibility();
}

function setIntegration(integration) {
  currentIntegration = integration;
  const isRest = integration === 'rest';
  document.getElementById('integration-classic')?.classList.toggle('method-active', !isRest);
  document.getElementById('integration-rest')?.classList.toggle('method-active', isRest);
  const classicControls = document.getElementById('classic-method-controls');
  const classicEncryptionSection = document.getElementById('workflow-encryption');
  const restControls = document.getElementById('rest-controls');
  const isPayment = currentUseCase === 'create-payment';
  if (classicControls) classicControls.style.display = !isRest && isPayment ? 'flex' : 'none';
  if (classicEncryptionSection) classicEncryptionSection.style.display = !isRest ? '' : 'none';
  if (restControls) restControls.style.display = isRest ? 'block' : 'none';
  updateCredentialModeUI();
  showPreviewEmptyState();
  updateUseCaseUI();
  updateCallbackReceiverAvailabilityUI();
  if (document.getElementById('cb-receiver-toggle')?.checked) _applyCallbackReceiver(true);
}

function setClassicEncryption(encryption) {
  currentClassicEncryption = encryption === 'aes' ? 'aes' : 'blowfish';
  document.getElementById('classic-encryption-blowfish')?.classList.toggle('method-active', currentClassicEncryption === 'blowfish');
  document.getElementById('classic-encryption-aes')?.classList.toggle('method-active', currentClassicEncryption === 'aes');
  updateClassicEncryptionUI();
  markPreviewStale();
}

function updateClassicEncryptionUI() {
  const isAes = currentClassicEncryption === 'aes';
  const infoText = document.getElementById('classic-encryption-info-text');
  const keyHint = document.getElementById('h-bfpw');
  const tip = document.getElementById('tip-bfpw');
  const stepKey = document.getElementById('te-s2-key');
  const stepDesc = document.getElementById('te-s2-desc');
  const dataLegend = document.getElementById('te-leg-data');
  const plainLabel = document.getElementById('debug-plain-label');
  const dataLabel = document.getElementById('debug-data-label');
  const responseInfo = document.getElementById('resp-info-body');
  if (infoText) infoText.textContent = t(isAes ? 'classic_encryption_info_aes' : 'classic_encryption_info_blowfish');
  if (keyHint) keyHint.textContent = t(isAes ? 'h_bfpw_aes' : 'h_bfpw');
  if (tip) tip.dataset.tip = t(isAes ? 'tip_bfpw_aes' : 'tip_bfpw');
  if (stepKey) stepKey.textContent = t(isAes ? 'te_s2_key_aes' : 'te_s2_key_blowfish');
  if (stepDesc) stepDesc.innerHTML = t(isAes ? 'te_s2_desc_aes' : 'te_s2_desc');
  if (dataLegend) dataLegend.textContent = t(isAes ? 'te_leg_data_aes' : 'te_leg_data');
  if (plainLabel) plainLabel.textContent = t(isAes ? 'debug_plain_label_aes' : 'debug_plain_label');
  if (dataLabel) dataLabel.textContent = t(isAes ? 'debug_data_label_aes' : 'debug_data_label_blowfish');
  if (responseInfo) responseInfo.innerHTML = t(isAes ? 'resp_info_body_aes' : 'resp_info_body');
}

const API_FIELD_PATHS = {
  merchantId: { classic: 'MerchantID', restV1: 'Authorization username', restV2: 'OAuth client_id' },
  blowfishKey: { classic: 'Verschlüsselungsschlüssel (nicht übertragen)', restV1: '—', restV2: '—' },
  hmacKey: { classic: 'MAC-Schlüssel (nicht übertragen)', restV1: '—', restV2: '—' },
  restApiKey: { classic: '—', restV1: 'Authorization password', restV2: 'OAuth client_secret' },
  'rest-version': { classic: '—', restV1: 'Lokale Builder-Einstellung (nicht übertragen)', restV2: 'Lokale Builder-Einstellung (nicht übertragen)' },
  'rest-method': { classic: '—', restV1: 'payment.method', restV2: 'Endpoint · paymentMethods / channel' },
  'rest-environment': { classic: '—', restV1: 'API-Host (nicht im JSON)', restV2: 'API-Host (nicht im JSON)' },
  'rest-auth': { classic: '—', restV1: 'Authorization-Header', restV2: 'Authorization-Header' },
  'rest-tool': { classic: '—', restV1: 'Lokales Ausgabeformat (nicht übertragen)', restV2: 'Lokales Ausgabeformat (nicht übertragen)' },
  'status-lookup': { classic: 'Suchschlüssel-Auswahl (nicht übertragen)', restV1: 'Endpoint-Auswahl (nicht im JSON)', restV2: 'Endpoint-Auswahl (nicht im JSON)' },
  'status-payment-id': { classic: 'PayID', restV1: 'URL-Pfad: paymentId', restV2: 'URL-Pfad: paymentId' },
  'status-transaction-id': { classic: 'TransID', restV1: 'URL-Pfad: transactionId', restV2: 'URL-Pfad: transactionId' },
  amount: { classic: 'Amount', restV1: 'amount.value', restV2: 'amount.value' },
  currency: { classic: 'Currency', restV1: 'amount.currency', restV2: 'amount.currency' },
  language: { classic: 'Language', restV1: 'language', restV2: 'language' },
  transId: { classic: 'TransID', restV1: 'transactionId', restV2: 'transId' },
  refNr: { classic: 'RefNr', restV1: 'referenceNumber · order.id', restV2: 'refNr · order.merchantReference' },
  expirationDate: { classic: 'ExpirationDate', restV1: 'expirationTime', restV2: 'expirationTime' },
  orderDesc: { classic: 'OrderDesc', restV1: 'order.description[]', restV2: 'order.description' },
  'cust-salutation': { classic: 'billToCustomer.consumer.salutation', restV1: 'customerInfo.consumer.salutation', restV2: '—' },
  'cust-first-name': { classic: 'billToCustomer.consumer.firstName', restV1: 'customerInfo.consumer.firstName', restV2: '—' },
  'cust-last-name': { classic: 'billToCustomer.consumer.lastName', restV1: 'customerInfo.consumer.lastName', restV2: '—' },
  'cust-birth-date': { classic: 'billToCustomer.consumer.birthDate', restV1: 'customerInfo.consumer.birthdate', restV2: '—' },
  'cust-number': { classic: 'billToCustomer.customerNumber', restV1: 'customerInfo.customerNumber', restV2: '—' },
  'cust-email': { classic: 'billToCustomer.email', restV1: 'customerInfo.email', restV2: '—' },
  'cust-phone-country': { classic: 'billToCustomer.phone.countryCode', restV1: 'customerInfo.phone.countryCode', restV2: '—' },
  'cust-phone-number': { classic: 'billToCustomer.phone.subscriberNumber', restV1: 'customerInfo.phone.subscriberNumber', restV2: '—' },
  'bill-street': { classic: 'billingAddress.addressLine1.street', restV1: 'billing.addressInfo.addressLine1.street', restV2: '—' },
  'bill-street-number': { classic: 'billingAddress.addressLine1.streetNumber', restV1: 'billing.addressInfo.addressLine1.streetNumber', restV2: '—' },
  'bill-postal-code': { classic: 'billingAddress.postalCode', restV1: 'billing.addressInfo.postalCode', restV2: '—' },
  'bill-city': { classic: 'billingAddress.city', restV1: 'billing.addressInfo.city', restV2: '—' },
  'bill-country': { classic: 'billingAddress.country.countryA3', restV1: 'billing.addressInfo.country.A2/A3', restV2: '—' },
  'ship-street': { classic: 'shippingAddress.addressLine1.street', restV1: 'shipping.addressInfo.addressLine1.street', restV2: '—' },
  'ship-street-number': { classic: 'shippingAddress.addressLine1.streetNumber', restV1: 'shipping.addressInfo.addressLine1.streetNumber', restV2: '—' },
  'ship-postal-code': { classic: 'shippingAddress.postalCode', restV1: 'shipping.addressInfo.postalCode', restV2: '—' },
  'ship-city': { classic: 'shippingAddress.city', restV1: 'shipping.addressInfo.city', restV2: '—' },
  'ship-country': { classic: 'shippingAddress.country.countryA3', restV1: 'shipping.addressInfo.country.A2/A3', restV2: '—' },
  urlSuccess: { classic: 'URLSuccess', restV1: 'urls.success', restV2: 'urls.return' },
  urlFailure: { classic: 'URLFailure', restV1: 'urls.failure', restV2: 'urls.cancel' },
  urlNotify: { classic: 'URLNotify', restV1: 'urls.notify', restV2: 'urls.webhook' },
  urlBack: { classic: 'URLBack', restV1: 'urls.cancel', restV2: 'urls.cancel' },
  payTypes: { classic: 'PayTypes', restV1: 'payment.<method>.payTypes[]', restV2: 'allowedPaymentMethods[] / paymentMethods' },
  template: { classic: 'Template', restV1: 'payment.<method>.template', restV2: 'template.name / paymentMethods.card.template' }
};

const ARTICLE_API_PATHS = {
  itemReference: 'ArticleList.order_lines[].reference', id: 'ArticleList.order_lines[].product_identifiers.global_trade_item_number',
  description: 'ArticleList.order_lines[].name', quantity: 'ArticleList.order_lines[].quantity',
  amount: 'ArticleList.order_lines[].unit_price', vatAmount: 'ArticleList.order_lines[].total_tax_amount',
  vatPercent: 'ArticleList.order_lines[].tax_rate (Prozent × 100)', totalAmount: 'ArticleList.order_lines[].total_amount',
  positionType: 'ArticleList.order_lines[].type'
};

function _setApiFieldName(label, scope, path) {
  if (!label) return;
  label.parentElement?.querySelector(':scope > .api-field-name')?.remove();
  const hint = document.createElement('span');
  hint.className = 'api-field-name';
  const content = appendTextElement(hint, 'span', 'api-field-name-content', '');
  appendTextElement(content, 'strong', '', `${scope}: `);
  content.appendChild(document.createTextNode(path));
  label.insertAdjacentElement('afterend', hint);
}

function renderApiFieldNames() {
  const restVersion = document.getElementById('rest-version')?.value === 'v2' ? 'restV2' : 'restV1';
  const key = currentIntegration === 'rest' ? restVersion : 'classic';
  const scope = currentIntegration === 'rest' ? `REST ${restVersion === 'restV2' ? 'V2' : 'V1'}` : 'Classic';
  Object.entries(API_FIELD_PATHS).forEach(([id, paths]) => {
    const field = document.getElementById(id);
    const label = field?.closest('.field')?.querySelector('label');
    if (label) _setApiFieldName(label, scope, paths[key] || '—');
  });
  const customerGroupHint = document.getElementById('customer-master-api-name');
  if (customerGroupHint) {
    clearElement(customerGroupHint);
    appendTextElement(customerGroupHint, 'strong', '', `${scope}: `);
    customerGroupHint.appendChild(document.createTextNode(key === 'classic'
      ? 'billToCustomer · billingAddress · shipToCustomer · shippingAddress'
      : (key === 'restV1' ? 'customerInfo · billing · shipping' : '—')));
  }
  document.querySelectorAll('#article-list-items [data-field]').forEach(field => {
    const label = field.closest('.field')?.querySelector('label');
    if (label) _setApiFieldName(label, 'Classic', ARTICLE_API_PATHS[field.dataset.field] || 'ArticleList');
  });
  document.querySelectorAll('.api-field-name').forEach(hint => {
    if (!hint.querySelector('.api-field-name-content')) {
      const content = document.createElement('span');
      content.className = 'api-field-name-content';
      while (hint.firstChild) content.appendChild(hint.firstChild);
      hint.appendChild(content);
    }
    hint.title = hint.textContent.trim();
  });
  document.querySelectorAll('.customer-master-body .field > label, .article-item-card .field > label').forEach(label => {
    label.title = label.textContent.trim();
  });
}

function _flattenDerivedValue(value, prefix = '', rows = []) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => _flattenDerivedValue(item, `${prefix}[${index}]`, rows));
  } else if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, nested]) => _flattenDerivedValue(nested, prefix ? `${prefix}.${key}` : key, rows));
  } else {
    rows.push([prefix, String(value ?? '')]);
  }
  return rows;
}

function _decodeBase64Json(value) {
  try {
    const binary = atob(value);
    const bytes = Uint8Array.from(binary, character => character.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch (_) { return null; }
}

function _renderDerivedParameterItems(sectionId, listId, items) {
  const section = document.getElementById(sectionId);
  const list = document.getElementById(listId);
  if (!section || !list) return;
  clearElement(list);
  section.style.display = '';
  if (!items.length) {
    appendTextElement(list, 'div', 'derived-parameter-empty', currentLang === 'en'
      ? 'No composed parameters were generated. Enable customer data or article data and generate the preview again.'
      : 'Es wurden keine zusammengesetzten Parameter erzeugt. Aktiviere Kunden- oder Artikeldaten und generiere die Vorschau erneut.');
    return;
  }
  items.forEach(item => {
    const details = document.createElement('details');
    details.className = 'derived-parameter-item';
    appendTextElement(details, 'summary', '', item.name);
    const body = appendTextElement(details, 'div', 'derived-parameter-body', '');
    const rules = appendTextElement(body, 'div', 'derived-parameter-rules', '');
    appendTextElement(rules, 'div', '', item.note);
    _flattenDerivedValue(item.decoded).forEach(([path, value]) => {
      const row = appendTextElement(rules, 'div', '', '');
      appendTextElement(row, 'code', '', path);
      row.appendChild(document.createTextNode(` = ${value}`));
    });
    if (item.calculations?.length) item.calculations.forEach(calculation => appendTextElement(rules, 'div', '', calculation));
    appendTextElement(body, 'span', 'derived-parameter-caption', currentLang === 'en' ? 'Decoded JSON' : 'Dekodiertes JSON');
    const json = appendTextElement(body, 'pre', '', JSON.stringify(item.decoded, null, 2));
    json.dataset.raw = JSON.stringify(item.decoded, null, 2);
    if (item.encoded) {
      appendTextElement(body, 'span', 'derived-parameter-caption', currentLang === 'en' ? 'Transmitted Base64 value' : 'Übertragener Base64-Wert');
      const encoded = appendTextElement(body, 'pre', '', item.encoded);
      encoded.dataset.raw = item.encoded;
    }
    list.appendChild(details);
  });
}

function renderClassicDerivedParameterPreview(params) {
  const names = ['billToCustomer', 'billingAddress', 'shipToCustomer', 'shippingAddress', 'ArticleList'];
  const items = names.filter(name => params[name]).map(name => {
    const decodedValue = _decodeBase64Json(params[name]);
    const decoded = decodedValue || { error: currentLang === 'en' ? 'Base64 value could not be decoded as JSON.' : 'Der Base64-Wert konnte nicht als JSON dekodiert werden.' };
    const isArticle = name === 'ArticleList';
    const calculations = isArticle && decoded?.order_lines ? decoded.order_lines.map((line, index) =>
      `${currentLang === 'en' ? 'Line' : 'Position'} ${index + 1}: ${line.quantity} × ${line.unit_price} = ${line.total_amount}; tax_rate ${line.tax_rate ?? 0} = ${(line.tax_rate ?? 0) / 100}%`
    ) : [];
    return {
      name,
      decoded,
      encoded: params[name],
      calculations,
      note: isArticle
        ? (currentLang === 'en' ? 'Built from the article fields; line totals must equal Amount.' : 'Aus den Artikelfeldern aufgebaut; die Positionssummen müssen Amount entsprechen.')
        : (currentLang === 'en' ? 'Built from the enabled customer and address fields; empty values are removed.' : 'Aus den aktivierten Kunden- und Adressfeldern aufgebaut; leere Werte werden entfernt.')
    };
  });
  _renderDerivedParameterItems('derived-parameters-section', 'derived-parameters-list', items);
}

function renderRestDerivedParameterPreview(payload) {
  const items = ['customerInfo', 'billing', 'shipping'].filter(name => payload?.[name]).map(name => ({
    name,
    decoded: payload[name],
    encoded: '',
    note: currentLang === 'en' ? 'Built directly as a JSON object; empty values are removed.' : 'Direkt als JSON-Objekt aufgebaut; leere Werte werden entfernt.'
  }));
  _renderDerivedParameterItems('rest-derived-parameters-section', 'rest-derived-parameters-list', items);
}

function setUseCase(useCase) {
  if (!['create-payment', 'payment-status'].includes(useCase)) return;
  currentUseCase = useCase;
  document.getElementById('use-case-create')?.classList.toggle('method-active', useCase === 'create-payment');
  document.getElementById('use-case-status')?.classList.toggle('method-active', useCase === 'payment-status');
  updateCredentialModeUI();
  showPreviewEmptyState();
  updateUseCaseUI();
}

function updateUseCaseUI() {
  const isRest = currentIntegration === 'rest';
  const isPayment = currentUseCase === 'create-payment';
  const lookup = document.getElementById('status-lookup')?.value || 'paymentId';
  const classicControls = document.getElementById('classic-method-controls');
  const classicEncryptionSection = document.getElementById('workflow-encryption');
  const createFields = document.getElementById('create-payment-fields');
  const statusControls = document.getElementById('status-controls');
  const callbackRow = document.getElementById('cb-receiver-row');
  const restMethodField = document.getElementById('rest-method-field');
  const restPrimaryGrid = document.querySelector('#rest-controls .field-grid.three');
  const restVersion = document.getElementById('rest-version');
  const submitButton = document.getElementById('btn-submit');
  const newTidButton = document.getElementById('btn-newtid');

  if (classicControls) classicControls.style.display = !isRest && isPayment ? 'flex' : 'none';
  if (classicEncryptionSection) classicEncryptionSection.style.display = !isRest ? '' : 'none';
  if (createFields) createFields.style.display = isPayment ? '' : 'none';
  if (statusControls) statusControls.style.display = isPayment ? 'none' : 'block';
  if (callbackRow) callbackRow.style.display = isPayment ? '' : 'none';
  if (restMethodField) restMethodField.style.display = isPayment ? '' : 'none';
  if (restPrimaryGrid) restPrimaryGrid.style.gridTemplateColumns = isPayment ? '' : '1fr 1fr';
  if (restVersion) {
    if (!isPayment) restVersion.value = 'v1';
    restVersion.disabled = !isPayment;
  }
  if (submitButton?.parentElement) submitButton.parentElement.style.display = !isRest && isPayment ? 'flex' : 'none';
  if (newTidButton) newTidButton.style.display = isPayment ? 'inline-flex' : 'none';
  const urlNotifyRequired = document.getElementById('urlnotify-required');
  if (urlNotifyRequired) urlNotifyRequired.style.display = !isRest && isPayment ? '' : 'none';

  const paymentIdField = document.getElementById('status-payment-id-field');
  const transactionIdField = document.getElementById('status-transaction-id-field');
  if (paymentIdField) paymentIdField.style.display = lookup === 'paymentId' ? '' : 'none';
  if (transactionIdField) transactionIdField.style.display = lookup === 'transactionId' || (!isRest && lookup === 'paymentId') ? '' : 'none';

  const infoEl = document.getElementById('method-info-text');
  const statusInfo = document.getElementById('status-use-case-info');
  if (!isPayment) {
    const key = isRest
      ? (lookup === 'paymentId' ? 'status_info_rest_payment' : 'status_info_rest_transaction')
      : (lookup === 'paymentId' ? 'status_info_classic_payment' : 'status_info_classic_transaction');
    if (infoEl) infoEl.innerHTML = t('method_info_status');
    if (statusInfo) statusInfo.innerHTML = `${t(key)}<br><br>${t('status_result_guidance')}`;
    populateStatusTransactionOptions();
  }

  if (isRest) updateRestControls(); else if (isPayment) setMethod(currentMethod);
  updateArticleListVisibility();
  updateCustomFieldsVisibility();
  renderApiFieldNames();
}

function _statusCandidateKey(candidate) {
  return `${candidate.merchantId || ''}\u001f${candidate.paymentId || ''}\u001f${candidate.transId || ''}`;
}

function _statusIdentifier(value, maxLength = 26) {
  const text = String(value || '');
  if (text.length <= maxLength) return text;
  return `${text.slice(0, 14)}…${text.slice(-7)}`;
}

function _plainParamIgnoreCase(plain, names) {
  const source = String(plain || '').trim();
  if (source.startsWith('{') || source.startsWith('[')) {
    try {
      return _restScalar(_findRestResponseValue(JSON.parse(source), names));
    } catch (_) {}
  }
  const params = _parsePlainParams(String(plain || ''));
  const normalised = Object.fromEntries(Object.entries(params).map(([key, value]) => [key.toLowerCase(), value]));
  for (const name of names) {
    const value = normalised[name.toLowerCase()];
    if (value) return String(value).trim();
  }
  return '';
}

function _mergeStatusCandidate(candidates, incoming) {
  if (!incoming.paymentId && !incoming.transId) return;
  const matches = candidates.filter(candidate => {
    const samePayment = incoming.paymentId && candidate.paymentId === incoming.paymentId;
    const merchantCompatible = !incoming.merchantId || !candidate.merchantId || incoming.merchantId === candidate.merchantId;
    const sameTransaction = incoming.transId && candidate.transId === incoming.transId && merchantCompatible;
    return samePayment || sameTransaction;
  });
  if (!matches.length) {
    candidates.push(incoming);
    return;
  }

  const merged = matches.reduce((result, candidate) => ({
    paymentId: result.paymentId || candidate.paymentId,
    transId: result.transId || candidate.transId,
    merchantId: result.merchantId || candidate.merchantId,
    integration: result.integration || candidate.integration,
    timestamp: String(result.timestamp || '') > String(candidate.timestamp || '') ? result.timestamp : candidate.timestamp,
  }), incoming);
  matches.forEach(candidate => candidates.splice(candidates.indexOf(candidate), 1));
  candidates.push(merged);
}

async function collectStatusTransactionCandidates() {
  const [requests, responses] = await Promise.all([
    _getLogEntries(LOG_REQUEST_STORE, LOG_LS_KEY),
    _getLogEntries(LOG_RESPONSE_STORE, RESP_LOG_LS_KEY),
  ]);
  const candidates = [];
  requests.forEach(entry => _mergeStatusCandidate(candidates, {
    paymentId: String(entry.paymentId || '').trim(),
    transId: String(entry.transId || '').trim(),
    merchantId: String(entry.merchantId || '').trim(),
    integration: String(entry.integration || '').trim(),
    timestamp: entry.timestamp || '',
  }));
  responses.forEach(entry => _mergeStatusCandidate(candidates, {
    paymentId: String(entry.paymentId || '').trim() || _plainParamIgnoreCase(entry.plain, ['PayID', 'PaymentID', 'paymentId']),
    transId: String(entry.transId || '').trim() || _plainParamIgnoreCase(entry.plain, ['TransID', 'TransactionID']),
    merchantId: String(entry.merchantId || '').trim() || _plainParamIgnoreCase(entry.plain, ['MerchantID', 'mid']),
    integration: entry.integration === 'rest' ? 'rest' : 'classic',
    timestamp: entry.timestamp || '',
  }));
  return candidates
    .sort((a, b) => String(b.timestamp || '').localeCompare(String(a.timestamp || '')))
    .slice(0, 100);
}

function _formatStatusTransactionOption(candidate) {
  const date = candidate.timestamp
    ? new Date(candidate.timestamp).toLocaleString(currentLang === 'en' ? 'en-US' : 'de-DE', { dateStyle: 'short', timeStyle: 'short' })
    : '';
  const identifiers = [];
  if (candidate.paymentId) identifiers.push(`PayID ${_statusIdentifier(candidate.paymentId)}`);
  if (candidate.transId) identifiers.push(`TransID ${_statusIdentifier(candidate.transId)}`);
  if (candidate.merchantId) identifiers.push(`MID ${_statusIdentifier(candidate.merchantId, 18)}`);
  return [date, ...identifiers].filter(Boolean).join(' · ');
}

async function populateStatusTransactionOptions() {
  const select = document.getElementById('status-saved-transaction');
  if (!select || currentUseCase !== 'payment-status') return;
  const refreshToken = ++statusTransactionRefreshToken;
  const selectedKey = select.dataset.selectedKey || '';
  const candidates = await collectStatusTransactionCandidates();
  if (refreshToken !== statusTransactionRefreshToken) return;

  statusTransactionCandidates = candidates;
  clearElement(select);
  const manual = document.createElement('option');
  manual.value = '';
  manual.textContent = t('status_saved_manual');
  select.appendChild(manual);
  candidates.forEach((candidate, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = _formatStatusTransactionOption(candidate);
    option.title = [candidate.paymentId && `PayID: ${candidate.paymentId}`, candidate.transId && `TransID: ${candidate.transId}`].filter(Boolean).join(' · ');
    select.appendChild(option);
  });

  const selectedIndex = candidates.findIndex(candidate => _statusCandidateKey(candidate) === selectedKey);
  select.value = selectedIndex >= 0 ? String(selectedIndex) : '';
  if (selectedIndex < 0) delete select.dataset.selectedKey;
  const summary = document.getElementById('status-saved-transaction-summary');
  if (summary) {
    summary.textContent = candidates.length
      ? t('status_saved_summary').replace('{count}', String(candidates.length))
      : t('status_saved_empty');
  }
}

function applySavedStatusTransaction() {
  const select = document.getElementById('status-saved-transaction');
  if (!select || select.value === '') {
    if (select) delete select.dataset.selectedKey;
    return;
  }
  const candidate = statusTransactionCandidates[Number(select.value)];
  if (!candidate) return;
  select.dataset.selectedKey = _statusCandidateKey(candidate);
  const paymentInput = document.getElementById('status-payment-id');
  const transactionInput = document.getElementById('status-transaction-id');
  if (paymentInput) paymentInput.value = candidate.paymentId || '';
  if (transactionInput) transactionInput.value = candidate.transId || '';

  const lookup = document.getElementById('status-lookup');
  if (lookup) {
    const currentValueAvailable = lookup.value === 'paymentId' ? candidate.paymentId : candidate.transId;
    if (!currentValueAvailable) lookup.value = candidate.paymentId ? 'paymentId' : 'transactionId';
  }
  updateUseCaseUI();
}

function markStatusTransactionManual() {
  const select = document.getElementById('status-saved-transaction');
  if (!select) return;
  select.value = '';
  delete select.dataset.selectedKey;
}

function scheduleStatusTransactionRefresh() {
  if (currentUseCase !== 'payment-status') return;
  clearTimeout(statusTransactionRefreshTimer);
  statusTransactionRefreshTimer = setTimeout(populateStatusTransactionOptions, 0);
}

function updateCredentialModeUI() {
  const isRest = currentIntegration === 'rest';
  const navCredentials = document.getElementById('nav-creds');
  if (navCredentials) navCredentials.dataset.navGroup = isRest ? 'optional' : 'workflow';
  const notice = document.getElementById('credential-mode-notice');
  notice?.classList.toggle('rest-mode', isRest);
  const title = document.getElementById('credential-mode-title');
  const text = document.getElementById('credential-mode-text');
  const classicStatus = !isRest && currentUseCase === 'payment-status';
  if (title) title.textContent = t(isRest ? 'cred_mode_rest_title' : (classicStatus ? 'cred_mode_classic_status_title' : 'cred_mode_classic_title'));
  if (text) text.textContent = t(isRest ? 'cred_mode_rest_text' : (classicStatus ? 'cred_mode_classic_status_text' : 'cred_mode_classic_text'));
  const required = document.getElementById('merchant-required');
  if (required) required.style.display = isRest ? 'none' : '';
  const hmacRequired = document.getElementById('hmac-required');
  if (hmacRequired) hmacRequired.style.display = classicStatus ? 'none' : '';
  const hmacHint = document.getElementById('h-hmacpw');
  if (hmacHint) hmacHint.textContent = t(classicStatus ? 'h_hmacpw_status' : 'h_hmacpw');
  const merchantHint = document.getElementById('merchant-credential-hint');
  if (merchantHint) merchantHint.textContent = t(isRest ? 'cred_mid_rest_hint' : 'cred_mid_classic_hint');
  const classicGroup = document.getElementById('classic-credential-group');
  const restGroup = document.getElementById('rest-credential-group');
  if (classicGroup) classicGroup.style.display = isRest ? 'none' : '';
  if (restGroup) restGroup.style.display = isRest ? '' : 'none';
  classicGroup?.classList.toggle('is-muted', isRest);
  restGroup?.classList.toggle('is-muted', !isRest);
  restGroup?.classList.toggle('is-emphasized', isRest);
}

function validateRestCredentialOptIn(checkbox) {
  if (!checkbox.checked) return;
  const merchantId = document.getElementById('merchantId');
  const apiKey = document.getElementById('restApiKey');
  const missingField = !merchantId?.value.trim() ? merchantId : (!apiKey?.value ? apiKey : null);
  if (!missingField) return;

  checkbox.checked = false;
  const credentialsCard = document.getElementById('card-creds');
  credentialsCard?.classList.remove('collapsed');
  document.getElementById('rest-credential-group')?.classList.add('is-emphasized');
  showToast(t('rest_credentials_opt_in_missing'), 'error');
  requestAnimationFrame(() => {
    credentialsCard?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => missingField.focus({ preventScroll: true }), 450);
  });
}

function showPreviewEmptyState() {
  const emptyHint = document.getElementById('preview-empty-hint');
  const classicOutput = document.getElementById('debug-section');
  const restOutput = document.getElementById('rest-debug-section');
  const statusSubmitRow = document.getElementById('classic-status-submit-row');
  const statusSubmitButton = document.getElementById('btn-status-submit');
  const submitButton = document.getElementById('btn-submit');
  clearPreviewFreshness();
  if (emptyHint) emptyHint.style.display = 'block';
  if (classicOutput) classicOutput.style.display = 'none';
  if (restOutput) restOutput.style.display = 'none';
  if (statusSubmitRow) statusSubmitRow.style.display = 'none';
  if (statusSubmitButton) {
    delete statusSubmitButton.dataset.url;
    delete statusSubmitButton.dataset.demo;
  }
  if (submitButton) {
    delete submitButton.dataset.url;
    delete submitButton.dataset.demo;
  }
  const demoNotice = document.getElementById('classic-demo-preview-notice');
  if (demoNotice) demoNotice.style.display = 'none';
}

function resetControlsToDefaults(container) {
  if (!container) return;
  container.querySelectorAll('input, select, textarea').forEach(field => {
    if (field.type === 'checkbox' || field.type === 'radio') {
      field.checked = field.defaultChecked;
    } else if (field.tagName === 'SELECT') {
      const defaultOption = Array.from(field.options).findIndex(option => option.defaultSelected);
      field.selectedIndex = defaultOption >= 0 ? defaultOption : 0;
    } else {
      field.value = field.defaultValue || '';
    }
  });
}

function startNewPaymentFlow() {
  openNewFlowModal();
}

function performNewPaymentFlowReset() {
  previewState.isResetting = true;
  try {
    resetControlsToDefaults(document.getElementById('card-payment'));
    resetControlsToDefaults(document.getElementById('status-controls'));
    setUseCase('create-payment');
    setIntegration('classic');
    setMethod('hpp');
    generateTransId();
    initPayByLinkDefaults();
    onOrderDescChange(document.getElementById('orderDesc'));
    onTemplateChange();
    updateArticleListVisibility();
    updateCustomFieldsVisibility();
    updateRestControls();
    showPreviewEmptyState();
    document.getElementById('card-creds')?.classList.remove('collapsed');
    document.getElementById('card-payment')?.classList.remove('collapsed');
    document.getElementById('card-preview')?.classList.add('collapsed');
    document.getElementById('card-creds')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast(t('toast_new_flow_started'), 'success');
  } finally {
    previewState.isResetting = false;
    clearPreviewFreshness();
  }
}

function openNewFlowModal() {
  const modal = document.getElementById('new-flow-modal');
  const confirmButton = document.getElementById('new-flow-confirm');
  if (!modal || !confirmButton) return;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  confirmButton.focus();
}

function closeNewFlowModal() {
  const modal = document.getElementById('new-flow-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function confirmNewPaymentFlow() {
  closeNewFlowModal();
  performNewPaymentFlowReset();
}

function updateRestControls() {
  const isPayment = currentUseCase === 'create-payment';
  const version = document.getElementById('rest-version')?.value || 'v1';
  const method = document.getElementById('rest-method')?.value || 'hostedPaymentPage';
  const methodSelect = document.getElementById('rest-method');
  if (methodSelect && version === 'v2') {
    methodSelect.options[0].textContent = 'Hosted Payment Page (Checkout Session)';
    methodSelect.options[1].textContent = 'Hosted Card Form';
    methodSelect.options[2].textContent = 'Payment Link';
  } else if (methodSelect) {
    methodSelect.options[0].textContent = 'Hosted Payment Page';
    methodSelect.options[1].textContent = 'Card Form';
    methodSelect.options[2].textContent = 'Pay By Link';
  }
  const warning = document.getElementById('rest-v2-warning');
  if (warning) warning.style.display = isPayment && version === 'v2' ? 'block' : 'none';
  updateCustomerCompatibilityUI();
  const pblFields = document.getElementById('pbl-fields');
  if (pblFields) pblFields.classList.toggle('hidden', method !== 'payByLink');
  const paytypesRow = document.getElementById('paytypes-row');
  if (paytypesRow) paytypesRow.classList.toggle('hidden', method === 'cardForm');
  const infoEl = document.getElementById('method-info-text');
  if (infoEl && isPayment) infoEl.innerHTML = currentLang === 'en'
    ? (version === 'v1'
      ? '<strong>REST API V1</strong> — Swagger-based JSON request builder. Requests are generated locally and never sent.'
      : '<strong>REST API V2</strong> — Uses the official V2 endpoints and schemas for checkout sessions, hosted card forms and payment links.')
    : (version === 'v1'
      ? '<strong>REST API V1</strong> — Swagger-basierter JSON-Request-Builder. Der Request wird ausschließlich lokal erzeugt und nicht versendet.'
      : '<strong>REST API V2</strong> — Verwendet die offiziellen V2-Endpunkte und Schemas für Checkout Session, Hosted Card Form und Payment Link.');
  renderApiFieldNames();
}

function isStandaloneApp() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS.de)[key] || key;
}

function renderChangelog() {
  const container = document.getElementById('changelog-content');
  if (!container || typeof CHANGELOG === 'undefined') return;
  clearElement(container);

  CHANGELOG.forEach(entry => {
    const content = entry[currentLang] || entry.de;
    const section = appendTextElement(container, 'section', 'cl-entry', '');
    const header = appendTextElement(section, 'div', 'cl-header', '');
    appendTextElement(header, 'span', 'cl-version', entry.v);
    appendTextElement(header, 'span', 'cl-title', content.title);
    const list = appendTextElement(section, 'ul', 'cl-list', '');
    content.items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = item;
      list.appendChild(listItem);
    });
  });
}

function bindSectionJumpLinks(container) {
  if (!container) return;
  container.querySelectorAll('.help-jump a[href^="#"]').forEach(link => {
    if (link.dataset.jumpBound === '1') return;
    link.dataset.jumpBound = '1';
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = container.querySelector(link.getAttribute('href'));
      if (!target) return;
      const navBottom = document.querySelector('.glass-nav')?.getBoundingClientRect().bottom || 90;
      const offset = Math.ceil(navBottom + 14);
      const targetTop = window.scrollY + target.getBoundingClientRect().top;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const desiredTop = targetTop - offset;
      if (desiredTop > maxScroll) {
        const currentPadding = parseFloat(getComputedStyle(container).paddingBottom) || 0;
        container.style.paddingBottom = `${Math.ceil(currentPadding + desiredTop - maxScroll)}px`;
      }
      const top = window.scrollY + target.getBoundingClientRect().top - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
  });
}

function renderHelp() {
  const container = document.getElementById('help-content');
  if (!container || typeof HELP_CONTENT === 'undefined') return;
  container.innerHTML = HELP_CONTENT[currentLang] || HELP_CONTENT.de;
  bindSectionJumpLinks(container);
}

// ══════════════════════════════════════════════════════════════
let refreshWorkflowNavigation = () => {};

function applyLang() {
  document.title = t('page_title');
  const setText  = (id, key) => { const el = document.getElementById(id); if (el) el.textContent = t(key); };
  const setHtml  = (id, key) => { const el = document.getElementById(id); if (el) el.innerHTML = t(key); };
  const setTip   = (id, key) => { const el = document.getElementById(id); if (el) el.dataset.tip = t(key); };
  const setAttr  = (id, attr, key) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, t(key)); };

  setText('header-feature-hpp', 'header_feature_hpp');
  setText('header-feature-ccf', 'header_feature_ccf');
  setText('header-feature-pbl', 'header_feature_pbl');
  setText('header-feature-blowfish', 'header_feature_blowfish');
  setText('header-feature-hmac', 'header_feature_hmac');
  setText('header-feature-rest-versions', 'header_feature_rest_versions');
  setText('header-feature-rest-json', 'header_feature_rest_json');
  setText('header-feature-rest-tools', 'header_feature_rest_tools');
  setText('app-intro-title', 'app_intro_title');
  setText('app-intro-text', 'app_intro_text');
  setText('app-intro-create-title', 'app_intro_create_title');
  setText('app-intro-create-text', 'app_intro_create_text');
  setText('app-intro-inspect-title', 'app_intro_inspect_title');
  setText('app-intro-inspect-text', 'app_intro_inspect_text');
  setText('app-intro-response-title', 'app_intro_response_title');
  setText('app-intro-response-text', 'app_intro_response_text');
  setHtml('app-intro-local', 'app_intro_local');
  setText('nav-creds', 'nav_creds');
  setText('nav-payment', 'nav_payment');
  setText('nav-preview', 'nav_preview');
  setText('nav-log', 'nav_log');
  setText('nav-response-text', 'nav_response');
  setText('nav-resp-log-text', 'nav_resp_log');
  setText('nav-tools', 'nav_tools');
  setText('nav-help', 'nav_help');
  setText('nav-changelog', 'nav_changelog');
  setText('payment-workflow-title', 'payment_workflow_title');
  setText('payment-workflow-subtitle', 'payment_workflow_subtitle');
  setText('settings-menu-title', 'settings_title');
  setText('settings-theme-text', 'settings_theme');
  setText('settings-language-text', 'settings_language');
  setText('settings-site-credit', 'settings_site_credit');
  setText('classic-demo-title', 'classic_demo_title');
  setText('classic-demo-description', 'classic_demo_description');
  setText('classic-demo-preview-title', 'classic_demo_preview_title');
  setText('classic-demo-preview-text', 'classic_demo_preview_text');
  setAttr('settings-toggle-btn', 'title', 'settings_title');
  setAttr('settings-toggle-btn', 'aria-label', 'settings_title');
  setText('tools-view-title', 'tools_view_title');
  setText('tools-view-subtitle', 'tools_view_subtitle');
  setText('ct-mac-validator', 'ct_mac_validator');
  setHtml('mac-validator-intro', 'mac_validator_intro');
  setText('l-mac-payid', 'l_mac_payid');
  setText('h-mac-payid', 'h_mac_payid');
  setText('l-mac-transid', 'l_mac_transid');
  setText('l-mac-merchantid', 'l_mac_merchantid');
  setText('l-mac-amount', 'l_mac_amount');
  setText('h-mac-amount', 'h_mac_amount');
  setText('l-mac-currency', 'l_mac_currency');
  setText('l-mac-hmac-key', 'l_mac_hmac_key');
  setText('l-mac-expected', 'l_mac_expected');
  setText('h-mac-expected', 'h_mac_expected');
  setText('btn-mac-validate', 'btn_mac_validate');
  setText('btn-mac-fill', 'btn_mac_fill');
  setText('ct-base64-tool', 'ct_base64_tool');
  setHtml('base64-tool-intro', 'base64_tool_intro');
  setText('tools-jump-mac', 'tools_jump_mac');
  setText('tools-jump-b64', 'tools_jump_b64');
  setText('tools-jump-links', 'tools_jump_links');
  setText('tools-links-title', 'tools_links_title');
  setText('tools-links-intro', 'tools_links_intro');
  setText('tools-resource-tool-desc', 'tools_resource_tool_desc');
  setText('tools-resource-doc-desc', 'tools_resource_doc_desc');
  setText('l-b64-sample', 'l_b64_sample');
  setText('opt-b64-custom', 'opt_b64_custom');
  setText('opt-b64-cof-cit', 'opt_b64_cof_cit');
  setText('opt-b64-cof-mit', 'opt_b64_cof_mit');
  setText('opt-b64-browser-info', 'opt_b64_browser_info');
  setText('l-b64-plain', 'l_b64_plain');
  setText('l-b64-encoded', 'l_b64_encoded');
  setText('l-b64-param', 'l_b64_param');
  setText('h-b64-param', 'h_b64_param');
  setText('btn-b64-encode', 'btn_b64_encode');
  setText('btn-b64-decode', 'btn_b64_decode');
  setText('btn-b64-copy', 'btn_b64_copy');
  setText('btn-b64-copy-param', 'btn_b64_copy_param');
  setText('btn-submit-embed-text', 'btn_submit_embed');
  setText('ct-embedded-form', 'ct_embedded_form');
  setText('btn-embed-close-text', 'btn_embed_close');
  setHtml('embedded-form-hint', 'embedded_form_hint');
  setText('btn-show-qr-text', 'btn_show_qr');
  setText('qr-modal-title', 'qr_modal_title');
  setText('qr-modal-text', 'qr_modal_text');
  setText('qr-modal-fallback-text', 'qr_modal_fallback_text');
  setText('qr-modal-dense-hint', 'qr_modal_dense_hint');
  setText('qr-modal-close', 'btn_embed_close');
  setText('btn-master-pw-text', 'btn_master_pw');
  setText('master-pw-title', 'master_pw_title');
  setText('master-pw-text', 'master_pw_text');
  setText('l-master-pw-current', 'l_master_pw_current');
  setText('l-master-pw-new', 'l_master_pw_new');
  setText('l-master-pw-repeat', 'l_master_pw_repeat');
  setText('master-pw-cancel', 'btn_master_cancel');
  setText('master-pw-disable', 'btn_master_disable');
  setText('master-unlock-title', 'master_unlock_title');
  setText('master-unlock-text', 'master_unlock_text');
  setText('l-master-unlock', 'l_master_unlock');
  setText('master-unlock-cancel', 'btn_master_cancel');
  setText('master-unlock-confirm', 'btn_master_unlock');
  setText('credential-lock-title', 'credential_lock_title');
  setText('credential-lock-text', 'credential_lock_text');
  setAttr('credential-lock-input', 'placeholder', 'l_master_unlock');
  setText('credential-lock-submit-text', 'btn_master_unlock');
  setText('credential-lock-settings-text', 'credential_lock_settings');
  setText('credential-lock-note', 'credential_lock_note');
  setText('nav-overview-text', 'nav_overview');
  setText('nav-overview-badge', 'nav_overview_badge');
  setText('workflow-nav-title', 'workflow_nav_title');
  setText('workflow-nav-step-credentials', 'workflow_nav_step_credentials');
  setText('workflow-nav-credentials', 'workflow_nav_credentials');
  setText('workflow-nav-profiles', 'workflow_nav_profiles');
  setText('workflow-nav-step-request', 'workflow_nav_step_request');
  setText('workflow-nav-interface', 'workflow_nav_interface');
  setText('workflow-nav-use-case', 'workflow_nav_use_case');
  setText('workflow-nav-integration', 'workflow_nav_integration');
  setText('workflow-integration-options', 'workflow_nav_integration');
  setText('workflow-nav-encryption', 'workflow_nav_encryption');
  setText('workflow-nav-status', 'workflow_nav_status');
  setText('workflow-nav-payment-data', 'workflow_nav_payment_data');
  setText('workflow-nav-customer', 'workflow_nav_customer');
  setText('workflow-nav-articles', 'workflow_nav_articles');
  setText('workflow-nav-custom-fields', 'workflow_nav_custom_fields');
  setText('workflow-nav-callbacks', 'workflow_nav_callbacks');
  setText('workflow-nav-step-preview', 'workflow_nav_step_preview');
  setText('workflow-nav-url-explainer', 'workflow_nav_url_explainer');
  setText('workflow-nav-preview-data', 'workflow_nav_preview_data');
  setText('workflow-nav-test-cards', 'workflow_nav_test_cards');
  setText('workflow-nav-execution', 'workflow_nav_execution');
  setText('help-title', 'help_title');
  setText('help-subtitle', 'help_subtitle');
  setText('changelog-title', 'changelog_title');
  setText('changelog-subtitle', 'changelog_subtitle');
  setText('request-log-view-title', 'request_log_view_title');
  setText('request-log-view-subtitle', 'request_log_view_subtitle');
  setText('response-view-title', 'response_view_title');
  setText('response-view-subtitle', 'response_view_subtitle');
  setText('response-log-view-title', 'response_log_view_title');
  setText('response-log-view-subtitle', 'response_log_view_subtitle');
  setText('info-title', 'info_title');
  setHtml('info-body', 'info_body');
  setText('sec-title', 'sec_title');
  setHtml('sec-p1', 'sec_p1');
  setHtml('sec-p2', 'sec_p2');
  setText('sec-download', 'sec_download');
  setText('sec-hint', 'sec_hint');
  setText('sec-releases', 'sec_releases');
  setText('sec-releases-hint', 'sec_releases_hint');
  setText('overview-map-kicker', 'overview_map_kicker');
  setText('overview-map-title', 'overview_map_title');
  setText('overview-map-subtitle', 'overview_map_subtitle');
  setText('overview-map-workflow-badge', 'overview_map_workflow_badge');
  setText('overview-map-workflow-title', 'overview_map_workflow_title');
  setText('overview-map-workflow-desc', 'overview_map_workflow_desc');
  setText('overview-map-request-badge', 'overview_map_request_badge');
  setText('overview-map-request-title', 'overview_map_request_title');
  setText('overview-map-request-desc', 'overview_map_request_desc');
  setText('overview-map-preview-badge', 'overview_map_preview_badge');
  setText('overview-map-preview-title', 'overview_map_preview_title');
  setText('overview-map-preview-desc', 'overview_map_preview_desc');
  setText('overview-map-request-log-badge', 'overview_map_request_log_badge');
  setText('overview-map-request-log-title', 'overview_map_request_log_title');
  setText('overview-map-request-log-desc', 'overview_map_request_log_desc');
  setText('overview-map-response-badge', 'overview_map_response_badge');
  setText('overview-map-response-title', 'overview_map_response_title');
  setText('overview-map-response-desc', 'overview_map_response_desc');
  setText('overview-map-response-log-badge', 'overview_map_response_log_badge');
  setText('overview-map-response-log-title', 'overview_map_response_log_title');
  setText('overview-map-response-log-desc', 'overview_map_response_log_desc');
  setText('overview-map-tools-badge', 'overview_map_tools_badge');
  setText('overview-map-tools-title', 'overview_map_tools_title');
  setText('overview-map-tools-desc', 'overview_map_tools_desc');
  setText('overview-map-help-badge', 'overview_map_help_badge');
  setText('overview-map-help-title', 'overview_map_help_title');
  setText('overview-map-help-desc', 'overview_map_help_desc');
  setText('overview-map-changelog-badge', 'overview_map_changelog_badge');
  setText('overview-map-changelog-title', 'overview_map_changelog_title');
  setText('overview-map-changelog-desc', 'overview_map_changelog_desc');

  setText('ct-creds', 'ct_creds');
  setText('l-mid', 'l_mid'); setText('l-bfpw', 'l_bfpw'); setText('h-bfpw', 'h_bfpw');
  setText('l-hmacpw', 'l_hmacpw'); setText('h-hmacpw', 'h_hmacpw');
  setText('classic-encryption-label', 'classic_encryption_label');
  setText('classic-encryption-info-title', 'classic_encryption_info_title');
  setText('classic-encryption-doc-blowfish', 'classic_encryption_doc_blowfish');
  setText('classic-encryption-doc-aes', 'classic_encryption_doc_aes');
  setText('classic-encryption-doc-faq', 'classic_encryption_doc_faq');
  setText('classic-credential-title', 'classic_credential_title');
  setText('classic-credential-subtitle', 'classic_credential_subtitle');
  setText('rest-credential-title', 'rest_credential_title');
  setText('rest-credential-subtitle', 'rest_credential_subtitle');
  setText('l-rest-api-key', 'l_rest_api_key');
  setText('h-rest-api-key', 'h_rest_api_key');
  updateCredentialModeUI();
  setTip('tip-mid',     'tip_mid');
  setTip('tip-bfpw',    'tip_bfpw');
  setTip('tip-hmacpw',  'tip_hmacpw');
  setText('cred-save-title', 'cred_save_title');
  setText('cred-save-text', 'cred_save_text');
  setText('master-recommendation-title', 'master_recommendation_title');
  setText('master-recommendation-text', 'master_recommendation_text');
  setText('master-recommendation-action', 'master_recommendation_action');
  setText('btn-save-text', 'btn_save');
  setText('btn-load-text', 'btn_load');
  setText('btn-delete-text', 'btn_delete');
  setText('opt-profile-placeholder', 'profile_placeholder');
  const pnEl = document.getElementById('profile-name'); if (pnEl && !pnEl.value) pnEl.placeholder = t('profile_name_ph');
  _renderProfileSelect(localStorage.getItem(LAST_PROFILE_KEY) || '');

  setText('te-title', 'te_title');
  setText('te-s1-label', 'te_s1_label'); setHtml('te-s1-desc', 'te_s1_desc');
  setText('te-s2-label', 'te_s2_label'); setHtml('te-s2-desc', 'te_s2_desc');
  setText('te-s3-label', 'te_s3_label'); setText('te-s3-desc', 'te_s3_desc');
  setText('te-leg-mid', 'te_leg_mid'); setText('te-leg-len', 'te_leg_len'); setText('te-leg-data', 'te_leg_data');

  setText('ct-payment', 'ct_payment');
  setText('integration-label', currentLang === 'en' ? 'Interface' : 'Schnittstelle');
  setText('use-case-label', 'use_case_label');
  setText('use-case-create-label', 'use_case_create');
  setText('use-case-status-label', 'use_case_status');
  setText('use-case-mit-cit-state', 'use_case_mit_cit_state');
  setText('l-status-lookup', 'status_lookup_label');
  setText('l-status-saved-transaction', 'status_saved_label');
  setText('h-status-saved-transaction', 'status_saved_hint');
  setText('status-saved-transaction-manual', 'status_saved_manual');
  setText('l-status-payment-id', 'status_payment_id_label');
  setText('l-status-transaction-id', 'status_transaction_id_label');
  setText('status-lookup-payment-option', 'status_payment_id_label');
  setText('status-lookup-transaction-option', 'status_transaction_id_label');
  setTip('tip-status-lookup', 'tip_status_lookup');
  setTip('tip-status-saved-transaction', 'tip_status_saved');
  setTip('tip-status-payment-id', 'tip_status_payment_id');
  setTip('tip-status-transaction-id', 'tip_status_transaction_id');
  setText('l-rest-version', currentLang === 'en' ? 'REST API Version' : 'REST API-Version');
  setText('l-rest-method', currentLang === 'en' ? 'REST Payment Type' : 'REST-Zahlungsart');
  setText('l-rest-environment', currentLang === 'en' ? 'Target Environment' : 'Zielumgebung');
  setText('l-rest-auth', currentLang === 'en' ? 'Authentication' : 'Authentifizierung');
  setText('l-rest-tool', currentLang === 'en' ? 'Output Format' : 'Ausgabeformat');
  setText('rest-tool-curl', 'rest_tool_curl');
  setText('rest-tool-curl-powershell', 'rest_tool_curl_powershell');
  setText('rest-tool-powershell', 'rest_tool_powershell');
  setText('rest-tool-postman', 'rest_tool_postman');
  setText('rest-tool-http', 'rest_tool_http');
  setTip('tip-rest-version', 'tip_rest_version');
  setTip('tip-rest-method', 'tip_rest_method');
  setTip('tip-rest-environment', 'tip_rest_environment');
  setTip('tip-rest-auth', 'tip_rest_auth');
  setTip('tip-rest-tool', 'tip_rest_tool');
  setHtml('rest-include-credentials-text', currentLang === 'en'
    ? '<span class="rest-secret-title">Insert credentials into output</span><span class="rest-secret-description">Secure placeholders are generated by default. Enable only for immediate local use; clipboard and shell history may retain secrets.</span>'
    : '<span class="rest-secret-title">Credentials in die Ausgabe einsetzen</span><span class="rest-secret-description">Standardmäßig werden sichere Platzhalter erzeugt. Nur für unmittelbare lokale Verwendung aktivieren; Zwischenablage und Shell-History können Secrets speichern.</span>');
  setText('rest-v2-warning', currentLang === 'en'
    ? 'REST V2 uses separate endpoints and field names. Its output is therefore generated independently from the V1 schema.'
    : 'REST V2 verwendet eigene Endpunkte und Feldnamen. Die Ausgabe wird deshalb unabhängig vom V1-Schema erzeugt.');
  setHtml('rest-test-data-help', currentLang === 'en'
    ? '<strong>Paygate test data:</strong> With Hosted Payment Page and Card Form, test card numbers are entered on the Paygate form, not in this JSON request. Examples: Visa <code>4111111111111111</code>, Mastercard <code>5555555555554444</code>, CVC <code>123</code>. <a href="https://developer.computop.com/display/EN/Test+credit+card" target="_blank" rel="noopener">Open official test cards</a>.'
    : '<strong>Paygate-Testdaten:</strong> Bei Hosted Payment Page und Card Form werden Testkartennummern erst im Paygate-Formular eingegeben, nicht in diesem JSON-Request. Beispiele: Visa <code>4111111111111111</code>, Mastercard <code>5555555555554444</code>, CVC <code>123</code>. <a href="https://developer.computop.com/display/EN/Test+credit+card" target="_blank" rel="noopener">Offizielle Testkarten öffnen</a>.');
  setText('l-amount', 'l_amount'); setText('l-currency', 'l_currency'); setText('l-language', 'l_language');
  setText('l-transid', 'l_transid'); setText('h-transid', 'h_transid');
  setText('l-refnr', 'l_refnr'); setText('h-refnr', 'h_refnr');
  setText('l-expiration', 'l_expiration'); setText('h-expiration', 'h_expiration');
  setText('l-orderdesc', 'l_orderdesc'); setText('h-orderdesc', 'h_orderdesc');
  setTip('tip-amount',   'tip_amount');
  setTip('tip-currency', 'tip_currency');
  setTip('tip-language', 'tip_language');
  setTip('tip-transid',  'tip_transid');
  setTip('tip-refnr',    'tip_refnr');
  setAttr('btn-new-refnr', 'title', 'btn_new_refnr_title');
  setTip('tip-expiration','tip_expiration');
  setTip('tip-orderdesc','tip_orderdesc');
  setText('opt-od-default', 'opt_od_default');
  setText('opt-od-sim-ok',  'opt_od_sim_ok');
  setText('opt-od-sim-dec', 'opt_od_sim_dec');
  setText('opt-od-custom',  'opt_od_custom');
  setText('tc-summary', 'tc_summary');
  setText('test-cards-title', 'workflow_nav_test_cards');
  setText('test-cards-info-title', 'test_cards_info_title');
  setHtml('test-cards-info-text', 'test_cards_info_text');
  setText('tc-h-brand', 'tc_h_brand'); setText('tc-h-number', 'tc_h_number'); setText('tc-h-result', 'tc_h_result');
  setText('tc-3ds-summary', 'tc_3ds_summary');
  setText('tc-3ds-h-brand', 'tc_3ds_h_brand'); setText('tc-3ds-h-number', 'tc_3ds_h_number'); setText('tc-3ds-h-scenario', 'tc_3ds_h_scenario');
  renderTestCards();
  renderTestCards3DS();
  setText('customer-master-title', 'customer_master_title');
  setText('customer-master-copy', 'customer_master_copy');
  setText('customer-person-title', 'customer_person_title');
  setText('customer-billing-title', 'customer_billing_title');
  setText('customer-shipping-title', 'customer_shipping_title');
  setText('btn-generate-customer', 'btn_generate_customer');
  setText('btn-clear-customer', 'btn_clear_customer');
  setText('article-list-title', 'article_list_title');
  setText('article-list-copy', 'article_list_copy');
  setText('btn-generate-article-list', 'btn_generate_article_list');
  setText('btn-clear-article-list', 'btn_clear_article_list');
  setText('btn-add-article-item', 'btn_add_article_item');
  setTip('tip-article-list', 'tip_article_list');
  setText('custom-fields-title', 'custom_fields_title');
  setText('custom-fields-copy', 'custom_fields_copy');
  setText('custom-fields-warning', 'custom_fields_warning');
  for (let index = 1; index <= 9; index += 1) setText(`l-custom-field-${index}`, `custom_field_${index}`);
  setText('btn-custom-fields-example', 'btn_custom_fields_example');
  setText('btn-custom-fields-clear', 'btn_custom_fields_clear');
  setTip('tip-custom-fields', 'tip_custom_fields');
  updateArticleItemLabels();
  updateArticleListSummary();
  setText('l-cust-salutation', 'l_cust_salutation');
  setText('l-cust-first-name', 'l_cust_first_name');
  setText('l-cust-last-name', 'l_cust_last_name');
  setText('l-cust-birth-date', 'l_cust_birth_date');
  setText('l-cust-number', 'l_cust_number');
  setText('l-cust-email', 'l_cust_email');
  setText('l-cust-phone-country', 'l_cust_phone_country');
  setText('l-cust-phone-number', 'l_cust_phone_number');
  setText('l-bill-street', 'l_bill_street'); setText('l-ship-street', 'l_bill_street');
  setText('l-bill-street-number', 'l_bill_street_number'); setText('l-ship-street-number', 'l_bill_street_number');
  setText('l-bill-postal-code', 'l_bill_postal_code'); setText('l-ship-postal-code', 'l_bill_postal_code');
  setText('l-bill-city', 'l_bill_city'); setText('l-ship-city', 'l_bill_city');
  setText('l-bill-country', 'l_bill_country'); setText('l-ship-country', 'l_bill_country');
  setText('l-shipping-same', 'l_shipping_same');
  setText('customer-v2-warning', 'customer_v2_warning');
  setTip('tip-customer-master', 'tip_customer_master');
  updateArticleRequirements();
  setTip('tip-cust-salutation', 'tip_cust_salutation');
  setTip('tip-cust-name', 'tip_cust_name');
  setTip('tip-cust-last-name', 'tip_cust_name');
  setTip('tip-cust-birth-date', 'tip_cust_birth_date');
  setTip('tip-cust-number', 'tip_cust_number');
  setTip('tip-cust-email', 'tip_cust_email');
  setTip('tip-cust-phone', 'tip_cust_phone');
  setTip('tip-cust-phone-number', 'tip_cust_phone');
  ['bill', 'ship'].forEach(prefix => {
    setTip(`tip-${prefix}-street`, 'tip_customer_address');
    setTip(`tip-${prefix}-street-number`, 'tip_customer_address');
    setTip(`tip-${prefix}-postal-code`, 'tip_customer_address');
    setTip(`tip-${prefix}-city`, 'tip_customer_address');
    setTip(`tip-${prefix}-country`, 'tip_customer_country');
  });
  populateCustomerCountryOptions();
  setText('workflow-callbacks-title', 'sep_redirect');
  setText('l-urls', 'l_urls'); setText('h-urls', 'h_urls');
  setText('l-urlf', 'l_urlf'); setText('h-urlf', 'h_urlf');
  setText('l-urln', 'l_urln'); setText('h-urln', 'h_urln');
  setText('l-urlb', 'l_urlb'); setText('h-urlb', 'h_urlb');
  setAttr('urlSuccess', 'placeholder', 'ph_url_success');
  setAttr('urlFailure', 'placeholder', 'ph_url_failure');
  setAttr('urlNotify', 'placeholder', 'ph_url_notify');
  setAttr('urlBack', 'placeholder', 'ph_url_back');
  setText('cb-receiver-text', 'cb_receiver_label');
  updateCallbackReceiverAvailabilityUI();
  setHtml('callback-demo-copy', 'callback_demo_copy');
  setText('btn-httpbingo-demo', 'callback_demo_button');
  setTip('tip-urls',  'tip_urls');
  setTip('tip-urlf',  'tip_urlf');
  setTip('tip-urln',  'tip_urln');
  setTip('tip-urlb',  'tip_urlb');
  setText('l-paytypes', 'l_paytypes'); setText('h-paytypes', 'h_paytypes');
  setText('l-template', 'l_template'); setText('h-template', 'h_template');
  setText('opt-tmpl-none', 'opt_tmpl_none');
  setText('opt-tmpl-custom', 'opt_tmpl_custom');
  setAttr('template-custom', 'placeholder', 'tmpl_custom_ph');
  setTip('tip-template', 'tip_template');
  setText('opt-pt-all', 'opt_pt_all'); setText('opt-pt-cc', 'opt_pt_cc');
  setTip('tip-paytypes', 'tip_paytypes');
  setText('method-hpp-label', 'method_hpp_label');
  setText('method-ccf-label', 'method_ccf_label');
  setText('method-pbl-label', 'method_pbl_label');

  setText('ct-preview', 'ct_preview');
  setText('btn-preview-text', 'btn_preview');
  setText('btn-new-flow-text', 'btn_new_flow');
  setText('btn-newtid-text', 'btn_newtid');
  setText('preview-empty-title', 'info_title');
  setHtml('preview-empty-text', 'preview_empty');
  setText('preview-stale-title', 'preview_stale_title');
  setText('preview-stale-text', 'preview_stale_text');
  setText('btn-refresh-preview-text', 'btn_refresh_preview');
  setText('debug-plain-label', 'debug_plain_label');
  setText('debug-data-label', 'debug_data_label');
  setText('derived-parameters-label', 'derived_parameters_label');
  setText('rest-derived-parameters-label', 'derived_parameters_label');
  setText('debug-urlparams-label', 'debug_urlparams_label');
  setText('debug-pbl-outer-label', 'debug_pbl_outer_label');
  setText('debug-url-label', 'debug_url_label');
  setText('copy-plain-text', 'btn_copy'); setText('copy-data-text', 'btn_copy'); setText('copy-urlparams-text', 'btn_copy'); setText('copy-pbl-outer-text', 'btn_copy'); setText('copy-url-text', 'btn_copy');
  setText('btn-submit-text', 'btn_submit');
  setText('btn-submit-hint', 'btn_submit_hint');
  setText('btn-status-submit-text', 'btn_status_submit');
  setText('btn-status-submit-hint', 'btn_status_submit_hint');
  updateUseCaseUI(); // Context-specific labels must win after generic preview labels.
  refreshWorkflowNavigation();

  setText('ct-log', 'ct_log');
  setText('log-subtitle', 'log_subtitle');
  setText('btn-log-clear-text', 'btn_log_clear');
  setText('btn-log-export-text', 'btn_log_export');
  setText('btn-log-import-text', 'btn_log_import');
  setText('log-transfer-hint', 'log_transfer_hint');

  setText('ct-response', 'ct_response');
  setText('resp-info-title', 'resp_info_title');
  setHtml('resp-info-body', 'resp_info_body');
  setText('l-resp-url', 'l_resp_url'); setText('h-resp-url', 'h_resp_url');
  setAttr('resp-url', 'placeholder', 'ph_resp_url');
  setText('sep-resp-manual', 'sep_resp_manual');
  setText('l-resp-data', 'l_resp_data'); setText('l-resp-len', 'l_resp_len');
  setText('btn-decrypt-text', 'btn_decrypt');
  setText('resp-result-label', 'resp_result_label');
  setText('copy-resp-text', 'btn_copy_resp');
  setText('resp-new-badge-text', 'resp_new_badge');
  setText('rest-resp-info-title', 'resp_info_title');
  setHtml('rest-resp-info-body', 'rest_resp_info_body');
  setText('l-rest-resp-json', 'l_rest_resp_json');
  setAttr('rest-resp-json', 'placeholder', 'ph_rest_resp_json');
  setText('btn-analyze-rest-response-text', 'btn_analyze_rest_response');
  setText('ct-resp-log', 'ct_resp_log');
  setText('resp-log-subtitle', 'resp_log_subtitle');
  setText('btn-resp-log-clear-text', 'btn_resp_log_clear');
  setText('btn-resp-log-export-text', 'btn_log_export');
  setText('btn-resp-log-import-text', 'btn_log_import');
  setText('resp-log-transfer-hint', 'log_transfer_hint');

  setText('footer-name-text', 'footer_name');
  updateDesignToggle();
  setText('btn-log-data-text', 'btn_log_data');
  setText('log-data-modal-title', 'log_data_modal_title');
  setText('log-data-modal-text', 'log_data_modal_text');
  setText('log-data-request-label', 'ct_log');
  setText('log-data-response-label', 'ct_resp_log');
  setText('log-data-export-title', 'log_data_export_title');
  setText('log-data-export-copy', 'log_data_export_copy');
  setText('log-data-import-title', 'log_data_import_title');
  setText('log-data-import-copy', 'log_data_import_copy');
  setText('log-data-close', 'log_data_close');
  setText('btn-clear-all-text', 'btn_clear_all');
  setText('clear-all-modal-title', 'clear_all_modal_title');
  setText('clear-all-modal-text', 'clear_all_modal_text');
  setText('clear-all-cancel', 'clear_all_modal_cancel');
  setText('clear-all-confirm', 'clear_all_modal_confirm');
  setText('profile-delete-modal-title', 'profile_delete_modal_title');
  setText('profile-delete-cancel', 'profile_delete_modal_cancel');
  setText('profile-delete-confirm', 'profile_delete_modal_confirm');
  setText('new-flow-modal-title', 'new_flow_modal_title');
  setText('new-flow-modal-text', 'new_flow_modal_text');
  setText('new-flow-cancel', 'clear_all_modal_cancel');
  setText('new-flow-confirm', 'new_flow_modal_confirm');
  setText('log-action-cancel', 'clear_all_modal_cancel');
  updateClassicEncryptionUI();
  updateProfileDeleteModalText();

  // Lang toggle indicator
  const de = document.getElementById('lang-de');
  const en = document.getElementById('lang-en');
  if (de && en) {
    if (currentLang === 'en') {
      de.className = 'lang-seg'; en.className = 'lang-seg lang-seg-active';
    } else {
      de.className = 'lang-seg lang-seg-active'; en.className = 'lang-seg';
    }
  }

  // Re-render dynamic content (contain translated strings)
  renderLog();
  renderResponseLog();
  renderChangelog();
  renderHelp();
  _updateCredStatus();
}

function toggleLang() {
  currentLang = currentLang === 'de' ? 'en' : 'de';
  localStorage.setItem(LANG_LS_KEY, currentLang);
  applyLang();
  showToast(t('toast_lang'), 'info');
}

function initLang() {
  const saved = localStorage.getItem(LANG_LS_KEY);
  if (saved === 'en' || saved === 'de') currentLang = saved;
  applyLang();
}


// Based on the reference algorithm by Bruce Schneier
// ══════════════════════════════════════════════════════════════
const Blowfish = (function () {
  // Blowfish P-array (subkeys) – initialized from hexadecimal digits of Pi
  const P_ORIG = [
    0x243f6a88,0x85a308d3,0x13198a2e,0x03707344,
    0xa4093822,0x299f31d0,0x082efa98,0xec4e6c89,
    0x452821e6,0x38d01377,0xbe5466cf,0x34e90c6c,
    0xc0ac29b7,0xc97c50dd,0x3f84d5b5,0xb5470917,
    0x9216d5d9,0x8979fb1b
  ];

  // S-boxes (4 x 256 32-bit values from Pi)
  const S_ORIG = [
    [0xd1310ba6,0x98dfb5ac,0x2ffd72db,0xd01adfb7,0xb8e1afed,0x6a267e96,0xba7c9045,0xf12c7f99,
     0x24a19947,0xb3916cf7,0x0801f2e2,0x858efc16,0x636920d8,0x71574e69,0xa458fea3,0xf4933d7e,
     0x0d95748f,0x728eb658,0x718bcd58,0x82154aee,0x7b54a41d,0xc25a59b5,0x9c30d539,0x2af26013,
     0xc5d1b023,0x286085f0,0xca417918,0xb8db38ef,0x8e79dcb0,0x603a180e,0x6c9e0e8b,0xb01e8a3e,
     0xd71577c1,0xbd314b27,0x78af2fda,0x55605c60,0xe65525f3,0xaa55ab94,0x57489862,0x63e81440,
     0x55ca396a,0x2aab10b6,0xb4cc5c34,0x1141e8ce,0xa15486af,0x7c72e993,0xb3ee1411,0x636fbc2a,
     0x2ba9c55d,0x741831f6,0xce5c3e16,0x9b87931e,0xafd6ba33,0x6c24cf5c,0x7a325381,0x28958677,
     0x3b8f4898,0x6b4bb9af,0xc4bfe81b,0x66282193,0x61d809cc,0xfb21a991,0x487cac60,0x5dec8032,
     0xef845d5d,0xe98575b1,0xdc262302,0xeb651b88,0x23893e81,0xd396acc5,0x0f6d6ff3,0x83f44239,
     0x2e0b4482,0xa4842004,0x69c8f04a,0x9e1f9b5e,0x21c66842,0xf6e96c9a,0x670c9c61,0xabd388f0,
     0x6a51a0d2,0xd8542f68,0x960fa728,0xab5133a3,0x6eef0b6c,0x137a3be4,0xba3bf050,0x7efb2a98,
     0xa1f1651d,0x39af0176,0x66ca593e,0x82430e88,0x8cee8619,0x456f9fb4,0x7d84a5c3,0x3b8b5ebe,
     0xe06f75d8,0x85c12073,0x401a449f,0x56c16aa6,0x4ed3aa62,0x363f7706,0x1bfedf72,0x429b023d,
     0x37d0d724,0xd00a1248,0xdb0fead3,0x49f1c09b,0x075372c9,0x80991b7b,0x25d479d8,0xf6e8def7,
     0xe3fe501a,0xb6794c3b,0x976ce0bd,0x04c006ba,0xc1a94fb6,0x409f60c4,0x5e5c9ec2,0x196a2463,
     0x68fb6faf,0x3e6c53b5,0x1339b2eb,0x3b52ec6f,0x6dfc511f,0x9b30952c,0xcc814544,0xaf5ebd09,
     0xbee3d004,0xde334afd,0x660f2807,0x192e4bb3,0xc0cba857,0x45c8740f,0xd20b5f39,0xb9d3fbdb,
     0x5579c0bd,0x1a60320a,0xd6a100c6,0x402c7279,0x679f25fe,0xfb1fa3cc,0x8ea5e9f8,0xdb3222f8,
     0x3c7516df,0xfd616b15,0x2f501ec8,0xad0552ab,0x323db5fa,0xfd238760,0x53317b48,0x3e00df82,
     0x9e5c57bb,0xca6f8ca0,0x1a87562e,0xdf1769db,0xd542a8f6,0x287effc3,0xac6732c6,0x8c4f5573,
     0x695b27b0,0xbbca58c8,0xe1ffa35d,0xb8f011a0,0x10fa3d98,0xfd2183b8,0x4afcb56c,0x2dd1d35b,
     0x9a53e479,0xb6f84565,0xd28e49bc,0x4bfb9790,0xe1ddf2da,0xa4cb7e33,0x62fb1341,0xcee4c6e8,
     0xef20cada,0x36774c01,0xd07e9efe,0x2bf11fb4,0x95dbda4d,0xae909198,0xeaad8e71,0x6b93d5a0,
     0xd08ed1d0,0xafc725e0,0x8e3c5b2f,0x8e7594b7,0x8ff6e2fb,0xf2122b64,0x8888b812,0x900df01c,
     0x4fad5ea0,0x688fc31c,0xd1cff191,0xb3a8c1ad,0x2f2f2218,0xbe0e1777,0xea752dfe,0x8b021fa1,
     0xe5a0cc0f,0xb56f74e8,0x18acf3d6,0xce89e299,0xb4a84fe0,0xfd13e0b7,0x7cc43b81,0xd2ada8d9,
     0x165fa266,0x80957705,0x93cc7314,0x211a1477,0xe6ad2065,0x77b5fa86,0xc75442f5,0xfb9d35cf,
     0xebcdaf0c,0x7b3e89a0,0xd6411bd3,0xae1e7e49,0x00250e2d,0x2071b35e,0x226800bb,0x57b8e0af,
     0x2464369b,0xf009b91e,0x5563911d,0x59dfa6aa,0x78c14389,0xd95a537f,0x207d5ba2,0x02e5b9c5,
     0x83260376,0x6295cfa9,0x11c81968,0x4e734a41,0xb3472dca,0x7b14a94a,0x1b510052,0x9a532915,
     0xd60f573f,0xbc9bc6e4,0x2b60a476,0x81e67400,0x08ba6fb5,0x571be91f,0xf296ec6b,0x2a0dd915,
     0xb6636521,0xe7b9f9b6,0xff34052e,0xc5855664,0x53b02d5d,0xa99f8fa1,0x08ba4799,0x6e85076a],
    [0x4b7a70e9,0xb5b32944,0xdb75092e,0xc4192623,0xad6ea6b0,0x49a7df7d,0x9cee60b8,0x8fedb266,
     0xecaa8c71,0x699a17ff,0x5664526c,0xc2b19ee1,0x193602a5,0x75094c29,0xa0591340,0xe4183a3e,
     0x3f54989a,0x5b429d65,0x6b8fe4d6,0x99f73fd6,0xa1d29c07,0xefe830f5,0x4d2d38e6,0xf0255dc1,
     0x4cdd2086,0x8470eb26,0x6382e9c6,0x021ecc5e,0x09686b3f,0x3ebaefc9,0x3c971814,0x6b6a70a1,
     0x687f3584,0x52a0e286,0xb79c5305,0xaa500737,0x3e07841c,0x7fdeae5c,0x8e7d44ec,0x5716f2b8,
     0xb03ada37,0xf0500c0d,0xf01c1f04,0x0200b3ff,0xae0cf51a,0x3cb574b2,0x25837a58,0xdc0921bd,
     0xd19113f9,0x7ca92ff6,0x94324773,0x22f54701,0x3ae5e581,0x37c2dadc,0xc8b57634,0x9af3dda7,
     0xa9446146,0x0fd0030e,0xecc8c73e,0xa4751e41,0xe238cd99,0x3bea0e2f,0x3280bba1,0x183eb331,
     0x4e548b38,0x4f6db908,0x6f420d03,0xf60a04bf,0x2cb81290,0x24977c79,0x5679b072,0xbcaf89af,
     0xde9a771f,0xd9930810,0xb38bae12,0xdccf3f2e,0x5512721f,0x2e6b7124,0x501adde6,0x9f84cd87,
     0x7a584718,0x7408da17,0xbc9f9abc,0xe94b7d8c,0xec7aec3a,0xdb851dfa,0x63094366,0xc464c3d2,
     0xef1c1847,0x3215d908,0xdd433b37,0x24c2ba16,0x12a14d43,0x2a65c451,0x50940002,0x133ae4dd,
     0x71dff89e,0x10314e55,0x81ac77d6,0x5f11199b,0x043556f1,0xd7a3c76b,0x3c11183b,0x5924a509,
     0xf28fe6ed,0x97f1fbfa,0x9ebabf2c,0x1e153c6e,0x86e34570,0xeae96fb1,0x860e5e0a,0x5a3e2ab3,
     0x771fe71c,0x4e3d06fa,0x2965dcb9,0x99e71d0f,0x803e89d6,0x5266c825,0x2e4cc978,0x9c10b36a,
     0xc6150eba,0x94e2ea78,0xa5fc3c53,0x1e0a2df4,0xf2f74ea7,0x361d2b3d,0x1939260f,0x19c27960,
     0x5223a708,0xf71312b6,0xebadfe6e,0xeac31f66,0xe3bc4595,0xa67bc883,0xb17f37d1,0x018cff28,
     0xc332ddef,0xbe6c5aa5,0x65582185,0x68ab9802,0xeecea50f,0xdb2f953b,0x2aef7dad,0x5b6e2f84,
     0x1521b628,0x29076170,0xecdd4775,0x619f1510,0x13cca830,0xeb61bd96,0x0334fe1e,0xaa0363cf,
     0xb5735c90,0x4c70a239,0xd59e9e0b,0xcbaade14,0xeecc86bc,0x60622ca7,0x9cab5cab,0xb2f3846e,
     0x648b1eaf,0x19bdf0ca,0xa02369b9,0x655abb50,0x40685a32,0x3c2ab4b3,0x319ee9d5,0xc021b8f7,
     0x9b540b19,0x875fa099,0x95f7997e,0x623d7da8,0xf837889a,0x97e32d77,0x11ed935f,0x16681281,
     0x0e358829,0xc7e61fd6,0x96dedfa1,0x7858ba99,0x57f584a5,0x1b227263,0x9b83c3ff,0x1ac24696,
     0xcdb30aeb,0x532e3054,0x8fd948e4,0x6dbc3128,0x58ebf2ef,0x34c6ffea,0xfe28ed61,0xee7c3c73,
     0x5d4a14d9,0xe864b7e3,0x42105d14,0x203e13e0,0x45eee2b6,0xa3aaabea,0xdb6c4f15,0xfacb4fd0,
     0xc742f442,0xef6abbb5,0x654f3b1d,0x41cd2105,0xd81e799e,0x86854dc7,0xe44b476a,0x3d816250,
     0xcf62a1f2,0x5b8d2646,0xfc8883a0,0xc1c7b6a3,0x7f1524c3,0x69cb7492,0x47848a0b,0x5692b285,
     0x095bbf00,0xad19489d,0x1462b174,0x23820e00,0x58428d2a,0x0c55f5ea,0x1dadf43e,0x233f7061,
     0x3372f092,0x8d937e41,0xd65fecf1,0x6c223bdb,0x7cde3759,0xcbee7460,0x4085f2a7,0xce77326e,
     0xa6078084,0x19f8509e,0xe8efd855,0x61d99735,0xa969a7aa,0xc50c06c2,0x5a04abfc,0x800bcadc,
     0x9e447a2e,0xc3453484,0xfdd56705,0x0e1e9ec9,0xdb73dbd3,0x105588cd,0x675fda79,0xe3674340,
     0xc5c43465,0x713e38d8,0x3d28f89e,0xf16dff20,0x153e21e7,0x8fb03d4a,0xe6e39f2b,0xdb83adf7],
    [0xe93d5a68,0x948140f7,0xf64c261c,0x94692934,0x411520f7,0x7602d4f7,0xbcf46b2e,0xd4a20068,
     0xd4082471,0x3320f46a,0x43b7d4b7,0x500061af,0x1e39f62e,0x97244546,0x14214f74,0xbf8b8840,
     0x4d95fc1d,0x96b591af,0x70f4ddd3,0x66a02f45,0xbfbc09ec,0x03bd9785,0x7fac6dd0,0x31cb8504,
     0x96eb27b3,0x55fd3941,0xda2547e6,0xabca0a9a,0x28507825,0x530429f4,0x0a2c86da,0xe9b66dfb,
     0x68dc1462,0xd7486900,0x680ec0a4,0x27a18dee,0x4f3ffea2,0xe887ad8c,0xb58ce006,0x7af4d6b6,
     0xaace1e7c,0xd3375fec,0xce78a399,0x406b2a42,0x20fe9e35,0xd9f385b9,0xee39d7ab,0x3b124e8b,
     0x1dc9faf7,0x4b6d1856,0x26a36631,0xeae397b2,0x3a6efa74,0xdd5b4332,0x6841e7f7,0xca7820fb,
     0xfb0af54e,0xd8feb397,0x454056ac,0xba489527,0x55533a3a,0x20838d87,0xfe6ba9b7,0xd096954b,
     0x55a867bc,0xa1159a58,0xcca92963,0x99e1db33,0xa62a4a56,0x3f3125f9,0x5ef47e1c,0x9029317c,
     0xfdf8e802,0x04272f70,0x80bb155c,0x05282ce3,0x95c11548,0xe4c66d22,0x48c1133f,0xc70f86dc,
     0x07f9c9ee,0x41041f0f,0x404779a4,0x5d886e17,0x325f51eb,0xd59bc0d1,0xf2bcc18f,0x41113564,
     0x257b7834,0x602a9c60,0xdff8e8a3,0x1f636c1b,0x0e12b4c2,0x02e1329e,0xaf664fd1,0xcad18115,
     0x6b2395e0,0x333e92e1,0x3b240b62,0xeebeb922,0x85b2a20e,0xe6ba0d99,0xde720c8c,0x2da2f728,
     0xd0127845,0x95b794fd,0x647d0862,0xe7ccf5f0,0x5449a36f,0x877d48fa,0xc39dfd27,0xf33e8d1e,
     0x0a476341,0x992eff74,0x3a6f6eab,0xf4f8fd37,0xa812dc60,0xa1ebddf8,0x991be14c,0xdb6e6b0d,
     0xc67b5510,0x6d672c37,0x2765d43b,0xdcd0e804,0xf1290dc7,0xcc00ffa3,0xb5390f92,0x690fed0b,
     0x667b9ffb,0xcedb7d9c,0xa091cf0b,0xd9155ea3,0xbb132f88,0x515bad24,0x7b9479bf,0x763bd6eb,
     0x37392eb3,0xcc115979,0x8026e297,0xf42e312d,0x6842ada7,0xc66a2b3b,0x12754ccc,0x782ef11c,
     0x6a124237,0xb79251e7,0x06a1bbe6,0x4bfb6350,0x1a6b1018,0x11caedfa,0x3d25bdd8,0xe2e1c3c9,
     0x44421659,0x0a121386,0xd90cec6e,0xd5abea2a,0x64af674e,0xda86a85f,0xbebfe988,0x64e4c3fe,
     0x9dbc8057,0xf0f7c086,0x60787bf8,0x6003604d,0xd1fd8346,0xf6381fb0,0x7745ae04,0xd736fccc,
     0x83426b33,0xf01eab71,0xb0804187,0x3c005e5f,0x77a057be,0xbde8ae24,0x55464299,0xbf582e61,
     0x4e58f48f,0xf2ddfda2,0xf474ef38,0x8789bdc2,0x5366f9c3,0xc8b38e74,0xb475f255,0x46fcd9b9,
     0x7aeb2661,0x8b1ddf84,0x846a0e79,0x915f95e2,0x466e598e,0x20b45770,0x8cd55591,0xc902de4c,
     0xb90bace1,0xbb8205d0,0x11a86248,0x7574a99e,0xb77f19b6,0xe0a9dc09,0x662d09a1,0xc4324633,
     0xe85a1f02,0x09f0be8c,0x4a99a025,0x1d6efe10,0x1ab93d1d,0x0ba5a4df,0xa186f20f,0x2868f169,
     0xdcb7da83,0x573906fe,0xa1e2ce9b,0x4fcd7f52,0x50115e01,0xa70683fa,0xa002b5c4,0x0de6d027,
     0x9af88c27,0x773f8641,0xc3604c06,0x61a806b5,0xf0177a28,0xc0f586e0,0x006058aa,0x30dc7d62,
     0x11e69ed7,0x2338ea63,0x53c2dd94,0xc2c21634,0xbbcbee56,0x90bcb6de,0xebfc7da1,0xce591d76,
     0x6f05e409,0x4b7c0188,0x39720a3d,0x7c927c24,0x86e3725f,0x724d9db9,0x1ac15bb4,0xd39eb8fc,
     0xed545578,0x08fca5b5,0xd83d7cd3,0x4dad0fc4,0x1e50ef5e,0xb161e6f8,0xa28514d9,0x6c51133c,
     0x6fd5c7e7,0x56e14ec4,0x362abfce,0xddc6c837,0xd79a3234,0x92638212,0x670efa8e,0x406000e0],
    [0x3a39ce37,0xd3faf5cf,0xabc27737,0x5ac52d1b,0x5cb0679e,0x4fa33742,0xd3822740,0x99bc9bbe,
     0xd5118e9d,0xbf0f7315,0xd62d1c7e,0xc700c47b,0xb78c1b6b,0x21a19045,0xb26eb1be,0x6a366eb4,
     0x5748ab2f,0xbc946e79,0xc6a376d2,0x6549c2c8,0x530ff8ee,0x468dde7d,0xd5730a1d,0x4cd04dc6,
     0x2939bbdb,0xa9ba4650,0xac9526e8,0xbe5ee304,0xa1fad5f0,0x6a2d519a,0x63ef8ce2,0x9a86ee22,
     0xc089c2b8,0x43242ef6,0xa51e03aa,0x9cf2d0a4,0x83c061ba,0x9be96a4d,0x8fe51550,0xba645bd6,
     0x2826a2f9,0xa73a3ae1,0x4ba99586,0xef5562e9,0xc72fefd3,0xf752f7da,0x3f046f69,0x77fa0a59,
     0x80e4a915,0x87b08601,0x9b09e6ad,0x3b3ee593,0xe990fd5a,0x9e34d797,0x2cf0b7d9,0x022b8b51,
     0x96d5ac3a,0x017da67d,0xd1cf3ed6,0x7c7d2d28,0x1f9f25cf,0xadf2b89b,0x5ad6b472,0x5a88f54c,
     0xe029ac71,0xe019a5e6,0x47b0acfd,0xed93fa9b,0xe8d3c48d,0x283b57cc,0xf8d56629,0x79132e28,
     0x785f0191,0xed756055,0xf7960e44,0xe3d35e8c,0x15056dd4,0x88f46dba,0x03a16125,0x0564f0bd,
     0xc3eb9e15,0x3c9057a2,0x97271aec,0xa93a072a,0x1b3f6d9b,0x1e6321f5,0xf59c66fb,0x26dcf319,
     0x7533d928,0xb155fdf5,0x03563482,0x8aba3cbb,0x28517711,0xc20ad9f8,0xabcc5167,0xccad925f,
     0x4de81751,0x3830dc8e,0x379d5862,0x9320f991,0xea7a90c2,0xfb3e7bce,0x5121ce64,0x774fbe32,
     0xa8b6e37e,0xc3293d46,0x48de5369,0x6413e680,0xa2ae0810,0xdd6db224,0x69852dfd,0x09072166,
     0xb39a460a,0x6445c0dd,0x586cdecf,0x1c20c8ae,0x5bbef7dd,0x1b588d40,0xccd2017f,0x6bb4e3bb,
     0xdda26a7e,0x3a59ff45,0x3e350a44,0xbcb4cdd5,0x72eacea8,0xfa6484bb,0x8d6612ae,0xbf3c6f47,
     0xd29be463,0x542f5d9e,0xaec2771b,0xf64e6370,0x740e0d8d,0xe75b1357,0xf8721671,0xaf537d5d,
     0x4040cb08,0x4eb4e2cc,0x34d2466a,0x0115af84,0xe1b00428,0x95983a1d,0x06b89fb4,0xce6ea048,
     0x6f3f3b82,0x3520ab82,0x011a1d4b,0x277227f8,0x611560b1,0xe7933fdc,0xbb3a792b,0x344525bd,
     0xa08839e1,0x51ce794b,0x2f32c9b7,0xa01fbac9,0xe01cc87e,0xbcc7d1f6,0xcf0111c3,0xa1e8aac7,
     0x1a908749,0xd44fbd9a,0xd0dadecb,0xd50ada38,0x0339c32a,0xc6913667,0x8df9317c,0xe0b12b4f,
     0xf79e59b7,0x43f5bb3a,0xf2d519ff,0x27d9459c,0xbf97222c,0x15e6fc2a,0x0f91fc71,0x9b941525,
     0xfae59361,0xceb69ceb,0xc2a86459,0x12baa8d1,0xb6c1075e,0xe3056a0c,0x10d25065,0xcb03a442,
     0xe0ec6e0e,0x1698db3b,0x4c98a0be,0x3278e964,0x9f1f9532,0xe0d392df,0xd3a0342b,0x8971f21e,
     0x1b0a7441,0x4ba3348c,0xc5be7120,0xc37632d8,0xdf359f8d,0x9b992f2e,0xe60b6f47,0x0fe3f11d,
     0xe54cda54,0x1edad891,0xce6279cf,0xcd3e7e6f,0x1618b166,0xfd2c1d05,0x848fd2c5,0xf6fb2299,
     0xf523f357,0xa6327623,0x93a83531,0x56cccd02,0xacf08162,0x5a75ebb5,0x6e163697,0x88d273cc,
     0xde966292,0x81b949d0,0x4c50901b,0x71c65614,0xe6c6c7bd,0x327a140a,0x45e1d006,0xc3f27b9a,
     0xc9aa53fd,0x62a80f00,0xbb25bfe2,0x35bdd2f6,0x71126905,0xb2040222,0xb6cbcf7c,0xcd769c2b,
     0x53113ec0,0x1640e3d3,0x38abbd60,0x2547adf0,0xba38209c,0xf746ce76,0x77afa1c5,0x20756060,
     0x85cbfe4e,0x8ae88dd8,0x7aaaf9b0,0x4cf9aa7e,0x1948c25c,0x02fb8a8c,0x01c36ae4,0xd6ebe1f9,
     0x90d4f869,0xa65cdea0,0x3f09252d,0xc208e69f,0xb74e6132,0xce77e25b,0x578fdfe3,0x3ac372e6]
  ];

  function uint32(n) { return n >>> 0; }
  function add32(a, b) { return uint32(a + b); }

  function F(S, x) {
    const a = (x >>> 24) & 0xff;
    const b = (x >>> 16) & 0xff;
    const c = (x >>>  8) & 0xff;
    const d =  x         & 0xff;
    return uint32(uint32(add32(S[0][a], S[1][b]) ^ S[2][c]) + S[3][d]);
  }

  function init(keyBytes) {
    // Deep copy P and S
    const P = P_ORIG.slice();
    const S = S_ORIG.map(s => s.slice());

    // XOR P with key
    let ki = 0;
    for (let i = 0; i < 18; i++) {
      let data = 0;
      for (let j = 0; j < 4; j++) {
        data = uint32((data << 8) | keyBytes[ki % keyBytes.length]);
        ki++;
      }
      P[i] ^= data;
    }

    // Encrypt all-zero block repeatedly to set up P and S
    let L = 0, R = 0;
    for (let i = 0; i < 18; i += 2) {
      [L, R] = encryptBlock(P, S, L, R);
      P[i] = L; P[i+1] = R;
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 256; j += 2) {
        [L, R] = encryptBlock(P, S, L, R);
        S[i][j] = L; S[i][j+1] = R;
      }
    }
    return { P, S };
  }

  function encryptBlock(P, S, L, R) {
    for (let i = 0; i < 16; i++) {
      L = uint32(L ^ P[i]);
      R = uint32(R ^ F(S, L));
      [L, R] = [R, L];
    }
    [L, R] = [R, L];
    R = uint32(R ^ P[16]);
    L = uint32(L ^ P[17]);
    return [L, R];
  }

  function encrypt(keyStr, plaintext) {
    // Convert key to bytes
    const keyBytes = [];
    for (let i = 0; i < keyStr.length; i++) keyBytes.push(keyStr.charCodeAt(i) & 0xff);

    // Convert plaintext to bytes, pad to multiple of 8
    const ptBytes = [];
    for (let i = 0; i < plaintext.length; i++) ptBytes.push(plaintext.charCodeAt(i) & 0xff);
    while (ptBytes.length % 8 !== 0) ptBytes.push(0);

    const { P, S } = init(keyBytes);

    const out = [];
    for (let i = 0; i < ptBytes.length; i += 8) {
      let L = uint32((ptBytes[i]<<24)|(ptBytes[i+1]<<16)|(ptBytes[i+2]<<8)|ptBytes[i+3]);
      let R = uint32((ptBytes[i+4]<<24)|(ptBytes[i+5]<<16)|(ptBytes[i+6]<<8)|ptBytes[i+7]);
      [L, R] = encryptBlock(P, S, L, R);
      out.push((L>>>24)&0xff, (L>>>16)&0xff, (L>>>8)&0xff, L&0xff,
               (R>>>24)&0xff, (R>>>16)&0xff, (R>>>8)&0xff, R&0xff);
    }
    // Hex encode, zero-pad each byte to 2 chars
    return out.map(b => b.toString(16).padStart(2,'0')).join('');
  }

  function decryptBlock(P, S, L, R) {
    for (let i = 17; i > 1; i--) {
      L = uint32(L ^ P[i]);
      R = uint32(R ^ F(S, L));
      [L, R] = [R, L];
    }
    [L, R] = [R, L];
    R = uint32(R ^ P[1]);
    L = uint32(L ^ P[0]);
    return [L, R];
  }

  function decrypt(keyStr, hexStr, len) {
    const keyBytes = [];
    for (let i = 0; i < keyStr.length; i++) keyBytes.push(keyStr.charCodeAt(i) & 0xff);
    const ctBytes = [];
    for (let i = 0; i < hexStr.length; i += 2) ctBytes.push(parseInt(hexStr.substr(i, 2), 16));
    const { P, S } = init(keyBytes);
    const out = [];
    for (let i = 0; i < ctBytes.length; i += 8) {
      let L = uint32((ctBytes[i]<<24)|(ctBytes[i+1]<<16)|(ctBytes[i+2]<<8)|ctBytes[i+3]);
      let R = uint32((ctBytes[i+4]<<24)|(ctBytes[i+5]<<16)|(ctBytes[i+6]<<8)|ctBytes[i+7]);
      [L, R] = decryptBlock(P, S, L, R);
      out.push((L>>>24)&0xff,(L>>>16)&0xff,(L>>>8)&0xff,L&0xff,
               (R>>>24)&0xff,(R>>>16)&0xff,(R>>>8)&0xff,R&0xff);
    }
    const trimmed = len ? out.slice(0, len) : out;
    return new TextDecoder().decode(new Uint8Array(trimmed));
  }

  return { encrypt, decrypt };
})();

// ══════════════════════════════════════════════════════════════
// HMAC-SHA256 via Web Crypto API
// ══════════════════════════════════════════════════════════════
async function hmacSha256(keyStr, message) {
  const enc = new TextEncoder();
  const keyData = enc.encode(keyStr);
  const msgData = enc.encode(message);
  const cryptoKey = await crypto.subtle.importKey(
    'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, msgData);
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2,'0')).join('');
}

function bytesToHex(bytes) {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

function hexToBytes(hex) {
  const clean = String(hex || '').replace(/\s+/g, '');
  if (!clean || clean.length % 2 !== 0 || /[^0-9a-f]/i.test(clean)) throw new Error(t('err_hex_data'));
  const out = new Uint8Array(clean.length / 2);
  for (let i = 0; i < clean.length; i += 2) out[i / 2] = parseInt(clean.slice(i, i + 2), 16);
  return out;
}

function aesKeyBytes(keyStr) {
  const keyBytes = new TextEncoder().encode(keyStr);
  if (![16, 24, 32].includes(keyBytes.length)) throw new Error(t('err_aes_key_length'));
  return keyBytes;
}

function classicDataByteLength(dataValue) {
  if (currentClassicEncryption !== 'aes') return String(dataValue || '').length / 2;
  const parts = String(dataValue || '').split('-');
  return parts.reduce((sum, part) => sum + part.length / 2, 0);
}

function renderEncryptedDataPreview(dataValue) {
  const dataEl = document.getElementById('encrypted-data');
  if (!dataEl) return;
  dataEl.textContent = dataValue || '–';
  dataEl.dataset.raw = dataValue || '';
}

async function aesCbcEncrypt(keyStr, plaintext) {
  const key = await crypto.subtle.importKey('raw', aesKeyBytes(keyStr), { name: 'AES-CBC' }, false, ['encrypt']);
  const iv = crypto.getRandomValues(new Uint8Array(16));
  const ciphertext = await crypto.subtle.encrypt({ name: 'AES-CBC', iv }, key, new TextEncoder().encode(plaintext));
  return `${bytesToHex(iv)}-${bytesToHex(new Uint8Array(ciphertext))}`;
}

async function aesCbcDecrypt(keyStr, dataValue, len) {
  const parts = String(dataValue || '').trim().split('-');
  if (parts.length !== 2 || !parts[0] || !parts[1]) throw new Error(t('err_aes_data_format'));
  const [ivHex, cipherHex] = parts;
  const iv = hexToBytes(ivHex);
  if (iv.length !== 16) throw new Error(t('err_aes_iv_length'));
  const key = await crypto.subtle.importKey('raw', aesKeyBytes(keyStr), { name: 'AES-CBC' }, false, ['decrypt']);
  const plaintext = await crypto.subtle.decrypt({ name: 'AES-CBC', iv }, key, hexToBytes(cipherHex));
  const decoded = new TextDecoder().decode(plaintext);
  return len ? decoded.slice(0, len) : decoded;
}

async function encryptClassicData(keyStr, plaintext) {
  return currentClassicEncryption === 'aes'
    ? aesCbcEncrypt(keyStr, plaintext)
    : Blowfish.encrypt(keyStr, plaintext);
}

function detectClassicResponseEncryption(dataValue) {
  return String(dataValue || '').trim().includes('-') ? 'aes' : 'blowfish';
}

async function decryptClassicData(keyStr, dataValue, len) {
  return detectClassicResponseEncryption(dataValue) === 'aes'
    ? aesCbcDecrypt(keyStr, dataValue, len)
    : Blowfish.decrypt(keyStr, dataValue, len || undefined);
}

// ══════════════════════════════════════════════════════════════
// TOOLS — MAC VALIDATOR & BASE64 ENCODER
// ══════════════════════════════════════════════════════════════
async function validateMac() {
  const value = id => (document.getElementById(id)?.value || '').trim();
  const payId      = value('mac-payid');
  const transId    = value('mac-transid');
  const merchantId = value('mac-merchantid');
  const amount     = value('mac-amount');
  const currency   = value('mac-currency');
  const hmacKey    = document.getElementById('mac-hmac-key')?.value || '';
  const expected   = value('mac-expected').toLowerCase();

  if (!transId || !merchantId || !amount || !currency || !hmacKey) {
    showToast(t('val_mac_missing'), 'error');
    return;
  }

  const macMsg = `${payId}*${transId}*${merchantId}*${amount}*${currency}`;
  const mac = await hmacSha256(hmacKey, macMsg);

  const result = document.getElementById('mac-result');
  if (!result) return;
  clearElement(result);
  const msgLine = appendTextElement(result, 'div', '', '');
  appendTextElement(msgLine, 'strong', '', t('mac_result_message') + ': ');
  const msgValue = appendTextElement(msgLine, 'code', '', macMsg);
  msgValue.style.wordBreak = 'break-all';
  const macLine = appendTextElement(result, 'div', '', '');
  macLine.style.marginTop = '6px';
  appendTextElement(macLine, 'strong', '', t('mac_result_value') + ': ');
  const macValue = appendTextElement(macLine, 'code', '', mac);
  macValue.style.wordBreak = 'break-all';
  if (expected) {
    const match = expected === mac;
    const verdict = appendTextElement(result, 'div', '', match ? t('mac_result_match') : t('mac_result_mismatch'));
    verdict.style.cssText = `margin-top:8px;font-weight:600;color:var(--${match ? 'success' : 'danger'})`;
  }
  result.style.display = '';
}

function macFillFromWorkflow() {
  const setValue = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  setValue('mac-transid', document.getElementById('transId')?.value || '');
  setValue('mac-merchantid', document.getElementById('merchantId')?.value || '');
  setValue('mac-amount', String(amountToCents(document.getElementById('amount')?.value || '0') || ''));
  setValue('mac-currency', document.getElementById('currency')?.value || '');
  setValue('mac-hmac-key', document.getElementById('hmacKey')?.value || '');
  showToast(t('toast_mac_filled'), 'info');
}

const B64_SAMPLES = {
  'cof-cit': {
    param: 'credentialOnFile',
    json: '{\n  "type": {\n    "unscheduled": "CIT"\n  },\n  "initialPayment": true\n}',
  },
  'cof-mit': {
    param: 'credentialOnFile',
    json: '{\n  "type": {\n    "unscheduled": "MIT"\n  },\n  "initialPayment": false\n}',
  },
  'browser-info': {
    param: 'browserInfo',
    json: '{\n  "javaEnabled": false,\n  "javascriptEnabled": true,\n  "language": "de-DE",\n  "colorDepth": 24,\n  "screenHeight": 1080,\n  "screenWidth": 1920,\n  "timeZoneOffset": "-120",\n  "userAgent": "Mozilla/5.0",\n  "acceptHeaders": "text/html",\n  "ipAddress": "127.0.0.1"\n}',
  },
};

function applyB64Sample() {
  const key = document.getElementById('b64-sample')?.value || '';
  const sample = B64_SAMPLES[key];
  if (!sample) return;
  const plain = document.getElementById('b64-plain');
  const param = document.getElementById('b64-param-name');
  if (plain) plain.value = sample.json;
  if (param) param.value = sample.param;
  const encoded = document.getElementById('b64-encoded');
  if (encoded) encoded.value = '';
}

function base64DecodeUtf8(value) {
  const binary = atob(value);
  const bytes = Uint8Array.from(binary, ch => ch.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function b64Encode() {
  const plain = document.getElementById('b64-plain');
  const encoded = document.getElementById('b64-encoded');
  if (!plain || !encoded) return;
  if (!plain.value) { showToast(t('err_b64_empty'), 'error'); return; }
  encoded.value = base64EncodeUtf8(plain.value);
}

function b64Decode() {
  const plain = document.getElementById('b64-plain');
  const encoded = document.getElementById('b64-encoded');
  if (!plain || !encoded) return;
  if (!encoded.value.trim()) { showToast(t('err_b64_empty'), 'error'); return; }
  try {
    plain.value = base64DecodeUtf8(encoded.value.trim());
    const sampleSelect = document.getElementById('b64-sample');
    if (sampleSelect) sampleSelect.value = '';
  } catch (_) {
    showToast(t('err_b64_decode'), 'error');
  }
}

function b64CopyEncoded() {
  const encoded = document.getElementById('b64-encoded');
  if (!encoded || !encoded.value.trim()) { showToast(t('err_b64_empty'), 'error'); return; }
  navigator.clipboard.writeText(encoded.value.trim())
    .then(() => showToast(t('toast_copied'), 'success'));
}

function b64CopyParam() {
  const encoded = document.getElementById('b64-encoded');
  const param = (document.getElementById('b64-param-name')?.value || '').trim();
  if (!encoded || !encoded.value.trim() || !param) { showToast(t('err_b64_param'), 'error'); return; }
  navigator.clipboard.writeText(`${param}=${encoded.value.trim()}`)
    .then(() => showToast(t('toast_copied'), 'success'));
}

// ══════════════════════════════════════════════════════════════
// UI HELPERS
// ══════════════════════════════════════════════════════════════
function toggleCard(id) {
  document.getElementById(id).classList.toggle('collapsed');
}

function togglePwd(id, btn) {
  const el = document.getElementById(id);
  const eyeIcon     = '<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg></span>';
  const eyeOffIcon  = '<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg></span>';
  if (el.type === 'password') {
    el.type = 'text';
    btn.innerHTML = eyeOffIcon;
  } else {
    el.type = 'password';
    btn.innerHTML = eyeIcon;
  }
}

function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  const icons = {
    success: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
    error:   '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
    info:    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>'
  };
  clearElement(toast);
  const iconEl = document.createElement('span');
  iconEl.className = 'icon icon-md';
  iconEl.innerHTML = icons[type] || icons.info;
  toast.appendChild(iconEl);
  toast.appendChild(document.createTextNode(' ' + String(msg ?? '')));
  toast.className = 'show ' + type;
  setTimeout(() => toast.className = '', 5000);
}

function copyText(id) {
  const el = document.getElementById(id);
  const text = el.textContent;
  navigator.clipboard.writeText(text).then(() => showToast(t('toast_copied'), 'success'));
}

function onOrderDescChange(sel) {
  const custom = document.getElementById('orderDescCustom');
  if (custom) custom.style.display = sel.value === '__custom__' ? 'block' : 'none';
}

const TEST_CARDS = [
  ['Visa',       '4111 1111 1111 1111', '4111111111111111', 'tc_ok'],
  ['Visa',       '4012 8888 8888 1881', '4012888888881881', 'tc_dec'],
  ['MasterCard', '5555 5555 5555 4444', '5555555555554444', 'tc_ok'],
  ['MasterCard', '5105 1051 0510 5100', '5105105105105100', 'tc_dec'],
  ['Amex',       '3750 000000 00007',   '375000000000007',  'tc_ok'],
  ['Amex',       '3714 496353 98431',   '371449635398431',  'tc_dec'],
];

const TEST_CARDS_3DS = [
  ['Visa',       '4000 0199 6619 9434', '4000019966199434', 'tc_3ds_frictionless', 'tc-ok'],
  ['MasterCard', '5232 1224 2254 3299', '5232122422543299', 'tc_3ds_frictionless', 'tc-ok'],
  ['Amex',       '3750 000000 00007',   '375000000000007',  'tc_3ds_frictionless', 'tc-ok'],
  ['Visa',       '4000 0128 9268 8323', '4000012892688323', 'tc_3ds_challenge',    'tc-challenge'],
  ['MasterCard', '5232 1251 2540 1459', '5232125125401459', 'tc_3ds_challenge',    'tc-challenge'],
  ['Amex',       '3714 496353 98431',   '371449635398431',  'tc_3ds_challenge',    'tc-challenge'],
  ['Visa',       '4000 0117 4413 5012', '4000011744135012', 'tc_3ds_not_auth',     'tc-warn'],
  ['MasterCard', '5232 1227 4150 7017', '5232122741507017', 'tc_3ds_not_auth',     'tc-warn'],
];

function renderTestCards3DS() {
  const tbody = document.getElementById('tc-3ds-tbody');
  if (!tbody) return;
  const hint = t('tc_copy_hint');
  tbody.innerHTML = TEST_CARDS_3DS.map(([brand, formatted, raw, scenarioKey, cls]) => {
    return `<tr>
      <td>${brand}</td>
      <td class="tc-num" data-action="copy-test-card" data-number="${raw}" title="${hint}">${formatted}</td>
      <td class="${cls}">${t(scenarioKey)}</td>
    </tr>`;
  }).join('');
}

function renderTestCards() {
  const tbody = document.getElementById('tc-tbody');
  if (!tbody) return;
  const hint = t('tc_copy_hint');
  tbody.innerHTML = TEST_CARDS.map(([brand, formatted, raw, key]) => {
    const cls = key === 'tc_ok' ? 'tc-ok' : 'tc-dec';
    return `<tr>
      <td>${brand}</td>
      <td class="tc-num" data-action="copy-test-card" data-number="${raw}" title="${hint}">${formatted}</td>
      <td class="${cls}">${t(key)}</td>
    </tr>`;
  }).join('');
}

function generateTransId() {
  const ts = Date.now();
  const rand = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
  document.getElementById('transId').value = `TID-${ts}-${rand}`;
  markPreviewStale();
}

function getUsedPayByLinkRefs() {
  try {
    const refs = JSON.parse(localStorage.getItem(PBL_REFS_LS_KEY) || '[]');
    return Array.isArray(refs) ? refs.filter(ref => typeof ref === 'string') : [];
  } catch(e) {
    return [];
  }
}

function isPayByLinkRefUsed(refNr) {
  return getUsedPayByLinkRefs().includes(refNr);
}

function createPayByLinkRef() {
  const used = new Set(getUsedPayByLinkRefs());
  for (let attempt = 0; attempt < 10; attempt++) {
    const randomPart = crypto.randomUUID
      ? crypto.randomUUID().replace(/-/g, '').slice(0, 20).toUpperCase()
      : Array.from(crypto.getRandomValues(new Uint8Array(10)), byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase();
    const candidate = `PBL-${randomPart}`;
    if (!used.has(candidate)) return candidate;
  }
  throw new Error(t('pbl_ref_generation_error'));
}

function generatePayByLinkRef() {
  const input = document.getElementById('refNr');
  if (!input) return '';
  const refNr = createPayByLinkRef();
  input.value = refNr;
  return refNr;
}

function reservePayByLinkRef(refNr) {
  const refs = getUsedPayByLinkRefs();
  if (refs.includes(refNr)) return false;
  refs.push(refNr);
  localStorage.setItem(PBL_REFS_LS_KEY, JSON.stringify(refs.slice(-5000)));
  return true;
}

// ══════════════════════════════════════════════════════════════
// AMOUNT HELPER
// ══════════════════════════════════════════════════════════════
function amountToCents(amountStr) {
  const val = parseFloat(amountStr);
  if (isNaN(val)) return null;
  return Math.round(val * 100);
}

function initPayByLinkDefaults() {
  const input = document.getElementById('expirationDate');
  if (!input || input.value) return;
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  expires.setSeconds(0, 0);
  const local = new Date(expires.getTime() - expires.getTimezoneOffset() * 60000);
  input.value = local.toISOString().slice(0, 16);
}

function paramsToString(params) {
  return Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
}

async function buildPayByLinkRequest(merchantId, blowfishKey, innerParams, outerOptions = {}) {
  const innerPlain = paramsToString(innerParams);
  const innerLen = innerPlain.length;
  const innerData = await encryptClassicData(blowfishKey, innerPlain);
  const outerParams = { MerchantID: merchantId, Len: String(innerLen), Data: innerData };

  if (outerOptions.language) outerParams.Language = outerOptions.language;
  if (outerOptions.template) outerParams.Template = outerOptions.template;
  if (outerOptions.urlBack) outerParams.URLBack = outerOptions.urlBack;

  const outerPlain = paramsToString(outerParams);
  const outerLen = outerPlain.length;
  const outerData = await encryptClassicData(blowfishKey, outerPlain);
  const finalUrl = `https://www.computop-paygate.com/PayByLink.aspx?action=create&MerchantID=${encodeURIComponent(merchantId)}&Len=${outerLen}&Data=${outerData}`;

  return { innerPlain, innerLen, innerData, outerParams, outerPlain, outerLen, outerData, finalUrl };
}

async function buildClassicStatusRequest(merchantId, blowfishKey, lookup, paymentId, transactionId) {
  const params = { MerchantID: merchantId };
  let endpoint;
  if (lookup === 'paymentId') {
    params.PayID = paymentId;
    params.TransID = transactionId;
    endpoint = 'inquire.aspx';
  } else {
    params.TransID = transactionId;
    endpoint = 'inquire24.aspx';
  }
  const plain = paramsToString(params);
  const len = plain.length;
  const data = await encryptClassicData(blowfishKey, plain);
  const urlParams = { MerchantID: merchantId, Len: String(len), Data: data };
  const finalUrl = `https://www.computop-paygate.com/${endpoint}?MerchantID=${encodeURIComponent(merchantId)}&Len=${len}&Data=${data}`;
  return { lookup, endpoint, params, plain, len, data, urlParams, finalUrl };
}

// ══════════════════════════════════════════════════════════════
// BUILD PARAMETER STRING + PREVIEW
// ══════════════════════════════════════════════════════════════
const CUSTOMER_COUNTRIES = [
  { a2: 'DE', a3: 'DEU', de: 'Deutschland (DE)', en: 'Germany (DE)' },
  { a2: 'AT', a3: 'AUT', de: 'Österreich (AT)', en: 'Austria (AT)' },
  { a2: 'CH', a3: 'CHE', de: 'Schweiz (CH)', en: 'Switzerland (CH)' },
  { a2: 'FR', a3: 'FRA', de: 'Frankreich (FR)', en: 'France (FR)' },
  { a2: 'NL', a3: 'NLD', de: 'Niederlande (NL)', en: 'Netherlands (NL)' },
  { a2: 'GB', a3: 'GBR', de: 'Vereinigtes Königreich (GB)', en: 'United Kingdom (GB)' },
  { a2: 'US', a3: 'USA', de: 'USA (US)', en: 'USA (US)' }
];

const TEST_CUSTOMERS = [
  { salutation: 'Mr', firstName: 'Max', lastName: 'Mustermann', birthDate: '1985-04-12', street: 'Musterstrasse', streetNumber: '12', postalCode: '10115', city: 'Berlin', country: 'DE|DEU', phoneCountry: '49', phone: '3012345678' },
  { salutation: 'Mrs', firstName: 'Erika', lastName: 'Musterfrau', birthDate: '1990-09-23', street: 'Hauptstrasse', streetNumber: '48', postalCode: '80331', city: 'Muenchen', country: 'DE|DEU', phoneCountry: '49', phone: '8912345678' },
  { salutation: 'Miss', firstName: 'Anna', lastName: 'Schmidt', birthDate: '1994-01-18', street: 'Ringstrasse', streetNumber: '7', postalCode: '1010', city: 'Wien', country: 'AT|AUT', phoneCountry: '43', phone: '112345678' },
  { salutation: 'Mr', firstName: 'John', lastName: 'Doe', birthDate: '1988-06-05', street: 'Park Avenue', streetNumber: '270', postalCode: '10017', city: 'New York', country: 'US|USA', phoneCountry: '1', phone: '2125550199' }
];

function populateCustomerCountryOptions() {
  ['bill-country', 'ship-country'].forEach(id => {
    const select = document.getElementById(id);
    if (!select) return;
    const current = select.value || 'DE|DEU';
    select.innerHTML = CUSTOMER_COUNTRIES
      .map(country => `<option value="${country.a2}|${country.a3}">${country[currentLang] || country.de}</option>`)
      .join('');
    select.value = CUSTOMER_COUNTRIES.some(country => `${country.a2}|${country.a3}` === current) ? current : 'DE|DEU';
  });
}

function toggleCustomerMasterData() {
  const enabled = document.getElementById('customer-enabled')?.checked;
  document.getElementById('customer-master-body')?.classList.toggle('hidden', !enabled);
  updateCustomerCompatibilityUI();
}

function toggleShippingAddress() {
  const same = document.getElementById('shipping-same')?.checked !== false;
  document.getElementById('shipping-address-fields')?.classList.toggle('hidden', same);
}

function updateCustomerCompatibilityUI() {
  const warning = document.getElementById('customer-v2-warning');
  if (!warning) return;
  const enabled = document.getElementById('customer-enabled')?.checked;
  const isRestV2 = currentIntegration === 'rest' && document.getElementById('rest-version')?.value === 'v2';
  warning.style.display = enabled && isRestV2 ? 'block' : 'none';
}

function setCustomerField(id, value) {
  const element = document.getElementById(id);
  if (element) element.value = value || '';
}

function generateTestCustomer() {
  const sample = TEST_CUSTOMERS[Math.floor(Math.random() * TEST_CUSTOMERS.length)];
  const suffix = String(Math.floor(10000 + Math.random() * 90000));
  const localPart = `${sample.firstName}.${sample.lastName}.${suffix}`.toLowerCase().replace(/[^a-z0-9.]+/g, '.');
  document.getElementById('customer-enabled').checked = true;
  toggleCustomerMasterData();
  setCustomerField('cust-salutation', sample.salutation);
  setCustomerField('cust-first-name', sample.firstName);
  setCustomerField('cust-last-name', sample.lastName);
  setCustomerField('cust-birth-date', sample.birthDate);
  setCustomerField('cust-number', `CUST-${suffix}`);
  setCustomerField('cust-email', `${localPart}@example.test`);
  setCustomerField('cust-phone-country', sample.phoneCountry);
  setCustomerField('cust-phone-number', sample.phone);
  setCustomerField('bill-street', sample.street);
  setCustomerField('bill-street-number', sample.streetNumber);
  setCustomerField('bill-postal-code', sample.postalCode);
  setCustomerField('bill-city', sample.city);
  setCustomerField('bill-country', sample.country);
  document.getElementById('shipping-same').checked = true;
  toggleShippingAddress();
  ['ship-street', 'ship-street-number', 'ship-postal-code', 'ship-city'].forEach(id => setCustomerField(id, ''));
  setCustomerField('ship-country', sample.country);
  markPreviewStale();
  showToast(t('toast_customer_generated'), 'success');
}

function clearCustomerMasterData() {
  [
    'cust-salutation', 'cust-first-name', 'cust-last-name', 'cust-birth-date', 'cust-number', 'cust-email',
    'cust-phone-country', 'cust-phone-number', 'bill-street', 'bill-street-number', 'bill-postal-code',
    'bill-city', 'ship-street', 'ship-street-number', 'ship-postal-code', 'ship-city'
  ].forEach(id => setCustomerField(id, ''));
  setCustomerField('bill-country', 'DE|DEU');
  setCustomerField('ship-country', 'DE|DEU');
  const enabled = document.getElementById('customer-enabled');
  if (enabled) enabled.checked = false;
  const same = document.getElementById('shipping-same');
  if (same) same.checked = true;
  toggleCustomerMasterData();
  toggleShippingAddress();
  markPreviewStale();
  showToast(t('toast_customer_cleared'), 'info');
}

function initArticleList() {
  if (!document.querySelector('#article-list-items .article-item-card')) addArticleItem();
  document.getElementById('amount')?.addEventListener('input', updateArticleListSummary);
  updateArticleListVisibility();
}

function updateArticleListVisibility() {
  const section = document.getElementById('article-list-section');
  if (!section) return;
  const supported = currentUseCase === 'create-payment' && currentIntegration === 'classic' && currentMethod !== 'ccf';
  section.style.display = supported ? '' : 'none';
  updateArticleListSummary();
}

function toggleArticleList() {
  const enabled = document.getElementById('article-list-enabled')?.checked === true;
  if (enabled && !document.querySelector('#article-list-items .article-item-card')) addArticleItem();
  document.getElementById('article-list-body')?.classList.toggle('hidden', !enabled);
  updateArticleListSummary();
}

function addArticleItem(values = {}) {
  const template = document.getElementById('article-item-template');
  const container = document.getElementById('article-list-items');
  if (!template || !container) return;
  const card = template.content.firstElementChild.cloneNode(true);
  const index = container.children.length + 1;
  const defaults = {
    itemReference: String(index), id: `TEST-${index}`, description: t('article_default_description'),
    quantity: 1, amount: 0, totalAmount: 0, vatAmount: 0, vatPercent: 19,
    positionType: 'physical'
  };
  const item = { ...defaults, ...values };
  card.querySelectorAll('[data-field]').forEach(field => {
    field.value = item[field.dataset.field] ?? '';
    field.addEventListener('input', updateArticleListSummary);
    field.addEventListener('change', updateArticleListSummary);
  });
  container.appendChild(card);
  updateArticleItemLabels();
  updateArticleListSummary();
  markPreviewStale();
}

function removeArticleItem(button) {
  button?.closest('.article-item-card')?.remove();
  if (!document.querySelector('#article-list-items .article-item-card')) addArticleItem({ itemReference: '1', id: '', description: '', amount: '' });
  updateArticleItemLabels();
  updateArticleListSummary();
  markPreviewStale();
}

function updateArticleItemLabels() {
  document.querySelectorAll('#article-list-items .article-item-card').forEach((card, index) => {
    const title = card.querySelector('.article-item-title');
    if (title) title.textContent = `${t('article_item_title')} ${index + 1}`;
    const remove = card.querySelector('.article-item-remove');
    if (remove) remove.textContent = t('article_remove');
    const labels = {
      '.article-label-reference': 'article_item_reference', '.article-label-id': 'article_id',
      '.article-label-description': 'article_description', '.article-label-quantity': 'article_quantity',
      '.article-label-amount': 'article_amount', '.article-label-vat-amount': 'article_vat_amount',
      '.article-label-vat-percent': 'article_vat_percent', '.article-label-total-amount': 'article_total_amount',
      '.article-label-position-type': 'article_position_type'
    };
    Object.entries(labels).forEach(([selector, key]) => {
      const label = card.querySelector(selector);
      if (label) label.textContent = t(key);
    });
  });
  renderApiFieldNames();
}

function articleListTotalFromForm() {
  return Array.from(document.querySelectorAll('#article-list-items .article-item-card')).reduce((sum, card) => {
    const totalAmount = Number(card.querySelector('[data-field="totalAmount"]')?.value) || 0;
    return sum + totalAmount;
  }, 0);
}

function updateArticleListSummary() {
  const summary = document.getElementById('article-list-summary');
  if (!summary) return;
  const enabled = document.getElementById('article-list-enabled')?.checked === true;
  const klarnaSelected = document.getElementById('payTypes')?.value.toLowerCase() === 'klarna';
  if (!enabled) {
    summary.textContent = klarnaSelected ? t('article_summary_required') : '';
    summary.classList.toggle('mismatch', klarnaSelected);
    return;
  }
  const total = articleListTotalFromForm();
  const paymentAmount = amountToCents(document.getElementById('amount')?.value || '0');
  summary.textContent = t('article_summary').replace('{total}', (total / 100).toFixed(2)).replace('{amount}', (paymentAmount / 100).toFixed(2));
  summary.classList.toggle('mismatch', total !== paymentAmount);
}

function updateArticleRequirements() {
  updateArticleListSummary();
}

function updateCustomFieldsVisibility() {
  const section = document.getElementById('custom-fields-section');
  if (!section) return;
  const supported = currentUseCase === 'create-payment' && currentIntegration === 'classic' && currentMethod === 'hpp';
  section.style.display = supported ? '' : 'none';
}

function toggleCustomFields() {
  const enabled = document.getElementById('custom-fields-enabled')?.checked === true;
  document.getElementById('custom-fields-body')?.classList.toggle('hidden', !enabled);
}

function collectCustomFields() {
  if (currentIntegration !== 'classic' || currentMethod !== 'hpp' || document.getElementById('custom-fields-enabled')?.checked !== true) return {};
  const values = {};
  for (let index = 1; index <= 9; index += 1) {
    const value = document.getElementById(`custom-field-${index}`)?.value.trim() || '';
    if (value) values[`CustomField${index}`] = value;
  }
  return values;
}

const PAYMENT_PAGE_LOGO_URLS = Object.freeze({
  original: 'https://krebs3r.github.io/computop-tester/assets/payment-page/merchant-logo-original.png',
  nexi: 'https://krebs3r.github.io/computop-tester/assets/payment-page/merchant-logo-nexi.png'
});

function getPaymentPageLogoUrl(design = document.documentElement.dataset.design) {
  return PAYMENT_PAGE_LOGO_URLS[design] || PAYMENT_PAGE_LOGO_URLS.original;
}

function syncCustomFieldLogoForDesign(design) {
  const field = document.getElementById('custom-field-3');
  if (!field) return;
  const currentValue = field.value.trim();
  if (Object.values(PAYMENT_PAGE_LOGO_URLS).includes(currentValue)) {
    field.value = getPaymentPageLogoUrl(design);
  }
}

function generateCustomFieldExample() {
  const amount = document.getElementById('amount')?.value || '12.34';
  const currency = document.getElementById('currency')?.value || 'EUR';
  const examples = [
    `${amount.replace('.', ',')} ${currency}`,
    currentLang === 'en' ? 'Order details' : 'Bestelldetails',
    getPaymentPageLogoUrl(),
    '1 x Shoes, green|1 x Shoes, blue|1 x Shoes, black',
    'Company Ltd.|John Smith|Schwarzenbergstraße 2-4|96050 Bamberg',
    'Company Ltd.|John Smith|Schwarzenbergstraße 2-4|96050 Bamberg',
    'RG-Inv 123-2021',
    currentLang === 'en' ? 'Some Label' : 'Zusatzlabel',
    currentLang === 'en' ? 'Some Text' : 'Zusatztext'
  ];
  examples.forEach((value, index) => {
    const field = document.getElementById(`custom-field-${index + 1}`);
    if (field) field.value = value;
  });
  const enabled = document.getElementById('custom-fields-enabled');
  if (enabled) enabled.checked = true;
  toggleCustomFields();
  markPreviewStale();
  showToast(t('toast_custom_fields_example'), 'success');
}

function clearCustomFields() {
  for (let index = 1; index <= 9; index += 1) {
    const field = document.getElementById(`custom-field-${index}`);
    if (field) field.value = '';
  }
  const enabled = document.getElementById('custom-fields-enabled');
  if (enabled) enabled.checked = false;
  toggleCustomFields();
  markPreviewStale();
  showToast(t('toast_custom_fields_cleared'), 'info');
}

function generateTestArticleList() {
  const container = document.getElementById('article-list-items');
  if (!container) return;
  container.replaceChildren();
  const amount = amountToCents(document.getElementById('amount')?.value || '0');
  addArticleItem({
    itemReference: '1', id: 'TEST-1', description: t('article_default_description'),
    quantity: 1, amount, totalAmount: amount, vatAmount: Math.round(amount * 19 / 119), vatPercent: 19,
    positionType: 'physical'
  });
  const enabled = document.getElementById('article-list-enabled');
  if (enabled) enabled.checked = true;
  toggleArticleList();
  markPreviewStale();
  showToast(t('toast_article_generated'), 'success');
}

function clearArticleList() {
  const container = document.getElementById('article-list-items');
  if (container) container.replaceChildren();
  addArticleItem({ itemReference: '1', id: '', description: '', amount: '', totalAmount: '', vatAmount: '' });
  const enabled = document.getElementById('article-list-enabled');
  if (enabled) enabled.checked = false;
  toggleArticleList();
  markPreviewStale();
  showToast(t('toast_article_cleared'), 'info');
}

function collectArticleList(expectedAmount) {
  if (currentIntegration !== 'classic' || currentMethod === 'ccf') return null;
  const enabled = document.getElementById('article-list-enabled')?.checked === true;
  const klarnaSelected = document.getElementById('payTypes')?.value.toLowerCase() === 'klarna';
  if (!enabled) {
    if (klarnaSelected) throw new Error(t('val_article_required'));
    return null;
  }
  const orderLines = Array.from(document.querySelectorAll('#article-list-items .article-item-card')).map(card => {
    const value = name => card.querySelector(`[data-field="${name}"]`)?.value.trim() || '';
    const name = value('description');
    const quantity = Number(value('quantity'));
    const unitPrice = Number(value('amount'));
    const totalAmount = Number(value('totalAmount'));
    const vatAmountRaw = value('vatAmount');
    const vatPercentRaw = value('vatPercent');
    const type = value('positionType');
    if (!name || !type) throw new Error(t('val_article_fields'));
    if (!Number.isInteger(quantity) || quantity < 1) throw new Error(t('val_article_quantity'));
    if (!Number.isInteger(unitPrice) || unitPrice < 0 || !Number.isInteger(totalAmount)) throw new Error(t('val_article_amount'));
    const line = {
      name,
      quantity,
      unit_price: unitPrice,
      total_amount: totalAmount,
      type
    };
    const reference = value('itemReference');
    const gtin = value('id');
    if (reference) line.reference = reference;
    if (gtin) line.product_identifiers = { global_trade_item_number: gtin };
    if (vatPercentRaw || vatAmountRaw) {
      const vatPercent = Number(vatPercentRaw);
      const vatAmount = Number(vatAmountRaw);
      if (!Number.isFinite(vatPercent) || vatPercent < 0 || !Number.isInteger(vatAmount)) throw new Error(t('val_article_vat'));
      line.tax_rate = Math.round(vatPercent * 100);
      line.total_tax_amount = vatAmount;
    }
    return line;
  });
  if (!orderLines.length) throw new Error(t('val_article_fields'));
  const total = orderLines.reduce((sum, line) => sum + line.total_amount, 0);
  if (total !== expectedAmount) throw new Error(t('val_article_total').replace('{total}', String(total)).replace('{amount}', String(expectedAmount)));
  return { order_lines: orderLines };
}

function applyArticleListToClassicParams(params, articleList) {
  if (!articleList) return;
  params['MsgVer'] = '2.0';
  const encoded = base64EncodeUtf8(JSON.stringify(articleList));
  if (encoded.length > 2048) throw new Error(t('val_article_length'));
  params['ArticleList'] = encoded;
}

function applyArticleAddressDataToClassicParams(params, data) {
  const fallbackCountry = splitCustomerCountry(document.getElementById('bill-country')?.value).a2 || 'DE';
  params['bdCountryCode'] = data?.billingAddress?.countryA2 || fallbackCountry;
  if (!data) return;
  if (!data.contact.email) throw new Error(t('val_article_email'));
  const billing = data.billingAddress;
  params['bdFirstName'] = data.consumer.firstName;
  params['bdLastName'] = data.consumer.lastName;
  params['bdEmail'] = data.contact.email;
  params['bdStreet'] = `${billing.street} ${billing.streetNumber}`.trim();
  params['bdZip'] = billing.postalCode;
  params['bdCity'] = billing.city;
  if (!data.shippingSameAsBilling) {
    const shipping = data.shippingAddress;
    params['sdCountryCode'] = shipping.countryA2;
    params['sdFirstName'] = data.consumer.firstName;
    params['sdLastName'] = data.consumer.lastName;
    params['sdEmail'] = data.contact.email;
    params['sdStreet'] = `${shipping.street} ${shipping.streetNumber}`.trim();
    params['sdZip'] = shipping.postalCode;
    params['sdCity'] = shipping.city;
  }
}

function splitCustomerCountry(value) {
  const [a2 = '', a3 = ''] = (value || '').split('|');
  return { a2, a3 };
}

function customerAddressFromFields(prefix) {
  const country = splitCustomerCountry(document.getElementById(`${prefix}-country`)?.value);
  return {
    street: document.getElementById(`${prefix}-street`)?.value.trim() || '',
    streetNumber: document.getElementById(`${prefix}-street-number`)?.value.trim() || '',
    postalCode: document.getElementById(`${prefix}-postal-code`)?.value.trim() || '',
    city: document.getElementById(`${prefix}-city`)?.value.trim() || '',
    countryA2: country.a2,
    countryA3: country.a3
  };
}

function isAddressStarted(address) {
  return Boolean(address.street || address.streetNumber || address.postalCode || address.city);
}

function validateCustomerAddress(address) {
  if (!isAddressStarted(address)) return;
  if (!address.street || !address.postalCode || !address.city || !address.countryA2 || !address.countryA3) {
    throw new Error(t('val_customer_address'));
  }
}

function normaliseCustomerPhone(countryCode, subscriberNumber) {
  const country = String(countryCode || '').replace(/\D/g, '');
  const subscriber = String(subscriberNumber || '').replace(/\D/g, '');
  if (!country && !subscriber) return null;
  if (!country || !subscriber || country.length > 3 || subscriber.length > 15) {
    throw new Error(t('val_customer_phone'));
  }
  return { countryCode: country, subscriberNumber: subscriber };
}

function formatRestContactPhone(phone) {
  return phone ? `(+${phone.countryCode})${phone.subscriberNumber}` : '';
}

function collectCustomerMasterData() {
  if (!document.getElementById('customer-enabled')?.checked) return null;
  const firstName = document.getElementById('cust-first-name')?.value.trim() || '';
  const lastName = document.getElementById('cust-last-name')?.value.trim() || '';
  const email = document.getElementById('cust-email')?.value.trim() || '';
  const phoneCountry = document.getElementById('cust-phone-country')?.value.trim() || '';
  const phoneNumber = document.getElementById('cust-phone-number')?.value.trim() || '';
  const phone = normaliseCustomerPhone(phoneCountry, phoneNumber);
  if (!firstName || !lastName) throw new Error(t('val_customer_name'));
  if (!email && !phone) throw new Error(t('val_customer_contact'));

  const billingAddress = customerAddressFromFields('bill');
  const shippingSameAsBilling = document.getElementById('shipping-same')?.checked !== false;
  const shippingAddress = shippingSameAsBilling ? billingAddress : customerAddressFromFields('ship');
  validateCustomerAddress(billingAddress);
  validateCustomerAddress(shippingAddress);

  return {
    customerNumber: document.getElementById('cust-number')?.value.trim() || '',
    consumer: {
      salutation: document.getElementById('cust-salutation')?.value || '',
      firstName,
      lastName,
      birthDate: document.getElementById('cust-birth-date')?.value || ''
    },
    contact: {
      email,
      phone
    },
    billingAddress,
    shippingAddress,
    shippingSameAsBilling
  };
}

function pruneEmpty(value) {
  if (Array.isArray(value)) {
    const items = value.map(pruneEmpty).filter(item => item !== undefined);
    return items.length ? items : undefined;
  }
  if (value && typeof value === 'object') {
    const result = {};
    Object.entries(value).forEach(([key, nested]) => {
      const clean = pruneEmpty(nested);
      if (clean !== undefined) result[key] = clean;
    });
    return Object.keys(result).length ? result : undefined;
  }
  if (value === '' || value === null || value === undefined) return undefined;
  return value;
}

function restAddressFromCustomer(data, address) {
  return pruneEmpty({
    consumer: {
      salutation: data.consumer.salutation,
      firstName: data.consumer.firstName,
      lastName: data.consumer.lastName,
      birthDate: data.consumer.birthDate
    },
    addressInfo: {
      addressLine1: {
        street: address.street,
        streetNumber: address.streetNumber
      },
      postalCode: address.postalCode,
      city: address.city,
      country: {
        A2: address.countryA2,
        A3: address.countryA3
      }
    },
    contactInfo: {
      email: data.contact.email,
      phone: formatRestContactPhone(data.contact.phone)
    }
  });
}

function applyCustomerDataToRestPayload(payload, data, version) {
  if (!data) return;
  if (version === 'v2') throw new Error(t('val_customer_rest_v2'));
  payload.customerInfo = pruneEmpty({
    customerNumber: data.customerNumber,
    consumer: {
      salutation: data.consumer.salutation,
      firstName: data.consumer.firstName,
      lastName: data.consumer.lastName,
      birthdate: data.consumer.birthDate
    },
    email: data.contact.email,
    phone: data.contact.phone
  });
  const billing = restAddressFromCustomer(data, data.billingAddress);
  const shipping = restAddressFromCustomer(data, data.shippingAddress);
  if (billing) payload.billing = billing;
  if (shipping && (!data.shippingSameAsBilling || isAddressStarted(data.shippingAddress))) payload.shipping = shipping;
}

function base64EncodeUtf8(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  bytes.forEach(byte => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

function classicAddressFromCustomer(address) {
  if (!isAddressStarted(address)) return null;
  return pruneEmpty({
    city: address.city,
    country: { countryA3: address.countryA3 },
    addressLine1: {
      street: address.street,
      streetNumber: address.streetNumber
    },
    postalCode: address.postalCode
  });
}

function applyCustomerDataToClassicParams(params, data) {
  if (!data) return;
  params['MsgVer'] = '2.0';
  const customerJson = pruneEmpty({
    customerNumber: data.customerNumber,
    consumer: {
      salutation: data.consumer.salutation,
      firstName: data.consumer.firstName,
      lastName: data.consumer.lastName,
      birthDate: data.consumer.birthDate
    },
    email: data.contact.email,
    phone: data.contact.phone
  });
  const billingAddress = classicAddressFromCustomer(data.billingAddress);
  const shippingAddress = classicAddressFromCustomer(data.shippingAddress);
  if (customerJson) {
    const encoded = base64EncodeUtf8(JSON.stringify(customerJson));
    params['billToCustomer'] = encoded;
    if (!data.shippingSameAsBilling) params['shipToCustomer'] = encoded;
  }
  if (billingAddress) params['billingAddress'] = base64EncodeUtf8(JSON.stringify(billingAddress));
  if (shippingAddress && !data.shippingSameAsBilling) params['shippingAddress'] = base64EncodeUtf8(JSON.stringify(shippingAddress));
}

function buildRestPayload() {
  const amount = amountToCents(document.getElementById('amount').value);
  if (!amount || amount < 1) throw new Error(t('val_amount'));
  const transactionId = document.getElementById('transId').value.trim();
  const referenceNumber = document.getElementById('refNr').value.trim();
  const method = document.getElementById('rest-method').value;
  const orderDescSelect = document.getElementById('orderDesc').value;
  const orderDescription = orderDescSelect === '__custom__'
    ? document.getElementById('orderDescCustom').value.trim()
    : orderDescSelect;
  const urlSuccess = document.getElementById('urlSuccess').value.trim();
  const urlFailure = document.getElementById('urlFailure').value.trim();
  const urlNotify = document.getElementById('urlNotify').value.trim();
  const urlCancel = document.getElementById('urlBack').value.trim();
  if (!urlSuccess) throw new Error(t('val_url_success'));
  if (!urlFailure) throw new Error(t('val_url_failure'));

  const version = document.getElementById('rest-version').value;
  const customerData = collectCustomerMasterData();
  const methodConfig = {};
  const payType = document.getElementById('payTypes').value;
  const templateSelect = document.getElementById('template').value;
  const template = templateSelect === '__custom__'
    ? document.getElementById('template-custom').value.trim()
    : templateSelect;
  if (method !== 'cardForm' && payType) methodConfig.payTypes = [payType];
  if (template) methodConfig.template = template;

  if (version === 'v2') {
    const payload = {
      transId: transactionId,
      amount: {
        currency: document.getElementById('currency').value,
        value: amount
      },
      language: document.getElementById('language').value,
      partialPayment: false,
      captureMethod: { type: 'AUTOMATIC' },
      order: {
        merchantReference: referenceNumber || transactionId,
        description: orderDescription || 'Test payment'
      },
      urls: {
        return: urlSuccess,
        cancel: urlCancel || urlFailure,
        webhook: urlNotify || urlFailure
      },
      channel: method === 'payByLink' ? 'PAYBYLINK' : 'ECOM',
      metadata: {
        userData: referenceNumber || transactionId
      }
    };
    if (referenceNumber) payload.refNr = referenceNumber;
    if (template) payload.template = { name: template };
    const cardPayTypes = { CC: 'CARD', VISA: 'VISA', MasterCard: 'MASTERCARD', AMEX: 'AMEX' };
    if (method === 'cardForm') {
      payload.paymentMethods = {
        integrationType: 'HOSTED',
        type: 'CARD',
        card: {}
      };
      if (payType && payType !== 'CC') payload.paymentMethods.card.subType = [cardPayTypes[payType] || payType.toUpperCase()];
      if (template) payload.paymentMethods.card.template = { name: template };
      delete payload.template;
    } else if (payType) {
      const genericType = cardPayTypes[payType] || payType.toUpperCase();
      payload.allowedPaymentMethods = [method === 'payByLink' && genericType === 'CARD' ? 'CARDS' : genericType];
    }
    if (method === 'payByLink') payload.serviceType = 'LINK';
    if (method === 'payByLink') {
      const expiration = document.getElementById('expirationDate').value;
      if (!expiration) throw new Error(t('val_expiration'));
      payload.expirationTime = new Date(expiration).toISOString();
    }
    applyCustomerDataToRestPayload(payload, customerData, version);
    return payload;
  }

  const payload = {
    transactionId,
    amount: {
      currency: document.getElementById('currency').value,
      value: amount
    },
    language: document.getElementById('language').value,
    urls: {
      success: urlSuccess,
      failure: urlFailure
    },
    order: {
      id: referenceNumber || transactionId,
      description: [orderDescription || 'Test payment']
    },
    payment: {
      method,
      [method]: methodConfig
    },
    metadata: {
      userData: referenceNumber || transactionId
    }
  };
  if (referenceNumber) payload.referenceNumber = referenceNumber;
  if (urlNotify) payload.urls.notify = urlNotify;
  if (urlCancel) payload.urls.cancel = urlCancel;
  applyCustomerDataToRestPayload(payload, customerData, version);
  if (method === 'payByLink') {
    const expiration = document.getElementById('expirationDate').value;
    if (!expiration) throw new Error(t('val_expiration'));
    payload.expirationTime = new Date(expiration).toISOString();
  }
  return payload;
}

function restBaseUrl() {
  const host = document.getElementById('rest-environment').value === 'test'
    ? 'https://test.computop-paygate.com'
    : 'https://www.computop-paygate.com';
  return `${host}/api/${document.getElementById('rest-version').value}`;
}

function restPaymentUrl() {
  const base = restBaseUrl();
  if (document.getElementById('rest-version').value !== 'v2') return `${base}/payments`;
  const method = document.getElementById('rest-method').value;
  if (method === 'hostedPaymentPage') return `${base}/payments/sessions`;
  if (method === 'payByLink') return `${base}/payments/links`;
  return `${base}/payments`;
}

function restStatusUrl(lookup, identifier) {
  const encoded = encodeURIComponent(identifier);
  return lookup === 'paymentId'
    ? `${restBaseUrl()}/payments/${encoded}`
    : `${restBaseUrl()}/payments/transactions/${encoded}`;
}

function restCredentials() {
  const include = document.getElementById('rest-include-credentials').checked;
  return {
    include,
    merchantId: include ? document.getElementById('merchantId').value.trim() : '{{merchantId}}',
    apiKey: include ? document.getElementById('restApiKey').value : '{{apiKey}}'
  };
}

function buildCurlRequest(url, json, auth, credentials, idempotencyKey, httpMethod = 'POST') {
  const hasBody = httpMethod !== 'GET';
  const body = json.replace(/'/g, "'\\''");
  const idempotencyHeader = hasBody && url.includes('/api/v2/') ? ` \\
  --header 'Idempotency-Key: ${idempotencyKey}'` : '';
  const requestBody = hasBody ? ` \\
  --header 'Content-Type: application/json'${idempotencyHeader} \\
  --data '${body}'` : '';
  if (auth === 'basic') {
    return `curl --request ${httpMethod} \\
  --url '${url}' \\
  --user '${credentials.merchantId}:${credentials.apiKey}'${requestBody}`;
  }
  const tokenUrl = `${new URL(url).origin}/authorization/oauth/token`;
  return `ACCESS_TOKEN=$(curl --silent --request POST \\
  --url '${tokenUrl}' \\
  --header 'Content-Type: application/x-www-form-urlencoded' \\
  --data-urlencode 'grant_type=client_credentials' \\
  --data-urlencode 'client_id=${credentials.merchantId}' \\
  --data-urlencode 'client_secret=${credentials.apiKey}' | jq -r '.access_token')

curl --request ${httpMethod} \\
  --url '${url}' \\
  --header "Authorization: Bearer $ACCESS_TOKEN"${requestBody}`;
}

function buildPowerShellCurlRequest(url, json, auth, credentials, idempotencyKey, httpMethod = 'POST') {
  const hasBody = httpMethod !== 'GET';
  const quote = value => String(value).replace(/'/g, "''");
  const bodySetup = hasBody ? `$body = @'\n${json}\n'@\n\n` : '';
  const bodyArgs = hasBody
    ? ` \`\n  --header 'Content-Type: application/json'${url.includes('/api/v2/') ? ` \`\n  --header 'Idempotency-Key: ${quote(idempotencyKey)}'` : ''} \`\n  --data $body`
    : '';
  if (auth === 'basic') {
    return `${bodySetup}curl.exe --request ${httpMethod} \`\n  --url '${quote(url)}' \`\n  --user '${quote(credentials.merchantId)}:${quote(credentials.apiKey)}'${bodyArgs}`;
  }
  const tokenUrl = `${new URL(url).origin}/authorization/oauth/token`;
  return `$tokenResponse = curl.exe --silent --request POST \`\n  --url '${quote(tokenUrl)}' \`\n  --header 'Content-Type: application/x-www-form-urlencoded' \`\n  --data-urlencode 'grant_type=client_credentials' \`\n  --data-urlencode 'client_id=${quote(credentials.merchantId)}' \`\n  --data-urlencode 'client_secret=${quote(credentials.apiKey)}' | ConvertFrom-Json
$accessToken = $tokenResponse.access_token

${bodySetup}curl.exe --request ${httpMethod} \`\n  --url '${quote(url)}' \`\n  --header "Authorization: Bearer $accessToken"${bodyArgs}`;
}

function buildPowerShellRequest(url, json, auth, credentials, idempotencyKey, httpMethod = 'POST') {
  const hasBody = httpMethod !== 'GET';
  const body = `$body = @'\n${json}\n'@`;
  const extraHeader = hasBody && url.includes('/api/v2/') ? `; 'Idempotency-Key' = '${idempotencyKey}'` : '';
  const bodySetup = hasBody ? `${body}\n` : '';
  const bodyArgs = hasBody ? " -ContentType 'application/json' -Body $body" : '';
  const responseOutput = '$response | ConvertTo-Json -Depth 10';
  if (auth === 'basic') {
    return `$pair = '${credentials.merchantId}:${credentials.apiKey}'\n$basic = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes($pair))\n${bodySetup}$response = Invoke-RestMethod -Method ${httpMethod} -Uri '${url}' -Headers @{ Authorization = "Basic $basic"${extraHeader} }${bodyArgs}\n${responseOutput}`;
  }
  const tokenUrl = `${new URL(url).origin}/authorization/oauth/token`;
  return `$token = Invoke-RestMethod -Method Post -Uri '${tokenUrl}' -ContentType 'application/x-www-form-urlencoded' -Body @{ grant_type='client_credentials'; client_id='${credentials.merchantId}'; client_secret='${credentials.apiKey}' }\n${bodySetup}$response = Invoke-RestMethod -Method ${httpMethod} -Uri '${url}' -Headers @{ Authorization = "Bearer $($token.access_token)"${extraHeader} }${bodyArgs}\n${responseOutput}`;
}

function buildPostmanCollection(url, payload, auth, credentials, idempotencyKey, httpMethod = 'POST') {
  const hasBody = httpMethod !== 'GET';
  const parsed = new URL(url);
  const paymentsIndex = parsed.pathname.indexOf('/payments');
  const apiBasePath = paymentsIndex >= 0 ? parsed.pathname.slice(0, paymentsIndex) : parsed.pathname;
  const endpointPath = paymentsIndex >= 0 ? parsed.pathname.slice(paymentsIndex) : parsed.pathname;
  const collection = {
    info: { name: hasBody ? 'Paygate REST Payment Request' : 'Paygate REST Status Inquiry', schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json' },
    variable: [
      { key: 'baseUrl', value: `${parsed.protocol}//${parsed.host}${apiBasePath}` },
      { key: 'merchantId', value: credentials.merchantId },
      { key: 'apiKey', value: credentials.apiKey },
      { key: 'accessToken', value: '{{accessToken}}' }
    ],
    item: [{
      name: hasBody ? 'Create payment' : 'Get payment status',
      request: {
        method: httpMethod,
        header: hasBody ? [
          { key: 'Content-Type', value: 'application/json' },
          ...(url.includes('/api/v2/') ? [{ key: 'Idempotency-Key', value: idempotencyKey }] : [])
        ] : [],
        ...(hasBody ? { body: { mode: 'raw', raw: JSON.stringify(payload, null, 2), options: { raw: { language: 'json' } } } } : {}),
        url: { raw: `{{baseUrl}}${endpointPath}` },
        auth: auth === 'basic'
          ? { type: 'basic', basic: [{ key: 'username', value: '{{merchantId}}', type: 'string' }, { key: 'password', value: '{{apiKey}}', type: 'string' }] }
          : { type: 'bearer', bearer: [{ key: 'token', value: '{{accessToken}}', type: 'string' }] }
      }
    }]
  };
  return JSON.stringify(collection, null, 2);
}

function buildRawHttpRequest(url, json, auth, credentials, idempotencyKey, httpMethod = 'POST') {
  const hasBody = httpMethod !== 'GET';
  const parsed = new URL(url);
  const authorization = auth === 'basic'
    ? `Basic ${credentials.include ? btoa(`${credentials.merchantId}:${credentials.apiKey}`) : '{{base64MerchantIdAndApiKey}}'}`
    : 'Bearer {{accessToken}}';
  const idempotencyHeader = hasBody && url.includes('/api/v2/') ? `\nIdempotency-Key: ${idempotencyKey}` : '';
  const bodySection = hasBody ? `\nContent-Type: application/json${idempotencyHeader}\nContent-Length: ${new TextEncoder().encode(json).length}\n\n${json}` : '';
  return `${httpMethod} ${parsed.pathname} HTTP/1.1\nHost: ${parsed.host}\nAuthorization: ${authorization}${bodySection}`;
}

function renderSyntaxTokens(element, source, pattern, classify) {
  clearElement(element);
  let cursor = 0;
  for (const match of source.matchAll(pattern)) {
    if (match.index > cursor) element.appendChild(document.createTextNode(source.slice(cursor, match.index)));
    const token = match[0];
    const className = classify(token, match);
    if (className) appendTextElement(element, 'span', className, token);
    else element.appendChild(document.createTextNode(token));
    cursor = match.index + token.length;
  }
  if (cursor < source.length) element.appendChild(document.createTextNode(source.slice(cursor)));
  element.dataset.raw = source;
}

function renderJsonSyntax(element, json) {
  const pattern = /("(?:\\.|[^"\\])*")(?=\s*:)|("(?:\\.|[^"\\])*")|-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b(?:true|false|null)\b/g;
  renderSyntaxTokens(element, json, pattern, (token, match) => {
    if (match[1]) return 'syntax-key';
    if (match[2]) return 'syntax-string';
    if (/^(true|false|null)$/.test(token)) return 'syntax-literal';
    return 'syntax-number';
  });
}

function renderCommandSyntax(element, source, tool) {
  if (tool === 'postman') {
    renderJsonSyntax(element, source);
    return;
  }
  const pattern = /https?:\/\/[^\s'"}]+|\{\{[^}]+\}\}|\$\([^\n]+?\)|\$[A-Za-z_][\w.]*(?:\.[\w]+)*|--[\w-]+|-[A-Z][A-Za-z]*|'(?:[^']|'')*'|"(?:\\.|[^"\\])*"|\b(?:curl(?:\.exe)?|jq|Invoke-RestMethod|ConvertFrom-Json|ConvertTo-Json|POST|GET|PUT|PATCH|DELETE|HTTP\/1\.1)\b|^(?:Host|Authorization|Content-Type|Content-Length)(?=:)/gm;
  renderSyntaxTokens(element, source, pattern, token => {
    if (/^https?:\/\//.test(token)) return 'syntax-url';
    if (/^\{\{/.test(token) || /^\$/.test(token)) return 'syntax-variable';
    if (/^--/.test(token) || /^-[A-Z]/.test(token)) return 'syntax-option';
    if (/^['"]/.test(token)) return 'syntax-string';
    if (/^(Host|Authorization|Content-Type|Content-Length)$/.test(token)) return 'syntax-header';
    return 'syntax-command';
  });
}

async function buildRestPreview() {
  try {
    const isStatus = currentUseCase === 'payment-status';
    const lookup = document.getElementById('status-lookup')?.value || 'paymentId';
    const identifier = lookup === 'paymentId'
      ? document.getElementById('status-payment-id')?.value.trim()
      : document.getElementById('status-transaction-id')?.value.trim();
    if (isStatus && !identifier) throw new Error(t(lookup === 'paymentId' ? 'val_status_payment_id' : 'val_status_transaction_id'));
    const payload = isStatus ? null : buildRestPayload();
    const json = payload ? JSON.stringify(payload, null, 2) : '';
    const url = isStatus ? restStatusUrl(lookup, identifier) : restPaymentUrl();
    const httpMethod = isStatus ? 'GET' : 'POST';
    const auth = document.getElementById('rest-auth').value;
    const credentials = restCredentials();
    if (credentials.include && (!credentials.merchantId || !credentials.apiKey)) {
      throw new Error(t('rest_credentials_required'));
    }
    const tool = document.getElementById('rest-tool').value;
    const idempotencyKey = payload?.transId || payload?.transactionId || identifier;
    const builders = {
      curl: () => buildCurlRequest(url, json, auth, credentials, idempotencyKey, httpMethod),
      'curl-powershell': () => buildPowerShellCurlRequest(url, json, auth, credentials, idempotencyKey, httpMethod),
      powershell: () => buildPowerShellRequest(url, json, auth, credentials, idempotencyKey, httpMethod),
      postman: () => buildPostmanCollection(url, payload, auth, credentials, idempotencyKey, httpMethod),
      http: () => buildRawHttpRequest(url, json, auth, credentials, idempotencyKey, httpMethod)
    };
    const help = currentLang === 'en' ? {
      curl: '<strong>Bash output:</strong> Do not paste this into PowerShell because <code>\\</code> is not a PowerShell line continuation. Select the PowerShell output format instead, or run it in Bash, WSL, Git Bash, macOS or Linux. It can also be imported into Postman using <code>Import → Raw text</code>. The OAuth2 variant requires <code>jq</code>.',
      'curl-powershell': 'Run the complete block in PowerShell. It explicitly calls <code>curl.exe</code>, uses PowerShell line continuations and passes the JSON body as a here-string.',
      powershell: 'Run in a PowerShell session. The JSON body is passed as a here-string, and the response is rendered as JSON with sufficient depth so nested link objects remain visible.',
      postman: 'Save with the <code>.postman_collection.json</code> extension or paste into <code>Import → Raw text</code>. Variables can then be maintained in a private environment.',
      http: 'For REST clients and IDE files such as <code>.http</code>. Replace placeholders before execution.'
    } : {
      curl: '<strong>Bash-Ausgabe:</strong> Nicht in PowerShell einfügen, weil <code>\\</code> dort keine Zeilenfortsetzung ist. Stattdessen das Ausgabeformat PowerShell wählen oder den Befehl in Bash, WSL, Git Bash, macOS oder Linux ausführen. Alternativ über <code>Import → Raw text</code> in Postman importieren. Für OAuth2 wird <code>jq</code> benötigt.',
      'curl-powershell': 'Den vollständigen Block in PowerShell ausführen. Er ruft ausdrücklich <code>curl.exe</code> auf, verwendet PowerShell-Zeilenfortsetzungen und übergibt den JSON-Body als Here-String.',
      powershell: 'In einer PowerShell-Sitzung ausführen. Der JSON-Body wird als Here-String übergeben; die Antwort wird mit ausreichender Tiefe als JSON ausgegeben, damit verschachtelte Link-Objekte sichtbar bleiben.',
      postman: 'Als Datei mit Endung <code>.postman_collection.json</code> speichern oder in Postman über <code>Import → Raw text</code> einfügen. Variablen können anschließend in einer privaten Environment gepflegt werden.',
      http: 'Für REST-Clients und IDE-Dateien wie <code>.http</code>. Platzhalter vor der Ausführung ersetzen.'
    };
    const jsonBlock = document.getElementById('rest-json-block');
    const testDataHelp = document.getElementById('rest-test-data-help');
    if (jsonBlock) jsonBlock.style.display = isStatus ? 'none' : 'block';
    if (testDataHelp) testDataHelp.style.display = isStatus ? 'none' : 'block';
    if (!isStatus) {
      renderJsonSyntax(document.getElementById('rest-json-output'), json);
      renderRestDerivedParameterPreview(payload);
    } else {
      _renderDerivedParameterItems('rest-derived-parameters-section', 'rest-derived-parameters-list', []);
    }
    renderCommandSyntax(document.getElementById('rest-code-output'), builders[tool](), tool);
    document.getElementById('rest-tool-help').innerHTML = help[tool];
    document.getElementById('card-preview').classList.remove('collapsed');
    document.getElementById('preview-empty-hint').style.display = 'none';
    document.getElementById('debug-section').style.display = 'none';
    document.getElementById('rest-debug-section').style.display = 'block';
    markPreviewFresh();
    if (isStatus) {
      await _saveLogEntry({
        merchantId: credentials.include ? credentials.merchantId : '',
        transId: lookup === 'transactionId' ? identifier : '',
        paymentId: lookup === 'paymentId' ? identifier : '',
        useCase: 'payment-status',
        integration: 'rest',
        lookup,
        url
      });
      await renderLog();
    }
    document.getElementById('rest-debug-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast(t(isStatus ? 'toast_status_preview_done' : 'toast_rest_preview_done'), 'success');
  } catch (error) {
    showToast(t('toast_err') + error.message, 'error');
  }
}

async function buildClassicStatusPreview() {
  try {
    _renderDerivedParameterItems('derived-parameters-section', 'derived-parameters-list', []);
    const credentials = classicCredentialsForPreview();
    const { merchantId, blowfishKey, isDemo } = credentials;
    const lookup = document.getElementById('status-lookup').value;
    const paymentId = document.getElementById('status-payment-id').value.trim();
    const transactionId = document.getElementById('status-transaction-id').value.trim();
    if (!merchantId) throw new Error(t('val_mid'));
    if (!blowfishKey) throw new Error(t('val_bf'));
    if (lookup === 'paymentId' && !paymentId) throw new Error(t('val_status_payment_id'));
    if (!transactionId) throw new Error(t('val_status_transaction_id'));

    const request = await buildClassicStatusRequest(merchantId, blowfishKey, lookup, paymentId, transactionId);
    document.getElementById('card-preview').classList.remove('collapsed');
    document.getElementById('preview-empty-hint').style.display = 'none';
    document.getElementById('rest-debug-section').style.display = 'none';
    document.getElementById('debug-section').style.display = 'block';
    markPreviewFresh();
    document.querySelectorAll('.payment-preview-only').forEach(element => { element.style.display = 'none'; });
    const statusSubmitRow = document.getElementById('classic-status-submit-row');
    const statusSubmitButton = document.getElementById('btn-status-submit');
    if (statusSubmitRow) statusSubmitRow.style.display = 'flex';
    if (statusSubmitButton) statusSubmitButton.dataset.url = request.finalUrl;
    setClassicDemoPreviewState(isDemo, statusSubmitButton);
    document.getElementById('pbl-outer-section').style.display = 'none';

    const plainParamsEl = document.getElementById('plain-params');
    renderParamLines(plainParamsEl, Object.entries(request.params), () => 'val');
    plainParamsEl.dataset.raw = request.plain;
    renderEncryptedDataPreview(request.data);
    const urlParamsEl = document.getElementById('url-params');
    renderParamLines(urlParamsEl, Object.entries(request.urlParams).map(([key, value]) => [key, key === 'Data' ? value.substring(0, 80) + '…' : value]), () => 'val');
    urlParamsEl.dataset.raw = paramsToString(request.urlParams);
    document.getElementById('full-url').textContent = request.finalUrl;
    document.getElementById('full-url').dataset.raw = request.finalUrl;

    if (!isDemo) await _saveLogEntry({
      merchantId,
      transId: transactionId,
      paymentId,
      useCase: 'payment-status',
      integration: 'classic',
      encryption: currentClassicEncryption,
      lookup,
      url: request.finalUrl
    });
    if (!isDemo) await renderLog();
    showToast(isDemo ? t('classic_demo_preview_done') + t('toast_status_preview_done') : t('toast_status_preview_done'), 'success');
    document.getElementById('debug-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } catch (error) {
    showToast(t('toast_err') + error.message, 'error');
  }
}

async function buildAndPreview() {
  if (currentIntegration === 'rest') {
    await buildRestPreview();
    return;
  }
  if (currentUseCase === 'payment-status') {
    await buildClassicStatusPreview();
    return;
  }
  const btn = document.getElementById('btn-preview');
  btn.disabled = true;
  btn.innerHTML = '<span class="icon icon-md"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="spin-icon"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg></span> ' + t('btn_preview_loading');

  try {
    const credentials = classicCredentialsForPreview();
    const { merchantId, blowfishKey, hmacKey, isDemo } = credentials;
    const transId     = document.getElementById('transId').value.trim();
    let refNr         = document.getElementById('refNr').value.trim();
    const expirationRaw = document.getElementById('expirationDate').value.trim();
    const expirationDate = expirationRaw
      ? expirationRaw.replace('T', ' ') + (expirationRaw.length === 16 ? ':00' : '')
      : '';
    const amountRaw   = document.getElementById('amount').value;
    const currency    = document.getElementById('currency').value;
    const urlSuccess  = document.getElementById('urlSuccess').value.trim();
    const urlFailure  = document.getElementById('urlFailure').value.trim();
    const urlNotify   = document.getElementById('urlNotify').value.trim();
    const orderDescSel = document.getElementById('orderDesc').value;
    const orderDesc = orderDescSel === '__custom__'
      ? document.getElementById('orderDescCustom').value.trim()
      : orderDescSel;
    const language    = document.getElementById('language').value;
    const payTypes    = document.getElementById('payTypes').value;
    const customFields = collectCustomFields();

    // Validation
    if (!merchantId) { showToast(t('val_mid'), 'error'); return; }
    if (!blowfishKey) { showToast(t('val_bf'), 'error'); return; }
    if (!hmacKey) { showToast(t('val_hmac'), 'error'); return; }
    if (!urlSuccess) { showToast(t('val_url_success'), 'error'); return; }
    if (!urlFailure) { showToast(t('val_url_failure'), 'error'); return; }
    if (!urlNotify) { showToast(t('val_url_notify'), 'error'); return; }
    if (currentMethod === 'pbl' && (!refNr || isPayByLinkRefUsed(refNr))) {
      refNr = generatePayByLinkRef();
    }
    if (currentMethod === 'pbl' && !refNr) { showToast(t('val_refnr_pbl'), 'error'); return; }
    if (currentMethod === 'pbl' && !expirationDate) { showToast(t('val_expiration'), 'error'); return; }

    const amount = amountToCents(amountRaw);
    if (!amount || amount < 1) { showToast(t('val_amount'), 'error'); return; }
    const customerData = collectCustomerMasterData();
    const articleList = collectArticleList(amount);

    // Build MAC message: PayID*TransID*MerchantID*Amount*Currency
    // PayID is empty for the initial request → leading asterisk required (see Paygate docs)
    const macMsg = `*${transId}*${merchantId}*${amount}*${currency}`;
    const mac = await hmacSha256(hmacKey, macMsg);

    // Build plaintext parameter string
    const params = {};
    params['MerchantID']  = merchantId;
    params['TransID']     = transId;
    if (currentMethod === 'pbl') params['MsgVer'] = '2.0';
    if (refNr) params['RefNr'] = refNr;
    params['Amount']      = String(amount);
    params['Currency']    = currency;
    params['URLSuccess']  = urlSuccess;
    params['URLFailure']  = urlFailure;
    if (urlNotify) params['URLNotify'] = urlNotify;
    params['OrderDesc']   = orderDesc || 'Testzahlung';
    if (currentMethod !== 'pbl') params['Response'] = 'encrypt';
    params['MAC']         = mac;
    if (payTypes && currentMethod !== 'ccf') params['PayTypes'] = payTypes;
    if (currentMethod === 'pbl') {
      params['Language'] = language;
      params['ExpirationDate'] = expirationDate;
    }
    applyCustomerDataToClassicParams(params, customerData);
    if (articleList) applyArticleAddressDataToClassicParams(params, customerData);
    applyArticleListToClassicParams(params, articleList);
    renderClassicDerivedParameterPreview(params);

    const tmplSel = document.getElementById('template')?.value || '';
    const tmpl = tmplSel === '__custom__'
      ? (document.getElementById('template-custom')?.value.trim() || '')
      : tmplSel;

    // payssl.aspx: Template muss verschlüsselt im Data-String stehen
    if (tmpl && currentMethod === 'ccf') params['Template'] = tmpl;

    const urlBack = document.getElementById('urlBack').value.trim();
    let plainStr = paramsToString(params);
    let len = plainStr.length;
    let dataHex = await encryptClassicData(blowfishKey, plainStr);
    let pblRequest = null;
    let finalUrl;

    if (currentMethod === 'pbl') {
      pblRequest = await buildPayByLinkRequest(merchantId, blowfishKey, params, { language, template: tmpl, urlBack });
      plainStr = pblRequest.innerPlain;
      len = pblRequest.outerLen;
      dataHex = pblRequest.outerData;
      finalUrl = pblRequest.finalUrl;
      if (!isDemo && !reservePayByLinkRef(refNr)) throw new Error(t('pbl_ref_generation_error'));
    } else {
      const base = currentMethod === 'ccf'
        ? 'https://www.computop-paygate.com/payssl.aspx'
        : 'https://www.computop-paygate.com/paymentPage.aspx';
      finalUrl = `${base}?MerchantID=${encodeURIComponent(merchantId)}&Len=${len}&Data=${dataHex}&Language=${language}`;
      if (urlBack) finalUrl += `&URLBack=${encodeURIComponent(urlBack)}`;
      if (tmpl && currentMethod === 'hpp') finalUrl += `&Template=${encodeURIComponent(tmpl)}`;
      Object.entries(customFields).forEach(([key, value]) => {
        finalUrl += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      });
    }

    // Show debug — expand card if collapsed
    document.getElementById('card-preview').classList.remove('collapsed');
    const emptyHint = document.getElementById('preview-empty-hint');
    if (emptyHint) emptyHint.style.display = 'none';
    document.getElementById('debug-section').style.display = 'block';
    document.querySelectorAll('.payment-preview-only').forEach(element => { element.style.display = ''; });
    markPreviewFresh();
    const statusSubmitRow = document.getElementById('classic-status-submit-row');
    if (statusSubmitRow) statusSubmitRow.style.display = 'none';
    setClassicDemoPreviewState(isDemo, document.getElementById('btn-submit'));

    // URL-Parameter (unverschlüsselt) sammeln
    const urlParams = {};
    if (currentMethod === 'pbl') urlParams['action'] = 'create';
    urlParams['MerchantID'] = merchantId;
    urlParams['Len'] = String(len);
    urlParams['Data'] = dataHex;
    if (currentMethod !== 'pbl') {
      urlParams['Language'] = language;
      if (urlBack) urlParams['URLBack'] = urlBack;
      if (tmpl && currentMethod === 'hpp') urlParams['Template'] = tmpl;
      Object.assign(urlParams, customFields);
    }

    const urlParamsRaw = Object.entries(urlParams).map(([k, v]) => `${k}=${v}`).join('&');
    const urlParamsEl = document.getElementById('url-params');
    renderParamLines(
      urlParamsEl,
      Object.entries(urlParams).map(([k, v]) => [k, k === 'Data' && v.length > 80 ? v.substring(0, 80) + '…' : v]),
      () => 'val'
    );
    urlParamsEl.dataset.raw = urlParamsRaw;

    // Color-coded plain params
    const plainParamsEl = document.getElementById('plain-params');
    renderParamLines(plainParamsEl, Object.entries(params), k => k === 'MAC' ? 'enc' : 'val');
    plainParamsEl.dataset.raw = plainStr;
    renderEncryptedDataPreview(dataHex);

    const pblOuterSection = document.getElementById('pbl-outer-section');
    const pblOuterEl = document.getElementById('pbl-outer-params');
    pblOuterSection.style.display = pblRequest ? 'block' : 'none';
    if (pblRequest) {
      renderParamLines(
        pblOuterEl,
        Object.entries(pblRequest.outerParams).map(([k, v]) => [k, k === 'Data' && v.length > 80 ? v.substring(0, 80) + '…' : v]),
        () => 'val'
      );
      pblOuterEl.dataset.raw = pblRequest.outerPlain;
    } else {
      pblOuterEl.dataset.raw = '';
    }

    // URL preview (truncated for display)
    const urlDisplay = finalUrl.length > 500
      ? finalUrl.substring(0, 500) + '…[' + (finalUrl.length - 500) + ' weitere Zeichen]'
      : finalUrl;
    document.getElementById('full-url').textContent = finalUrl;
    document.getElementById('full-url').dataset.raw = finalUrl;

    // Store for submit
    document.getElementById('btn-submit').dataset.url = finalUrl;

    // Save to request log
    if (!isDemo) {
      await _saveLogEntry({ merchantId, transId, amount, currency, paymentMethod: payTypes, integration: 'classic', encryption: currentClassicEncryption, url: finalUrl });
      await renderLog();
    }

    showToast(`${isDemo ? t('classic_demo_preview_done') : t('toast_preview_done')}${len} · Data=${classicDataByteLength(dataHex)} Bytes`, 'success');

    // Scroll to preview
    document.getElementById('debug-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  } catch(e) {
    console.error(e);
    showToast(t('toast_err') + e.message, 'error');
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<span class="icon icon-md"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></span> ' + t('btn_preview');
  }
}

function submitPayment() {
  if (previewState.isStale) { showToast(t('toast_preview_stale'), 'error'); return; }
  if (blockClassicDemoExecution(document.getElementById('btn-submit'))) return;
  const url = document.getElementById('btn-submit').dataset.url;
  if (!url) { showToast(t('toast_no_url'), 'error'); return; }
  if (isStandaloneApp() && currentMethod !== 'pbl') {
    localStorage.setItem(PAYMENT_PENDING_KEY, JSON.stringify({ createdAt: Date.now() }));
  }
  showToast(t('toast_submit'), 'info');
  window.open(url, '_blank', 'noopener,noreferrer');
}

function submitClassicStatus() {
  if (previewState.isStale) { showToast(t('toast_preview_stale'), 'error'); return; }
  if (blockClassicDemoExecution(document.getElementById('btn-status-submit'))) return;
  const url = document.getElementById('btn-status-submit')?.dataset.url;
  if (!url) { showToast(t('toast_no_url'), 'error'); return; }
  showToast(t('toast_status_submit'), 'info');
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ── Embedded PaySSL form (opt-in) ──
// Paygate sends `frame-ancestors https: http:`, so the credit card form may
// be framed from an http(s) origin. file:// has a null origin and is blocked
// there. The tester still shows a placeholder on file:// for debugging.
function embeddedFormAvailable() {
  return currentMethod === 'ccf';
}

function embeddedFormCanFrame() {
  return embeddedFormAvailable() && window.location.protocol !== 'file:';
}

function updateEmbedButtonVisibility() {
  const btn = document.getElementById('btn-submit-embed');
  if (btn) btn.style.display = embeddedFormAvailable() ? '' : 'none';
  if (!embeddedFormAvailable()) closeEmbeddedForm();
}

function submitPaymentEmbedded() {
  if (previewState.isStale) { showToast(t('toast_preview_stale'), 'error'); return; }
  if (blockClassicDemoExecution(document.getElementById('btn-submit'))) return;
  const url = document.getElementById('btn-submit').dataset.url;
  if (!url) { showToast(t('toast_no_url'), 'error'); return; }
  const card = document.getElementById('card-embedded-form');
  const frame = document.getElementById('embedded-form-frame');
  const placeholder = document.getElementById('embedded-form-placeholder');
  const canFrame = embeddedFormCanFrame();
  if (!card || !frame || !placeholder) return;
  frame.style.display = canFrame ? '' : 'none';
  placeholder.style.display = canFrame ? 'none' : '';
  if (canFrame) {
    frame.src = url;
  } else {
    frame.src = 'about:blank';
    placeholder.innerHTML = t('embedded_form_file_placeholder');
  }
  card.style.display = '';
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeEmbeddedForm() {
  const card = document.getElementById('card-embedded-form');
  const frame = document.getElementById('embedded-form-frame');
  const placeholder = document.getElementById('embedded-form-placeholder');
  if (!card || card.style.display === 'none') return;
  if (frame) frame.src = 'about:blank';
  if (placeholder) placeholder.style.display = 'none';
  if (frame) frame.style.display = '';
  card.style.display = 'none';
}

// ── Request URL as QR code (scan to continue on a phone) ──
function showRequestQr() {
  if (previewState.isStale) { showToast(t('toast_preview_stale'), 'error'); return; }
  if (blockClassicDemoExecution(document.getElementById('btn-submit'))) return;
  const url = document.getElementById('btn-submit')?.dataset.url;
  if (!url) { showToast(t('toast_no_url'), 'error'); return; }
  if (typeof qrcode !== 'function') { showToast(t('err_qr_failed'), 'error'); return; }
  const container = document.getElementById('qr-modal-code');
  const modal = document.getElementById('qr-modal');
  const fallback = document.getElementById('qr-modal-fallback');
  const fallbackUrl = document.getElementById('qr-modal-url');
  if (!container || !modal) return;
  if (fallback) fallback.style.display = 'none';
  if (fallbackUrl) fallbackUrl.value = '';
  container.style.display = 'grid';
  container.innerHTML = '';
  let svgTag = '';
  let moduleCount = 0;
  // Long Data parameters can exceed a level's capacity; retry with lower ECC.
  for (const eccLevel of ['M', 'L']) {
    try {
      const qr = qrcode(0, eccLevel);
      qr.addData(url);
      qr.make();
      moduleCount = qr.getModuleCount();
      svgTag = qr.createSvgTag({ cellSize: 4, margin: 4, scalable: true });
      break;
    } catch (_) { /* try next level */ }
  }
  if (!svgTag) {
    container.style.display = 'none';
    if (fallback) fallback.style.display = '';
    if (fallbackUrl) fallbackUrl.value = url;
    const denseHint = document.getElementById('qr-modal-dense-hint');
    if (denseHint) {
      denseHint.textContent = t('qr_modal_too_long_hint');
      denseHint.style.display = '';
    }
    modal.classList.add('open');
    document.body.classList.add('modal-open');
    return;
  }
  container.innerHTML = svgTag;
  const svg = container.querySelector('svg');
  if (svg) {
    svg.style.width = 'min(400px, 100%)';
    svg.style.height = 'auto';
    svg.setAttribute('role', 'img');
  }
  // From roughly version 27 (~125 modules) on-screen scanning gets finicky.
  const denseHint = document.getElementById('qr-modal-dense-hint');
  if (denseHint) {
    denseHint.textContent = t('qr_modal_dense_hint');
    denseHint.style.display = moduleCount >= 125 ? '' : 'none';
  }
  modal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeQrModal() {
  const modal = document.getElementById('qr-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  const container = document.getElementById('qr-modal-code');
  if (container) container.innerHTML = '';
  const fallback = document.getElementById('qr-modal-fallback');
  const fallbackUrl = document.getElementById('qr-modal-url');
  if (fallback) fallback.style.display = 'none';
  if (fallbackUrl) fallbackUrl.value = '';
}

function initQrModal() {
  const modal = document.getElementById('qr-modal');
  const close = document.getElementById('qr-modal-close');
  if (!modal || !close) return;
  close.addEventListener('click', closeQrModal);
  modal.addEventListener('click', event => {
    if (event.target === modal) closeQrModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeQrModal();
  });
}

// ══════════════════════════════════════════════════════════════
// CREDENTIAL STORAGE — AES-GCM via Web Crypto API
// ══════════════════════════════════════════════════════════════
const CRED_LS_KEY     = 'computop_credentials_enc'; // kept for migration
const PROFILES_LS_KEY = 'computop_profiles';
const LAST_PROFILE_KEY = 'computop_last_profile';
const CRED_KDF_LS_KEY  = 'computop_cred_kdf';
const CRED_PASSPHRASE  = 'computop-tester-v1-local-storage';
const CLEAR_ALL_SCROLL_RESET_KEY = 'computop_clear_all_scroll_reset';

// With an optional user-defined master password the AES key is no longer
// derivable from the public source code. The passphrase lives in memory only.
let credMasterPassphrase = null;

function _credKdfMode() {
  return localStorage.getItem(CRED_KDF_LS_KEY) === 'password' ? 'password' : 'static';
}

function _credLocked() {
  return _credKdfMode() === 'password' && !credMasterPassphrase;
}

function _activePassphrase() {
  if (_credKdfMode() === 'password') {
    if (!credMasterPassphrase) throw new Error(t('err_master_locked'));
    return credMasterPassphrase;
  }
  return CRED_PASSPHRASE;
}

function updateCredentialLockUI() {
  const locked = _credLocked();
  const card = document.getElementById('card-creds');
  const overlay = document.getElementById('credential-lock-overlay');
  const input = document.getElementById('credential-lock-input');
  card?.classList.toggle('is-credential-locked', locked);
  if (locked) card?.classList.remove('collapsed');
  overlay?.setAttribute('aria-hidden', String(!locked));
  if (!locked && input) input.value = '';
}

function updateMasterPasswordRecommendation() {
  const panel = document.getElementById('master-password-recommendation');
  if (!panel) return;
  const shouldShow = _credKdfMode() !== 'password' && _getProfiles().length > 0;
  panel.hidden = !shouldShow;
}

async function _deriveKey(salt, passphrase) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw', enc.encode(passphrase ?? _activePassphrase()), 'PBKDF2', false, ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false, ['encrypt', 'decrypt']
  );
}

function _getProfiles() {
  const raw = localStorage.getItem(PROFILES_LS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function _saveProfiles(profiles) {
  localStorage.setItem(PROFILES_LS_KEY, JSON.stringify(profiles));
}

function _uid() {
  return Math.random().toString(36).slice(2, 10);
}

async function _encryptData(data, passphrase) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv   = crypto.getRandomValues(new Uint8Array(12));
  const key  = await _deriveKey(salt, passphrase);
  const ct   = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv }, key, new TextEncoder().encode(JSON.stringify(data))
  );
  return { salt: Array.from(salt), iv: Array.from(iv), ct: Array.from(new Uint8Array(ct)) };
}

async function _decryptData(enc, passphrase) {
  const salt = new Uint8Array(enc.salt);
  const iv   = new Uint8Array(enc.iv);
  const ct   = new Uint8Array(enc.ct);
  const key  = await _deriveKey(salt, passphrase);
  const pt   = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct);
  return JSON.parse(new TextDecoder().decode(pt));
}

// ── Master password: unlock, activate, change, disable ──
function _promptMasterPassword(context = 'profiles') {
  return new Promise(resolve => {
    const modal = document.getElementById('master-unlock-modal');
    const input = document.getElementById('master-unlock-input');
    if (!modal || !input) { resolve(null); return; }
    const callbackUnlock = context === 'callback';
    const title = document.getElementById('master-unlock-title');
    const text = document.getElementById('master-unlock-text');
    if (title) title.textContent = t(callbackUnlock ? 'master_unlock_callback_title' : 'master_unlock_title');
    if (text) text.textContent = t(callbackUnlock ? 'master_unlock_callback_text' : 'master_unlock_text');
    window.__masterUnlockResolve = resolve;
    input.value = '';
    modal.classList.add('open');
    document.body.classList.add('modal-open');
    setTimeout(() => input.focus(), 50);
  });
}

function _finishMasterUnlock(value) {
  const modal = document.getElementById('master-unlock-modal');
  modal?.classList.remove('open');
  document.body.classList.remove('modal-open');
  const resolve = window.__masterUnlockResolve;
  window.__masterUnlockResolve = null;
  if (resolve) resolve(value);
}

async function _unlockMasterPassword(pw) {
  const profiles = _getProfiles();
  if (profiles.length > 0) await _decryptData(profiles[0].enc, pw);
  credMasterPassphrase = pw;
  _updateCredStatus();
  updateCredentialLockUI();
}

async function _ensureUnlocked(context = 'profiles') {
  if (!_credLocked()) return true;
  for (;;) {
    const pw = await _promptMasterPassword(context);
    if (pw === null || pw === '') return false;
    try {
      await _unlockMasterPassword(pw);
      return true;
    } catch (_) {
      showToast(t('err_master_wrong'), 'error');
    }
  }
}

async function _decryptCallbackAfterCredentialsLoad() {
  if (_credLocked() && !(await _ensureUnlocked('callback'))) return;
  await loadCredentials();
  const key = document.getElementById('blowfishKey')?.value || '';
  if (!key) {
    showToast(t('val_bf'), 'error');
    return;
  }
  await decryptResponse();
}

async function unlockCredentialsInline() {
  const input = document.getElementById('credential-lock-input');
  const pw = input?.value || '';
  if (!_credLocked()) {
    updateCredentialLockUI();
    return;
  }
  if (!pw) {
    input?.focus();
    return;
  }
  try {
    await _unlockMasterPassword(pw);
    await loadCredentials();
    showToast(t('toast_cred_loaded'), 'success');
  } catch (_) {
    if (input) {
      input.value = '';
      input.focus();
    }
    showToast(t('err_master_wrong'), 'error');
  }
}

async function _reencryptProfiles(fromPassphrase, toPassphrase) {
  const profiles = _getProfiles();
  const reencrypted = [];
  for (const profile of profiles) {
    const data = await _decryptData(profile.enc, fromPassphrase);
    const enc  = await _encryptData(data, toPassphrase);
    reencrypted.push({ ...profile, enc });
  }
  _saveProfiles(reencrypted);
}

function openMasterPwModal() {
  const modal = document.getElementById('master-pw-modal');
  if (!modal) return;
  const active = _credKdfMode() === 'password';
  const currentField = document.getElementById('master-pw-current-field');
  const applyButton = document.getElementById('master-pw-apply');
  const disableButton = document.getElementById('master-pw-disable');
  if (currentField) currentField.style.display = active ? '' : 'none';
  if (applyButton) applyButton.textContent = t(active ? 'btn_master_change' : 'btn_master_enable');
  if (disableButton) disableButton.style.display = active ? '' : 'none';
  ['master-pw-current', 'master-pw-new', 'master-pw-repeat'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  modal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeMasterPwModal() {
  const modal = document.getElementById('master-pw-modal');
  modal?.classList.remove('open');
  document.body.classList.remove('modal-open');
}

async function _verifyCurrentMasterPw(currentPw) {
  const profiles = _getProfiles();
  if (profiles.length === 0) return true;
  try {
    await _decryptData(profiles[0].enc, currentPw);
    return true;
  } catch (_) {
    return false;
  }
}

async function applyMasterPw() {
  const active = _credKdfMode() === 'password';
  const currentPw = document.getElementById('master-pw-current')?.value || '';
  const newPw     = document.getElementById('master-pw-new')?.value || '';
  const repeatPw  = document.getElementById('master-pw-repeat')?.value || '';
  if (newPw.length < 8) { showToast(t('err_master_short'), 'error'); return; }
  if (newPw !== repeatPw) { showToast(t('err_master_mismatch'), 'error'); return; }
  try {
    if (active) {
      if (!(await _verifyCurrentMasterPw(currentPw))) { showToast(t('err_master_wrong'), 'error'); return; }
      await _reencryptProfiles(currentPw, newPw);
    } else {
      await _reencryptProfiles(CRED_PASSPHRASE, newPw);
      localStorage.setItem(CRED_KDF_LS_KEY, 'password');
    }
    credMasterPassphrase = newPw;
    closeMasterPwModal();
    _updateCredStatus();
    updateCredentialLockUI();
    showToast(t('toast_master_enabled'), 'success');
  } catch (e) {
    showToast(t('toast_cred_err') + e.message, 'error');
  }
}

async function disableMasterPw() {
  const currentPw = document.getElementById('master-pw-current')?.value || '';
  if (!(await _verifyCurrentMasterPw(currentPw))) { showToast(t('err_master_wrong'), 'error'); return; }
  try {
    await _reencryptProfiles(currentPw, CRED_PASSPHRASE);
    localStorage.removeItem(CRED_KDF_LS_KEY);
    credMasterPassphrase = null;
    closeMasterPwModal();
    _updateCredStatus();
    updateCredentialLockUI();
    showToast(t('toast_master_disabled'), 'info');
  } catch (e) {
    showToast(t('toast_cred_err') + e.message, 'error');
  }
}

function initMasterPwModals() {
  document.getElementById('master-pw-cancel')?.addEventListener('click', closeMasterPwModal);
  document.getElementById('master-pw-apply')?.addEventListener('click', applyMasterPw);
  document.getElementById('master-pw-disable')?.addEventListener('click', disableMasterPw);
  const settingsModal = document.getElementById('master-pw-modal');
  settingsModal?.addEventListener('click', event => {
    if (event.target === settingsModal) closeMasterPwModal();
  });
  document.getElementById('master-unlock-cancel')?.addEventListener('click', () => _finishMasterUnlock(null));
  document.getElementById('master-unlock-confirm')?.addEventListener('click', () => {
    _finishMasterUnlock(document.getElementById('master-unlock-input')?.value || '');
  });
  document.getElementById('master-unlock-input')?.addEventListener('keydown', event => {
    if (event.key === 'Enter') _finishMasterUnlock(event.target.value || '');
  });
  document.getElementById('credential-lock-input')?.addEventListener('keydown', event => {
    if (event.key === 'Enter') unlockCredentialsInline();
  });
  const unlockModal = document.getElementById('master-unlock-modal');
  unlockModal?.addEventListener('click', event => {
    if (event.target === unlockModal) _finishMasterUnlock(null);
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (settingsModal?.classList.contains('open')) closeMasterPwModal();
    if (unlockModal?.classList.contains('open')) _finishMasterUnlock(null);
  });
}

function _readFormCredentials() {
  return {
    merchantId:  document.getElementById('merchantId').value,
    blowfishKey: document.getElementById('blowfishKey').value,
    hmacKey:     document.getElementById('hmacKey').value,
    restApiKey:  document.getElementById('restApiKey').value,
  };
}

function _fillFormCredentials(data) {
  if (data.merchantId)  document.getElementById('merchantId').value  = data.merchantId;
  if (data.blowfishKey) document.getElementById('blowfishKey').value = data.blowfishKey;
  if (data.hmacKey)     document.getElementById('hmacKey').value     = data.hmacKey;
  if (data.restApiKey)  document.getElementById('restApiKey').value  = data.restApiKey;
}

async function saveProfile() {
  const name = (document.getElementById('profile-name').value || '').trim();
  if (!name) { showToast(t('toast_profile_name_req'), 'error'); return; }
  if (!(await _ensureUnlocked())) return;
  try {
    const enc      = await _encryptData(_readFormCredentials());
    const profiles = _getProfiles();
    const idx      = profiles.findIndex(p => p.name === name);
    const entry    = { id: idx >= 0 ? profiles[idx].id : _uid(), name, enc };
    if (idx >= 0) profiles[idx] = entry; else profiles.push(entry);
    _saveProfiles(profiles);
    localStorage.setItem(LAST_PROFILE_KEY, entry.id);
    _renderProfileSelect(entry.id);
    document.getElementById('profile-name').value = '';
    const hasMasterPassword = _credKdfMode() === 'password';
    showToast(t(hasMasterPassword ? 'toast_profile_saved' : 'toast_profile_saved_master_hint'), hasMasterPassword ? 'success' : 'warning');
  } catch(e) {
    showToast(t('toast_cred_err') + e.message, 'error');
  }
}

async function loadProfile() {
  const id = document.getElementById('profile-select').value;
  if (!id) { showToast(t('toast_profile_none'), 'error'); return; }
  const profile = _getProfiles().find(p => p.id === id);
  if (!profile) return;
  if (!(await _ensureUnlocked())) return;
  try {
    _fillFormCredentials(await _decryptData(profile.enc));
    localStorage.setItem(LAST_PROFILE_KEY, id);
    _updateCredStatus();
    showToast(t('toast_profile_loaded') + ': ' + profile.name, 'success');
  } catch(e) {
    showToast(t('toast_cred_err') + e.message, 'error');
  }
}

let pendingProfileDeleteId = '';

function deleteProfile() {
  const id = document.getElementById('profile-select').value;
  if (!id) { showToast(t('toast_profile_none'), 'error'); return; }
  const profile = _getProfiles().find(p => p.id === id);
  if (!profile) return;
  pendingProfileDeleteId = id;
  updateProfileDeleteModalText();
  const modal = document.getElementById('profile-delete-modal');
  modal?.classList.add('open');
  document.body.classList.add('modal-open');
  document.getElementById('profile-delete-cancel')?.focus();
}

function updateProfileDeleteModalText() {
  const text = document.getElementById('profile-delete-modal-text');
  if (!text) return;
  const profile = _getProfiles().find(p => p.id === pendingProfileDeleteId);
  text.textContent = profile
    ? t('profile_delete_modal_text').replace('{name}', profile.name)
    : t('profile_delete_modal_text_generic');
}

function closeProfileDeleteModal() {
  const modal = document.getElementById('profile-delete-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  pendingProfileDeleteId = '';
  document.getElementById('profile-select')?.focus();
}

function confirmProfileDelete() {
  const id = pendingProfileDeleteId;
  const profiles = _getProfiles();
  const profile = profiles.find(p => p.id === id);
  if (!profile) { closeProfileDeleteModal(); return; }
  const remainingProfiles = profiles.filter(p => p.id !== id);
  closeProfileDeleteModal();
  _saveProfiles(remainingProfiles);
  if (localStorage.getItem(LAST_PROFILE_KEY) === id) localStorage.removeItem(LAST_PROFILE_KEY);
  document.getElementById('profile-name').value = '';
  _renderProfileSelect('');
  showToast(t('toast_profile_deleted'), 'info');
}

function onProfileSelect() {
  // Intentionally left empty — profile name input is for new names only
}

function _renderProfileSelect(selectedId) {
  const select = document.getElementById('profile-select');
  if (!select) return;
  const profiles = _getProfiles();
  clearElement(select);
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = t('profile_placeholder');
  select.appendChild(placeholder);
  profiles.forEach(profile => {
    const option = document.createElement('option');
    option.value = profile.id;
    option.textContent = profile.name;
    option.selected = profile.id === selectedId;
    select.appendChild(option);
  });
  _updateCredStatus();
}

async function _migrateOldCredentials() {
  const old = localStorage.getItem(CRED_LS_KEY);
  if (!old) return;
  const profiles = _getProfiles();
  if (profiles.length > 0) { localStorage.removeItem(CRED_LS_KEY); return; }
  try {
    const stored = JSON.parse(old);
    const data   = await _decryptData(stored);
    const enc    = await _encryptData(data);
    _saveProfiles([{ id: _uid(), name: 'Standard', enc }]);
    localStorage.removeItem(CRED_LS_KEY);
  } catch(e) {
    localStorage.removeItem(CRED_LS_KEY);
  }
}

async function loadCredentials() {
  await _migrateOldCredentials();
  const lastId   = localStorage.getItem(LAST_PROFILE_KEY) || '';
  _renderProfileSelect(lastId);
  if (!lastId) return;
  const profile = _getProfiles().find(p => p.id === lastId);
  if (!profile) return;
  // With an active master password the app never prompts on startup;
  // loading a profile is the deliberate unlock action.
  if (_credLocked()) { updateCredentialLockUI(); return; }
  try {
    _fillFormCredentials(await _decryptData(profile.enc));
    updateCredentialLockUI();
  } catch(e) {
    console.warn('Profil konnte nicht geladen werden:', e);
  }
}

function _updateCredStatus() {
  const el = document.getElementById('cred-save-status');
  if (!el) return;
  const profiles = _getProfiles();
  if (profiles.length > 0) {
    const lockHint = _credLocked() ? ' \u00b7 ' + t('cred_status_locked') : '';
    el.innerHTML = '<span style="color:var(--success)">' + profiles.length + '\u00a0' + t('cred_status_saved') + '</span>'
      + (lockHint ? '<span style="color:var(--warning)">' + lockHint + '</span>' : '');
  } else {
    el.innerHTML = '<span style="color:var(--muted)">' + t('cred_status_none') + '</span>';
  }
  updateCredentialLockUI();
  updateMasterPasswordRecommendation();
}

// ══════════════════════════════════════════════════════════════
// REQUEST & RESPONSE LOGS — IndexedDB with localStorage fallback
// ══════════════════════════════════════════════════════════════
const LOG_LS_KEY = 'computop_request_log';
const RESP_LOG_LS_KEY = 'computop_response_log';
const LOG_DB_NAME = 'computop_tester';
const LOG_DB_VERSION = 1;
const LOG_REQUEST_STORE = 'requestLogs';
const LOG_RESPONSE_STORE = 'responseLogs';
const LOG_MAX = 250;
let logStoragePromise = null;
let requestLogCache = [];
let responseLogCache = [];

function _readLocalLog(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch (error) {
    console.warn(`Invalid local log data in ${key}:`, error);
    return [];
  }
}

function _openLogDatabase() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB is unavailable'));
      return;
    }
    const request = indexedDB.open(LOG_DB_NAME, LOG_DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(LOG_REQUEST_STORE)) {
        db.createObjectStore(LOG_REQUEST_STORE, { keyPath: 'id', autoIncrement: true });
      }
      if (!db.objectStoreNames.contains(LOG_RESPONSE_STORE)) {
        db.createObjectStore(LOG_RESPONSE_STORE, { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = () => {
      const db = request.result;
      db.onversionchange = () => db.close();
      resolve(db);
    };
    request.onerror = () => reject(request.error || new Error('IndexedDB could not be opened'));
    request.onblocked = () => reject(new Error('IndexedDB upgrade is blocked'));
  });
}

function _transactionComplete(transaction) {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error('IndexedDB transaction failed'));
    transaction.onabort = () => reject(transaction.error || new Error('IndexedDB transaction aborted'));
  });
}

async function _migrateLocalLogs(db) {
  const migrations = [
    [LOG_REQUEST_STORE, LOG_LS_KEY, _readLocalLog(LOG_LS_KEY)],
    [LOG_RESPONSE_STORE, RESP_LOG_LS_KEY, _readLocalLog(RESP_LOG_LS_KEY)],
  ].filter(([, , entries]) => entries.length > 0);
  if (!migrations.length) return;

  const transaction = db.transaction(migrations.map(([store]) => store), 'readwrite');
  migrations.forEach(([storeName, , entries]) => {
    const store = transaction.objectStore(storeName);
    entries.slice(0, LOG_MAX).reverse().forEach(entry => {
      const record = { ...entry };
      delete record.id;
      store.add(record);
    });
  });
  await _transactionComplete(transaction);
  migrations.forEach(([, key]) => localStorage.removeItem(key));
}

function initLogStorage() {
  if (!logStoragePromise) {
    logStoragePromise = _openLogDatabase()
      .then(async db => {
        try {
          await _migrateLocalLogs(db);
          return db;
        } catch (error) {
          db.close();
          throw error;
        }
      })
      .catch(error => {
        console.warn('IndexedDB log storage unavailable; using localStorage fallback:', error);
        return null;
      });
  }
  return logStoragePromise;
}

async function _getLogEntries(storeName, localKey) {
  const db = await initLogStorage();
  if (!db) return _readLocalLog(localKey).slice(0, LOG_MAX);
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName, 'readonly').objectStore(storeName).getAll();
    request.onsuccess = () => resolve(request.result
      .sort((a, b) => String(b.timestamp || '').localeCompare(String(a.timestamp || '')))
      .slice(0, LOG_MAX));
    request.onerror = () => reject(request.error || new Error('Logs could not be read'));
  }).catch(error => {
    console.warn('IndexedDB log read failed:', error);
    db.close();
    logStoragePromise = Promise.resolve(null);
    return _readLocalLog(localKey).slice(0, LOG_MAX);
  });
}

async function _addLogEntry(storeName, localKey, entry) {
  const db = await initLogStorage();
  if (!db) {
    const entries = _readLocalLog(localKey);
    entries.unshift(entry);
    localStorage.setItem(localKey, JSON.stringify(entries.slice(0, LOG_MAX)));
    return;
  }

  try {
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    store.add(entry);
    const allRequest = store.getAll();
    allRequest.onsuccess = () => {
      allRequest.result
        .sort((a, b) => String(b.timestamp || '').localeCompare(String(a.timestamp || '')))
        .slice(LOG_MAX)
        .forEach(oldEntry => store.delete(oldEntry.id));
    };
    await _transactionComplete(transaction);
  } catch (error) {
    console.warn('IndexedDB log write failed; using localStorage fallback:', error);
    db.close();
    logStoragePromise = Promise.resolve(null);
    const entries = _readLocalLog(localKey);
    entries.unshift(entry);
    localStorage.setItem(localKey, JSON.stringify(entries.slice(0, LOG_MAX)));
  }
}

async function _clearLogStore(storeName, localKey) {
  localStorage.removeItem(localKey);
  const db = await initLogStorage();
  if (!db) return;
  try {
    const transaction = db.transaction(storeName, 'readwrite');
    transaction.objectStore(storeName).clear();
    await _transactionComplete(transaction);
  } catch (error) {
    console.warn('IndexedDB log clear failed:', error);
  }
}

function _prepareLogEntries(entries) {
  return entries.map(entry => {
    const record = { ...entry };
    delete record.id;
    return record;
  }).sort((a, b) => String(b.timestamp || '').localeCompare(String(a.timestamp || ''))).slice(0, LOG_MAX);
}

async function _writeLogGroups(groups) {
  const prepared = groups.map(group => ({ ...group, entries: _prepareLogEntries(group.entries) }));
  prepared.forEach(group => localStorage.setItem(group.localKey, JSON.stringify(group.entries)));
  const db = await initLogStorage();
  if (!db) return;
  try {
    const transaction = db.transaction(prepared.map(group => group.storeName), 'readwrite');
    prepared.forEach(group => {
      const store = transaction.objectStore(group.storeName);
      store.clear();
      group.entries.forEach(entry => store.add(entry));
    });
    await _transactionComplete(transaction);
    prepared.forEach(group => localStorage.removeItem(group.localKey));
  } catch (error) {
    console.warn('IndexedDB log import failed; using localStorage fallback:', error);
    db.close();
    logStoragePromise = Promise.resolve(null);
  }
}

async function _writeLogEntries(storeName, localKey, entries) {
  return _writeLogGroups([{ storeName, localKey, entries }]);
}

const LOG_EXPORT_FORMAT = 'paygate-payment-tester-log';
const LOG_EXPORT_VERSION = 1;
const LOG_BACKUP_FORMAT = 'paygate-payment-tester-backup';
const LOG_BACKUP_VERSION = 1;
let logActionModalResolver = null;

function _logConfig(kind) {
  if (kind === 'response') {
    return {
      exportType: 'response-log',
      storeName: LOG_RESPONSE_STORE,
      localKey: RESP_LOG_LS_KEY,
      inputId: 'response-log-import-file',
      render: renderResponseLog,
      filenamePart: 'response-log',
    };
  }
  return {
    exportType: 'request-log',
    storeName: LOG_REQUEST_STORE,
    localKey: LOG_LS_KEY,
    inputId: 'request-log-import-file',
    render: renderLog,
    filenamePart: 'request-log',
  };
}

function _appVersion() {
  return (document.getElementById('changelog-version-badge')?.textContent || '')
    .replace(/^(?:Beta\s+)?v/i, '') || 'unknown';
}

function _safeLogString(value, maxLength = 20000) {
  if (value === null || value === undefined) return '';
  return String(value).slice(0, maxLength);
}

function _safeLogTimestamp(value) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}

function _sanitizeLogEntry(kind, entry) {
  if (!entry || typeof entry !== 'object') return null;
  if (kind === 'response') {
    const plain = _safeLogString(entry.plain);
    if (!plain) return null;
    return {
      timestamp: _safeLogTimestamp(entry.timestamp),
      status: _safeLogString(entry.status, 50),
      transId: _safeLogString(entry.transId, 120),
      merchantId: _safeLogString(entry.merchantId, 120),
      paymentId: _safeLogString(entry.paymentId, 120),
      integration: _safeLogString(entry.integration || 'classic', 30),
      result: _safeLogString(entry.result, 30),
      url: _safeLogString(entry.url),
      plain,
    };
  }
  const url = _safeLogString(entry.url);
  if (!url) return null;
  return {
    timestamp: _safeLogTimestamp(entry.timestamp),
    merchantId: _safeLogString(entry.merchantId, 120),
    transId: _safeLogString(entry.transId, 120),
    paymentId: _safeLogString(entry.paymentId, 120),
    useCase: _safeLogString(entry.useCase, 60),
    integration: _safeLogString(entry.integration, 30),
    lookup: _safeLogString(entry.lookup, 30),
    amount: Number.isFinite(Number(entry.amount)) ? Number(entry.amount) : 0,
    currency: _safeLogString(entry.currency, 12),
    url,
  };
}

function _logEntryKey(kind, entry) {
  return kind === 'response'
    ? ['response', entry.integration, entry.plain, entry.paymentId, entry.transId, entry.status, entry.merchantId].join('\u001f')
    : ['request', entry.url, entry.transId, entry.paymentId, entry.useCase, entry.integration, entry.lookup, entry.amount, entry.currency, entry.merchantId].join('\u001f');
}

function _dedupeLogEntries(kind, entries) {
  const seen = new Set();
  const result = [];
  entries
    .filter(Boolean)
    .sort((a, b) => String(b.timestamp || '').localeCompare(String(a.timestamp || '')))
    .forEach(entry => {
      const key = _logEntryKey(kind, entry);
      if (seen.has(key)) return;
      seen.add(key);
      result.push(entry);
    });
  return result.slice(0, LOG_MAX);
}

function _downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function _localTimestampForFilename(date = new Date()) {
  const pad = value => String(value).padStart(2, '0');
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate())
  ].join('') + '-' + [
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds())
  ].join('');
}

async function exportLog(kind) {
  const config = _logConfig(kind);
  const entries = (await _getLogEntries(config.storeName, config.localKey))
    .map(entry => _sanitizeLogEntry(kind, entry))
    .filter(Boolean);
  if (!entries.length) {
    showToast(t('toast_log_export_empty'), 'info');
    return;
  }
  if (!await openLogActionModal({
    mode: 'export',
    title: t('log_export_modal_title'),
    text: t('log_export_modal_text'),
    confirmText: t('log_export_modal_confirm'),
  })) return;
  const exportDate = new Date();
  const exportedAt = exportDate.toISOString();
  const timestampPart = _localTimestampForFilename(exportDate);
  const payload = {
    format: LOG_EXPORT_FORMAT,
    version: LOG_EXPORT_VERSION,
    appVersion: _appVersion(),
    type: config.exportType,
    exportedAt,
    entries,
  };
  _downloadTextFile(
    `paygate-payment-tester-${config.filenamePart}-${timestampPart}.json`,
    JSON.stringify(payload, null, 2)
  );
}

function openLogImport(kind) {
  const input = document.getElementById(_logConfig(kind).inputId);
  if (input) input.click();
}

function _parseLogImport(text) {
  try {
    return JSON.parse(text);
  } catch (_) {
    throw new Error(t('err_log_import_json'));
  }
}

async function handleLogImportFile(kind, input) {
  const file = input?.files?.[0];
  if (input) input.value = '';
  if (!file) return;
  try {
    const config = _logConfig(kind);
    const payload = _parseLogImport(await file.text());
    if (payload?.format !== LOG_EXPORT_FORMAT) throw new Error(t('err_log_import_format'));
    if (payload?.type !== config.exportType) throw new Error(t('err_log_import_type'));
    const imported = Array.isArray(payload.entries)
      ? payload.entries.map(entry => _sanitizeLogEntry(kind, entry)).filter(Boolean)
      : [];
    if (!imported.length) throw new Error(t('err_log_import_empty'));
    const action = await openLogActionModal({
      mode: 'import',
      title: t('log_import_modal_title'),
      text: t('log_import_modal_text'),
      confirmText: t('log_import_modal_replace'),
      secondaryText: t('log_import_modal_merge'),
    });
    if (!action) return;
    const replacing = action === 'confirm';
    const existing = replacing ? [] : await _getLogEntries(config.storeName, config.localKey);
    const existingKeys = new Set(existing
      .map(entry => _sanitizeLogEntry(kind, entry))
      .filter(Boolean)
      .map(entry => _logEntryKey(kind, entry)));
    const importedUnique = _dedupeLogEntries(kind, imported);
    const newEntries = replacing
      ? importedUnique
      : importedUnique.filter(entry => !existingKeys.has(_logEntryKey(kind, entry)));
    if (!replacing && newEntries.length === 0) {
      showToast(t('toast_log_import_no_new'), 'info');
      return;
    }
    const merged = _dedupeLogEntries(kind, [...newEntries, ...existing]);
    await _writeLogEntries(config.storeName, config.localKey, merged);
    await config.render();
    showToast(`${t('toast_log_imported')}${newEntries.length} ${kind === 'response' ? t('resp_log_entries') : t('log_entries')}`, 'success');
  } catch (error) {
    showToast(t('toast_log_import_error') + error.message, 'error');
  }
}

async function updateLogDataCounts() {
  const [requests, responses] = await Promise.all([
    _getLogEntries(LOG_REQUEST_STORE, LOG_LS_KEY),
    _getLogEntries(LOG_RESPONSE_STORE, RESP_LOG_LS_KEY),
  ]);
  const requestCount = document.getElementById('log-data-request-count');
  const responseCount = document.getElementById('log-data-response-count');
  if (requestCount) requestCount.textContent = String(requests.length);
  if (responseCount) responseCount.textContent = String(responses.length);
}

function openLogDataModal() {
  const modal = document.getElementById('log-data-modal');
  if (!modal) return;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  updateLogDataCounts();
  document.getElementById('log-data-export')?.focus();
}

function closeLogDataModal(restoreFocus = true) {
  const modal = document.getElementById('log-data-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  if (restoreFocus) document.getElementById('btn-log-data')?.focus();
}

async function exportAllLogs() {
  const [requests, responses] = await Promise.all([
    _getLogEntries(LOG_REQUEST_STORE, LOG_LS_KEY),
    _getLogEntries(LOG_RESPONSE_STORE, RESP_LOG_LS_KEY),
  ]);
  const cleanRequests = requests.map(entry => _sanitizeLogEntry('request', entry)).filter(Boolean);
  const cleanResponses = responses.map(entry => _sanitizeLogEntry('response', entry)).filter(Boolean);
  if (!cleanRequests.length && !cleanResponses.length) {
    showToast(t('toast_log_data_export_empty'), 'info');
    return;
  }

  closeLogDataModal(false);
  if (!await openLogActionModal({
    mode: 'export',
    title: t('log_data_export_modal_title'),
    text: t('log_export_modal_text'),
    confirmText: t('log_export_modal_confirm'),
  })) return;

  const exportDate = new Date();
  const payload = {
    format: LOG_BACKUP_FORMAT,
    version: LOG_BACKUP_VERSION,
    appVersion: _appVersion(),
    exportedAt: exportDate.toISOString(),
    logs: {
      requests: cleanRequests,
      responses: cleanResponses,
    },
  };
  _downloadTextFile(
    `paygate-payment-tester-logs-${_localTimestampForFilename(exportDate)}.json`,
    JSON.stringify(payload, null, 2)
  );
}

function openCombinedLogImport() {
  document.getElementById('combined-log-import-file')?.click();
}

function _sanitizeImportedEntries(kind, entries) {
  if (!Array.isArray(entries)) throw new Error(t('err_log_data_entries'));
  const sanitized = entries.map(entry => _sanitizeLogEntry(kind, entry));
  if (sanitized.some(entry => !entry)) throw new Error(t('err_log_data_entries'));
  return _dedupeLogEntries(kind, sanitized);
}

function _normaliseCombinedLogImport(payload) {
  if (payload?.format === LOG_BACKUP_FORMAT) {
    if (payload.version !== LOG_BACKUP_VERSION || !payload.logs || typeof payload.logs !== 'object') {
      throw new Error(t('err_log_data_format'));
    }
    return {
      includeRequest: true,
      includeResponse: true,
      requests: _sanitizeImportedEntries('request', payload.logs.requests),
      responses: _sanitizeImportedEntries('response', payload.logs.responses),
    };
  }

  if (payload?.format === LOG_EXPORT_FORMAT && payload?.type === 'request-log') {
    return {
      includeRequest: true,
      includeResponse: false,
      requests: _sanitizeImportedEntries('request', payload.entries),
      responses: [],
    };
  }
  if (payload?.format === LOG_EXPORT_FORMAT && payload?.type === 'response-log') {
    return {
      includeRequest: false,
      includeResponse: true,
      requests: [],
      responses: _sanitizeImportedEntries('response', payload.entries),
    };
  }
  throw new Error(t('err_log_data_format'));
}

async function _prepareLogImportResult(kind, imported, replacing) {
  const config = _logConfig(kind);
  const existing = replacing ? [] : (await _getLogEntries(config.storeName, config.localKey))
    .map(entry => _sanitizeLogEntry(kind, entry)).filter(Boolean);
  const existingKeys = new Set(existing.map(entry => _logEntryKey(kind, entry)));
  const newEntries = replacing
    ? imported
    : imported.filter(entry => !existingKeys.has(_logEntryKey(kind, entry)));
  return {
    entries: replacing ? imported : _dedupeLogEntries(kind, [...newEntries, ...existing]),
    importedCount: newEntries.length,
  };
}

function _formatLogDataText(key, requests, responses) {
  return t(key).replace('{requests}', String(requests)).replace('{responses}', String(responses));
}

async function handleCombinedLogImportFile(input) {
  const file = input?.files?.[0];
  if (input) input.value = '';
  if (!file) return;

  try {
    const payload = _parseLogImport(await file.text());
    const imported = _normaliseCombinedLogImport(payload);
    if (!imported.requests.length && !imported.responses.length) throw new Error(t('err_log_import_empty'));

    closeLogDataModal(false);
    const action = await openLogActionModal({
      mode: 'import',
      title: t('log_data_import_modal_title'),
      text: _formatLogDataText('log_data_import_preview', imported.requests.length, imported.responses.length),
      confirmText: t('log_import_modal_replace'),
      secondaryText: t('log_import_modal_merge'),
    });
    if (!action) return;
    const replacing = action === 'confirm';
    const requestResult = imported.includeRequest
      ? await _prepareLogImportResult('request', imported.requests, replacing)
      : null;
    const responseResult = imported.includeResponse
      ? await _prepareLogImportResult('response', imported.responses, replacing)
      : null;
    const importedRequestCount = requestResult?.importedCount || 0;
    const importedResponseCount = responseResult?.importedCount || 0;
    if (!replacing && importedRequestCount === 0 && importedResponseCount === 0) {
      showToast(t('toast_log_import_no_new'), 'info');
      return;
    }

    const groups = [];
    if (requestResult) groups.push({ storeName: LOG_REQUEST_STORE, localKey: LOG_LS_KEY, entries: requestResult.entries });
    if (responseResult) groups.push({ storeName: LOG_RESPONSE_STORE, localKey: RESP_LOG_LS_KEY, entries: responseResult.entries });
    await _writeLogGroups(groups);
    await Promise.all([
      requestResult ? renderLog() : Promise.resolve(),
      responseResult ? renderResponseLog() : Promise.resolve(),
    ]);
    showToast(_formatLogDataText('toast_log_data_imported', importedRequestCount, importedResponseCount), 'success');
  } catch (error) {
    showToast(t('toast_log_import_error') + error.message, 'error');
  }
}

function openLogActionModal({ mode, title, text, confirmText, secondaryText = '' }) {
  const modal = document.getElementById('log-action-modal');
  const titleEl = document.getElementById('log-action-modal-title');
  const textEl = document.getElementById('log-action-modal-text');
  const cancel = document.getElementById('log-action-cancel');
  const secondary = document.getElementById('log-action-secondary');
  const confirmButton = document.getElementById('log-action-confirm');
  if (!modal || !titleEl || !textEl || !cancel || !secondary || !confirmButton) {
    return Promise.resolve(window.confirm(text || title));
  }
  titleEl.textContent = title;
  textEl.textContent = text;
  confirmButton.textContent = confirmText;
  secondary.textContent = secondaryText;
  secondary.style.display = mode === 'import' ? '' : 'none';
  modal.dataset.mode = mode;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  confirmButton.focus();
  return new Promise(resolve => {
    logActionModalResolver = resolve;
  });
}

function closeLogActionModal(result = null) {
  const modal = document.getElementById('log-action-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  const resolver = logActionModalResolver;
  logActionModalResolver = null;
  if (resolver) resolver(result);
}

function _logValueClass(key, value) {
  if (key === 'Data' || key === 'MAC') return 'enc';
  if (key === 'Len' || key === 'Amount') return 'number';
  if (key === 'Status') {
    if (value === 'OK') return 'status-ok';
    if (value === 'FAILED') return 'status-fail';
  }
  return 'val';
}

function _renderRequestLogDetail(target, rawUrl) {
  clearElement(target);
  try {
    const url = new URL(rawUrl);
    appendTextElement(target, 'span', 'endpoint', `${url.origin}${url.pathname}`);
    const entries = Array.from(url.searchParams.entries());
    entries.forEach(([key, value]) => {
      target.appendChild(document.createTextNode('\n'));
      appendTextElement(target, 'span', 'key', key);
      target.appendChild(document.createTextNode('='));
      appendTextElement(target, 'span', _logValueClass(key, value), value);
    });
  } catch (_) {
    target.textContent = rawUrl || '';
  }
}

function _renderResponseLogDetail(target, plain) {
  const source = String(plain || '').trim();
  if (source.startsWith('{') || source.startsWith('[')) {
    try {
      renderJsonSyntax(target, JSON.stringify(JSON.parse(source), null, 2));
      return;
    } catch (_) {}
  }
  const entries = String(plain || '').split('&').map(pair => {
    const index = pair.indexOf('=');
    return index > 0 ? [pair.substring(0, index), pair.substring(index + 1)] : null;
  }).filter(Boolean);
  renderParamLines(target, entries, _logValueClass);
}

async function _saveLogEntry(entry) {
  await _addLogEntry(LOG_REQUEST_STORE, LOG_LS_KEY, {
    ...entry,
    timestamp: new Date().toISOString(),
  });
}

async function renderLog() {
  const container = document.getElementById('log-list');
  if (!container) return;
  requestLogCache = await _getLogEntries(LOG_REQUEST_STORE, LOG_LS_KEY);
  scheduleStatusTransactionRefresh();

  const badge = document.getElementById('log-count-badge');
  if (badge) badge.textContent = requestLogCache.length ? `${requestLogCache.length} ${t('log_entries')}` : '';

  if (requestLogCache.length === 0) {
    clearElement(container);
    const empty = appendTextElement(container, 'p', '', t('log_empty'));
    empty.style.cssText = 'color:var(--muted);font-size:13px;padding:6px 0';
    return;
  }

  clearElement(container);
  requestLogCache.forEach((e, i) => {
    const ts = new Date(e.timestamp).toLocaleString(currentLang === 'en' ? 'en-US' : 'de-DE');
    const amt = ((e.amount || 0) / 100).toFixed(2);
    const isStatus = e.useCase === 'payment-status';
    const integration = e.integration === 'rest' || /\/api\/v\d+\//i.test(e.url || '') ? 'rest' : 'classic';
    const entry = appendTextElement(container, 'div', 'log-entry', '');
    entry.addEventListener('click', () => toggleLogDetail(i));
    const meta = appendTextElement(entry, 'div', 'log-meta', '');
    appendTextElement(meta, 'span', 'log-ts', ts);
    appendTextElement(meta, 'span', `log-interface-badge log-interface-${integration}`, integration);
    appendTextElement(meta, 'span', 'log-badge', isStatus ? t('log_status_badge') : `${e.currency || '–'} ${amt}`);
    appendTextElement(meta, 'span', 'log-merchant', e.merchantId || '–');
    appendTextElement(meta, 'span', 'log-status-dot', '');
    const identifierLabel = isStatus && e.lookup === 'paymentId' ? 'PayID: ' : 'TransID: ';
    const identifierValue = isStatus && e.lookup === 'paymentId' ? e.paymentId : e.transId;
    const transId = appendTextElement(entry, 'div', 'log-tid', identifierLabel);
    const transIdValue = appendTextElement(transId, 'span', '', identifierValue || '–');
    transIdValue.style.color = 'var(--accent2)';
    const detail = appendTextElement(entry, 'div', 'log-detail', '');
    detail.id = `log-detail-${i}`;
    detail.style.display = 'none';
    const pre = appendTextElement(detail, 'pre', '', '');
    _renderRequestLogDetail(pre, e.url || '');
    const copy = appendTextElement(detail, 'button', 'copy-btn', t('log_copy_url'));
    copy.style.cssText = 'display:inline-flex;align-items:center;gap:4px';
    copy.addEventListener('click', event => {
      event.stopPropagation();
      _copyLogUrl(i);
    });
  });
}

function _copyLogUrl(i) {
  if (requestLogCache[i]) navigator.clipboard.writeText(requestLogCache[i].url || '')
    .then(() => showToast(t('toast_url_copied'), 'success'));
}

function toggleLogDetail(i) {
  const el = document.getElementById(`log-detail-${i}`);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

async function clearLog() {
  if (!confirm(t('confirm_log_del'))) return;
  await _clearLogStore(LOG_REQUEST_STORE, LOG_LS_KEY);
  await renderLog();
  showToast(t('toast_log_cleared'), 'info');
}

function _parsePlainParams(plain) {
  const result = {};
  plain.split('&').forEach(pair => {
    const idx = pair.indexOf('=');
    if (idx > 0) result[pair.substring(0, idx)] = pair.substring(idx + 1);
  });
  return result;
}

function _normalisePaymentMethodLabel(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  const first = raw.split(',')[0].trim();
  const compact = first.replace(/[\s_-]+/g, '').toUpperCase();
  const labels = {
    CC: 'Card', CARD: 'Card', CARDS: 'Card', CREDITCARD: 'Card',
    VISA: 'Visa', MASTERCARD: 'Mastercard', MASTER: 'Mastercard', AMEX: 'Amex',
    PAYPAL: 'PayPal', KLARNA: 'Klarna', SOFORT: 'Sofort',
    APPLEPAY: 'Apple Pay', GOOGLEPAY: 'Google Pay', AMAZONPAY: 'Amazon Pay',
    IDEAL: 'iDEAL', EPS: 'EPS', BANCONTACT: 'Bancontact', BLIK: 'BLIK',
    SEPA: 'SEPA', DIRECTDEBIT: 'Direct Debit'
  };
  return labels[compact] || first;
}

function _paymentMethodFromPlain(plain) {
  const params = _parsePlainParams(String(plain || ''));
  const wanted = ['PayType', 'PaymentMethod', 'PaymentType', 'CCBrand', 'CardBrand', 'Brand', 'Type', 'pt'];
  for (const name of wanted) {
    const key = Object.keys(params).find(candidate => candidate.toLowerCase() === name.toLowerCase());
    if (key && params[key]) {
      try { return _normalisePaymentMethodLabel(decodeURIComponent(params[key].replace(/\+/g, ' '))); }
      catch (_) { return _normalisePaymentMethodLabel(params[key]); }
    }
  }
  const source = String(plain || '').trim();
  if (source.startsWith('{') || source.startsWith('[')) {
    try {
      const payload = JSON.parse(source);
      return _normalisePaymentMethodLabel(_restScalar(_findRestResponseValue(payload, [
        'paymentMethod', 'paymentMethodType', 'paymentType', 'payType', 'cardBrand', 'ccBrand', 'brand'
      ])));
    } catch (_) {}
  }
  return '';
}

function _responsePaymentMethod(entry, requestEntries) {
  const direct = _normalisePaymentMethodLabel(entry.paymentMethod) || _paymentMethodFromPlain(entry.plain);
  if (direct) return direct;
  const paymentId = entry.paymentId || _plainParamIgnoreCase(entry.plain, ['PayID', 'PaymentID', 'paymentId']);
  const transId = entry.transId || _plainParamIgnoreCase(entry.plain, ['TransID', 'TransId', 'transactionId']);
  const request = requestEntries.find(candidate =>
    (paymentId && candidate.paymentId === paymentId) || (transId && candidate.transId === transId)
  );
  return _normalisePaymentMethodLabel(request?.paymentMethod);
}

async function _saveRespLogEntry(plain) {
  const params = _parsePlainParams(plain);
  const entry  = {
    timestamp:  new Date().toISOString(),
    status:     params['Status']     || '',
    paymentId:  params['PayID']      || params['PaymentID'] || '',
    transId:    params['TransID']    || params['TransId'] || '',
    merchantId: params['MerchantID'] || params['mid']     || '',
    paymentMethod: _paymentMethodFromPlain(plain),
    integration: 'classic',
    plain
  };
  await _addLogEntry(LOG_RESPONSE_STORE, RESP_LOG_LS_KEY, entry);
}

async function renderResponseLog() {
  const container = document.getElementById('resp-log-list');
  if (!container) return;
  responseLogCache = await _getLogEntries(LOG_RESPONSE_STORE, RESP_LOG_LS_KEY);
  const requestEntries = await _getLogEntries(LOG_REQUEST_STORE, LOG_LS_KEY);
  scheduleStatusTransactionRefresh();

  const badge = document.getElementById('resp-log-count-badge');
  if (badge) badge.textContent = responseLogCache.length ? `${responseLogCache.length} ${t('resp_log_entries')}` : '';

  if (responseLogCache.length === 0) {
    clearElement(container);
    const empty = appendTextElement(container, 'p', '', t('resp_log_empty'));
    empty.style.cssText = 'color:var(--muted);font-size:13px;padding:6px 0';
    return;
  }

  clearElement(container);
  responseLogCache.forEach((e, i) => {
    const ts     = new Date(e.timestamp).toLocaleString(currentLang === 'en' ? 'en-US' : 'de-DE');
    const integration = e.integration === 'rest' ? 'REST' : e.integration === 'unknown' ? 'UNKNOWN' : 'CLASSIC';
    const status = e.status || e.result || '–';
    const paymentMethod = _responsePaymentMethod(e, requestEntries);
    const normalisedStatus = status.toUpperCase();
    const dotCls = ['OK', 'SUCCESS'].includes(normalisedStatus) ? 'rlog-status-ok'
                 : ['FAILED', 'FAILURE'].includes(normalisedStatus) ? 'rlog-status-fail'
                 : 'rlog-status-other';
    const entry = appendTextElement(container, 'div', 'log-entry', '');
    entry.addEventListener('click', () => toggleRespLogDetail(i));
    const meta = appendTextElement(entry, 'div', 'log-meta', '');
    appendTextElement(meta, 'span', 'log-ts', ts);
    const integrationBadge = appendTextElement(meta, 'span', `log-interface-${e.integration === 'rest' ? 'rest' : e.integration === 'unknown' ? 'unknown' : 'classic'}`, integration);
    integrationBadge.classList.add('log-badge');
    const statusBadge = appendTextElement(meta, 'span', 'log-badge', status);
    if (['OK', 'SUCCESS'].includes(normalisedStatus)) {
      statusBadge.classList.add('status-ok');
      statusBadge.style.cssText = 'background:rgba(34,197,94,.12);border-color:rgba(34,197,94,.25);color:var(--success)';
    }
    if (['FAILED', 'FAILURE'].includes(normalisedStatus)) {
      statusBadge.classList.add('status-failed');
      statusBadge.style.cssText = 'background:rgba(239,68,68,.12);border-color:rgba(239,68,68,.25);color:var(--danger)';
    }
    if (paymentMethod) appendTextElement(meta, 'span', 'log-badge log-payment-badge', paymentMethod);
    appendTextElement(meta, 'span', 'log-merchant', e.merchantId || '–');
    appendTextElement(meta, 'span', `log-status-dot ${dotCls}`, '');
    const identifier = e.integration === 'unknown'
      ? (e.callbackHost || e.url || '')
      : e.integration === 'rest'
      ? (e.paymentId || _plainParamIgnoreCase(e.plain, ['PayID', 'PaymentID', 'paymentId']))
      : e.transId;
    const transId = appendTextElement(entry, 'div', 'log-tid', e.integration === 'unknown' ? 'Callback: ' : e.integration === 'rest' ? 'PayID: ' : 'TransID: ');
    const transIdValue = appendTextElement(transId, 'span', '', identifier || '–');
    transIdValue.style.color = 'var(--accent2)';
    const detail = appendTextElement(entry, 'div', 'log-detail', '');
    detail.id = `resp-log-detail-${i}`;
    detail.style.display = 'none';
    const pre = appendTextElement(detail, 'pre', '', '');
    _renderResponseLogDetail(pre, e.plain || '');
    const copy = appendTextElement(detail, 'button', 'copy-btn', t('resp_log_copy'));
    copy.style.cssText = 'display:inline-flex;align-items:center;gap:4px';
    copy.addEventListener('click', event => {
      event.stopPropagation();
      _copyRespLogEntry(i);
    });
  });
}

function toggleRespLogDetail(i) {
  const el = document.getElementById(`resp-log-detail-${i}`);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function _copyRespLogEntry(i) {
  if (responseLogCache[i]) navigator.clipboard.writeText(responseLogCache[i].plain || '')
    .then(() => showToast(t('toast_copied'), 'success'));
}

async function clearResponseLog() {
  if (!confirm(t('confirm_resp_log_del'))) return;
  await _clearLogStore(LOG_RESPONSE_STORE, RESP_LOG_LS_KEY);
  await renderResponseLog();
  showToast(t('toast_resp_log_cleared'), 'info');
}

function clearAllStorage() {
  openClearAllModal();
}

function openClearAllModal() {
  const modal = document.getElementById('clear-all-modal');
  if (!modal) return;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  document.getElementById('clear-all-cancel')?.focus();
}

function closeClearAllModal(restoreFocus = true) {
  const modal = document.getElementById('clear-all-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  if (restoreFocus) document.getElementById('btn-clear-all')?.focus();
}

function resetScrollAfterClearAllIfNeeded() {
  let shouldReset = false;
  try {
    shouldReset = sessionStorage.getItem(CLEAR_ALL_SCROLL_RESET_KEY) === '1';
    if (shouldReset) sessionStorage.removeItem(CLEAR_ALL_SCROLL_RESET_KEY);
  } catch (_) {}
  if (!shouldReset) return;
  try { history.scrollRestoration = 'manual'; } catch (_) {}
  const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  scrollTop();
  requestAnimationFrame(scrollTop);
  setTimeout(scrollTop, 120);
}

async function confirmClearAllStorage() {
  closeClearAllModal(false);
  await Promise.all([
    _clearLogStore(LOG_REQUEST_STORE, LOG_LS_KEY),
    _clearLogStore(LOG_RESPONSE_STORE, RESP_LOG_LS_KEY),
  ]);
  [
    PROFILES_LS_KEY, LAST_PROFILE_KEY, CRED_LS_KEY,
    LOG_LS_KEY, RESP_LOG_LS_KEY, DESIGN_LS_KEY, THEME_LS_KEY, LANG_LS_KEY, CALLBACK_RECEIVER_KEY,
    PBL_REFS_LS_KEY, PAYMENT_PENDING_KEY, CALLBACK_RELAY_KEY, CALLBACK_RELAY_ACK_KEY,
    CRED_KDF_LS_KEY
  ].forEach(k => localStorage.removeItem(k));
  if (window.caches) {
    try {
      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map(key => caches.delete(key)));
    } catch (_) {}
  }
  if (navigator.serviceWorker) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map(reg => reg.unregister()));
    } catch (_) {}
  }
  try {
    sessionStorage.setItem(CLEAR_ALL_SCROLL_RESET_KEY, '1');
    history.scrollRestoration = 'manual';
  } catch (_) {}
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  showToast(t('toast_clear_all'), 'info');
  setTimeout(() => {
    const cleanUrl = location.href.split('#')[0];
    location.replace(cleanUrl);
  }, 800);
}

// ══════════════════════════════════════════════════════════════
// RESPONSE ANALYSIS
// ══════════════════════════════════════════════════════════════
let currentResponseAnalysisMode = 'classic';

function setResponseAnalysisMode(mode) {
  if (!['classic', 'rest'].includes(mode)) return;
  currentResponseAnalysisMode = mode;
  document.getElementById('response-mode-classic')?.classList.toggle('active', mode === 'classic');
  document.getElementById('response-mode-rest')?.classList.toggle('active', mode === 'rest');
  const classic = document.getElementById('classic-response-analysis');
  const rest = document.getElementById('rest-response-analysis');
  if (classic) classic.style.display = mode === 'classic' ? '' : 'none';
  if (rest) rest.style.display = mode === 'rest' ? '' : 'none';
  const result = document.getElementById('resp-result-section');
  if (result) result.style.display = 'none';
  const summary = document.getElementById('rest-response-summary');
  if (summary) summary.style.display = 'none';
  const badge = document.getElementById('resp-new-badge');
  if (badge) badge.style.display = 'none';
}

function _findRestResponseValue(payload, names) {
  const wanted = new Set(names.map(name => String(name).toLowerCase()));
  const queue = [payload];
  while (queue.length) {
    const current = queue.shift();
    if (!current || typeof current !== 'object') continue;
    for (const [key, value] of Object.entries(current)) {
      const isScalar = value === null || typeof value !== 'object' || Array.isArray(value);
      if (wanted.has(key.toLowerCase()) && isScalar && value !== null && value !== undefined && value !== '') return value;
    }
    for (const value of Object.values(current)) {
      if (value && typeof value === 'object') queue.push(value);
    }
  }
  return '';
}

function _restScalar(value) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) return value.map(_restScalar).filter(Boolean).join(', ');
  return '';
}

function _restResponseMetadata(payload) {
  return {
    status: _restScalar(_findRestResponseValue(payload, ['status', 'result', 'state'])),
    paymentId: _restScalar(_findRestResponseValue(payload, ['paymentId', 'payId', 'PayID'])),
    transId: _restScalar(_findRestResponseValue(payload, ['transactionId', 'transId', 'TransID'])),
    merchantId: _restScalar(_findRestResponseValue(payload, ['merchantId', 'mid', 'MerchantID'])),
    paymentMethod: _restScalar(_findRestResponseValue(payload, [
      'paymentMethod', 'paymentMethodType', 'paymentType', 'payType', 'cardBrand', 'ccBrand', 'brand'
    ])),
    code: _restScalar(_findRestResponseValue(payload, ['errorCode', 'responseCode', 'code'])),
    message: _restScalar(_findRestResponseValue(payload, ['errorMessage', 'description', 'message', 'detail'])),
  };
}

function _renderRestResponseSummary(metadata) {
  const container = document.getElementById('rest-response-summary');
  if (!container) return;
  clearElement(container);
  const fields = [
    ['rest_resp_field_status', metadata.status, 'status'],
    ['rest_resp_field_payment_id', metadata.paymentId],
    ['rest_resp_field_transaction_id', metadata.transId],
    ['rest_resp_field_merchant_id', metadata.merchantId],
    ['rest_resp_field_code', metadata.code],
    ['rest_resp_field_message', metadata.message],
  ].filter(([, value]) => value);
  if (!fields.length) fields.push(['rest_resp_field_summary', t('rest_resp_no_fields')]);
  fields.forEach(([labelKey, value, kind]) => {
    const item = appendTextElement(container, 'div', 'rest-response-summary-item', '');
    appendTextElement(item, 'span', 'rest-response-summary-label', t(labelKey));
    const valueEl = appendTextElement(item, 'span', 'rest-response-summary-value', value);
    if (kind === 'status') {
      const normalised = String(value).toUpperCase();
      if (['OK', 'SUCCESS', 'SUCCEEDED', 'COMPLETED', 'AUTHORIZED', 'CAPTURED'].includes(normalised)) valueEl.classList.add('success');
      if (['FAILED', 'FAILURE', 'ERROR', 'DECLINED', 'CANCELLED', 'CANCELED'].includes(normalised)) valueEl.classList.add('failure');
    }
  });
  container.style.display = 'grid';
}

async function _saveRestRespLogEntry(metadata, formatted) {
  await _addLogEntry(LOG_RESPONSE_STORE, RESP_LOG_LS_KEY, {
    timestamp: new Date().toISOString(),
    status: metadata.status,
    paymentId: metadata.paymentId,
    transId: metadata.transId,
    merchantId: metadata.merchantId,
    paymentMethod: _normalisePaymentMethodLabel(metadata.paymentMethod),
    integration: 'rest',
    result: metadata.status,
    url: '',
    plain: formatted,
  });
}

async function analyzeRestResponse() {
  const raw = document.getElementById('rest-resp-json')?.value.trim() || '';
  if (!raw) { showToast(t('rest_resp_empty'), 'error'); return; }
  try {
    const payload = JSON.parse(raw);
    if (payload === null || typeof payload !== 'object') throw new Error(t('rest_resp_object_required'));
    const formatted = JSON.stringify(payload, null, 2);
    const metadata = _restResponseMetadata(payload);
    const responseEl = document.getElementById('resp-plain');
    renderJsonSyntax(responseEl, formatted);
    responseEl.dataset.raw = formatted;
    document.getElementById('resp-result-label').textContent = t('rest_resp_result_label');
    _renderRestResponseSummary(metadata);
    const resultSection = document.getElementById('resp-result-section');
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    const newBadge = document.getElementById('resp-new-badge');
    if (newBadge) newBadge.style.display = 'inline-flex';
    await _saveRestRespLogEntry(metadata, formatted);
    await renderResponseLog();
    showToast(t('rest_resp_success'), 'success');
  } catch (error) {
    const prefix = error instanceof SyntaxError ? t('rest_resp_invalid') : '';
    showToast(prefix + error.message, 'error');
  }
}

async function decryptResponse() {
  setResponseAnalysisMode('classic');
  const callbackUrl = document.getElementById('resp-url').value.trim();
  let dataHex = document.getElementById('resp-data').value.trim();
  let lenVal  = parseInt(document.getElementById('resp-len').value) || 0;
  const blowfishKey = document.getElementById('blowfishKey').value;

  // Extract MerchantID, Len, Data from URL if provided
  if (callbackUrl) {
    try {
      let urlToParse = callbackUrl;
      if (!urlToParse.match(/^https?:\/\//)) urlToParse = 'https://x.invalid?' + urlToParse.split('?').pop();
      const params = new URL(urlToParse).searchParams;
      const extractedData = params.get('Data') || params.get('data');
      const extractedLen  = params.get('Len')  || params.get('len');
      if (extractedData) { dataHex = extractedData; document.getElementById('resp-data').value = dataHex; }
      if (extractedLen)  { lenVal  = parseInt(extractedLen); document.getElementById('resp-len').value  = lenVal; }
    } catch(e) {
      showToast(t('resp_url_parse_err'), 'error'); return;
    }
  }

  if (!blowfishKey) { showToast(t('val_bf'), 'error'); return; }
  if (!dataHex)     { showToast(t('resp_no_data'), 'error'); return; }

  try {
    const responseEncryption = detectClassicResponseEncryption(dataHex);
    if (responseEncryption !== currentClassicEncryption) setClassicEncryption(responseEncryption);
    const plain = await decryptClassicData(blowfishKey, dataHex, lenVal || undefined);

    // Parse key=value pairs
    const responseEntries = plain.split('&').map(pair => {
      const eqIdx = pair.indexOf('=');
      if (eqIdx < 0) return null;
      const k = pair.substring(0, eqIdx);
      const v = pair.substring(eqIdx + 1);
      return k ? [k, v] : null;
    }).filter(Boolean);

    const responseEl = document.getElementById('resp-plain');
    renderParamLines(responseEl, responseEntries, k => k === 'MAC' ? 'enc' : 'val');
    Array.from(responseEl.querySelectorAll('.key')).forEach(keyEl => {
      if (keyEl.textContent !== 'Status') return;
      const statusEl = keyEl.nextElementSibling;
      if (!statusEl) return;
      const value = statusEl.textContent;
      statusEl.style.color = value === 'OK' ? 'var(--success)' : value === 'FAILED' ? 'var(--danger)' : 'var(--warning)';
      statusEl.style.fontWeight = '600';
    });
    responseEl.dataset.raw = plain;
    document.getElementById('resp-result-label').textContent = t('resp_result_label');
    const summary = document.getElementById('rest-response-summary');
    if (summary) summary.style.display = 'none';
    document.getElementById('resp-result-section').style.display = 'block';
    document.getElementById('resp-result-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Show "current" badge
    const newBadge = document.getElementById('resp-new-badge');
    if (newBadge) newBadge.style.display = 'inline-flex';

    // Save to response log + refresh
    await _saveRespLogEntry(plain);
    await renderResponseLog();

    showToast(t('resp_success'), 'success');
  } catch(e) {
    showToast(t('toast_err') + e.message, 'error');
  }
}

function copyRespPlain() {
  const raw = document.getElementById('resp-plain').dataset.raw || document.getElementById('resp-plain').textContent;
  navigator.clipboard.writeText(raw).then(() => showToast(t('toast_copied'), 'success'));
}

// ══════════════════════════════════════════════════════════════
// DESIGN + THEME MANAGEMENT
// ══════════════════════════════════════════════════════════════
const DESIGN_LS_KEY = 'computop_design';
const THEME_LS_KEY = 'computop_theme';
const SUPPORTED_DESIGNS = new Set(['original', 'nexi']);

function initDesign() {
  const params = new URLSearchParams(window.location.search);
  const hasRequested = params.has('design');
  const requested = params.get('design');
  const saved = localStorage.getItem(DESIGN_LS_KEY);
  const design = hasRequested
    ? (SUPPORTED_DESIGNS.has(requested) ? requested : 'original')
    : (SUPPORTED_DESIGNS.has(saved) ? saved : 'original');

  document.documentElement.dataset.design = design;
  if (SUPPORTED_DESIGNS.has(requested)) localStorage.setItem(DESIGN_LS_KEY, design);
  _updateBrowserThemeColor();
  updateDesignToggle();
}

function updateDesignToggle() {
  const button = document.getElementById('footer-design-toggle');
  const label = document.getElementById('footer-design-toggle-text');
  if (!button || !label) return;

  const isNexi = document.documentElement.dataset.design === 'nexi';
  const labelKey = isNexi ? 'footer_design_nexi' : 'footer_design_original';
  const actionKey = isNexi ? 'footer_design_to_original' : 'footer_design_to_nexi';
  label.textContent = t(labelKey);
  button.removeAttribute('title');
  button.setAttribute('aria-label', t(actionKey));
  button.setAttribute('aria-pressed', String(isNexi));
}

function setDesign(design, updateUrl = true) {
  const nextDesign = SUPPORTED_DESIGNS.has(design) ? design : 'original';
  document.documentElement.dataset.design = nextDesign;
  try { localStorage.setItem(DESIGN_LS_KEY, nextDesign); } catch (_) {}

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set('design', nextDesign);
    window.history.replaceState(window.history.state, '', url.toString());
  }

  _updateBrowserThemeColor();
  updateDesignToggle();
  syncCustomFieldLogoForDesign(nextDesign);
}

function toggleDesign() {
  const isNexi = document.documentElement.dataset.design === 'nexi';
  setDesign(isNexi ? 'original' : 'nexi');
}

function _updateBrowserThemeColor() {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) return;
  const isNexi = document.documentElement.dataset.design === 'nexi';
  const isLight = document.documentElement.classList.contains('light');
  meta.content = isNexi ? (isLight ? '#f0f0f0' : '#2d32aa') : (isLight ? '#f0f4f9' : '#3d7eff');
}

function _applyTheme(mode, isAuto) {
  const html   = document.documentElement;
  const icon   = document.getElementById('theme-icon');
  const label  = document.getElementById('theme-label');
  const badge  = document.getElementById('theme-auto-badge');

  if (mode === 'light') {
    html.classList.add('light');
  } else {
    html.classList.remove('light');
  }

  const moonSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
  const sunSvg  = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
  if (icon) {
    icon.innerHTML = mode === 'light' ? sunSvg : moonSvg;
  }
  if (label) label.textContent = mode === 'light' ? 'Light' : 'Dark';
  if (badge) badge.style.display = isAuto ? 'inline' : 'none';
  _updateBrowserThemeColor();
}

function initTheme() {
  const saved  = localStorage.getItem(THEME_LS_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'light' || saved === 'dark') {
    _applyTheme(saved, false);
  } else {
    // Auto: follow system
    _applyTheme(prefersDark ? 'dark' : 'light', true);
  }

  // Listen for system changes when in auto mode
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem(THEME_LS_KEY)) {
      _applyTheme(e.matches ? 'dark' : 'light', true);
    }
  });
}

function toggleTheme() {
  const isLight = document.documentElement.classList.contains('light');
  const newMode = isLight ? 'dark' : 'light';
  localStorage.setItem(THEME_LS_KEY, newMode);
  _applyTheme(newMode, false);
  showToast(newMode === 'light' ? t('toast_theme_light') : t('toast_theme_dark'), 'info');
}

function positionSettingsMenu() {
  const trigger = document.getElementById('settings-toggle-btn');
  const menu = document.getElementById('settings-menu');
  const nav = document.querySelector('.glass-nav');
  if (!trigger || !menu || menu.hidden) return;
  const anchorRect = (nav || trigger).getBoundingClientRect();
  const gap = 12;
  const right = Math.max(8, document.documentElement.clientWidth - anchorRect.right);
  menu.style.top = `${Math.round(anchorRect.bottom + gap)}px`;
  menu.style.right = `${Math.round(right)}px`;
}

function setSettingsMenuOpen(open, focusMenu = false) {
  const trigger = document.getElementById('settings-toggle-btn');
  const menu = document.getElementById('settings-menu');
  if (!trigger || !menu) return;
  menu.hidden = !open;
  trigger.setAttribute('aria-expanded', String(open));
  if (open) {
    positionSettingsMenu();
    if (focusMenu) menu.querySelector('[role="menuitem"]')?.focus();
  }
}

function toggleSettingsMenu() {
  const menu = document.getElementById('settings-menu');
  setSettingsMenuOpen(Boolean(menu?.hidden));
}

function initSettingsMenu() {
  const trigger = document.getElementById('settings-toggle-btn');
  const menu = document.getElementById('settings-menu');
  if (!trigger || !menu) return;
  trigger.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSettingsMenuOpen(true, true);
    }
  });
  document.addEventListener('click', event => {
    if (!menu.hidden && !menu.contains(event.target) && !trigger.contains(event.target)) setSettingsMenuOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || menu.hidden) return;
    setSettingsMenuOpen(false);
    trigger.focus();
  });
  menu.addEventListener('click', event => {
    const action = event.target.closest('[data-action]')?.dataset.action;
    if (action === 'open-log-data-modal' || action === 'clear-all-storage') setSettingsMenuOpen(false);
  });
  window.addEventListener('resize', positionSettingsMenu, { passive: true });
  window.addEventListener('scroll', positionSettingsMenu, { passive: true });
}

// ══════════════════════════════════════════════════════════════
// CALLBACK RECEIVER
// ══════════════════════════════════════════════════════════════
const CALLBACK_RECEIVER_KEY = 'computop_callback_receiver';
const PAYMENT_PENDING_KEY = 'computop_payment_pending';
const CALLBACK_RELAY_KEY = 'computop_callback_relay';
const CALLBACK_RELAY_ACK_KEY = 'computop_callback_relay_ack';
const CALLBACK_RELAY_CHANNEL = 'computop_callback_channel';
const CALLBACK_RELAY_MAX_AGE = 30 * 60 * 1000;
const NON_CALLBACK_QUERY_PARAMS = new Set(['design']);
const EXTERNAL_DEMO_CALLBACK_URLS = {
  urlSuccess: 'https://httpbingo.org/anything/paygate-success',
  urlFailure: 'https://httpbingo.org/anything/paygate-failure',
  urlNotify: 'https://httpbingo.org/anything/paygate-notify',
  urlBack: 'https://httpbingo.org/anything/paygate-back'
};
let callbackRelayChannel = null;
const acceptedCallbackIds = new Set();

function _callbackBaseUrl() {
  return window.location.origin + window.location.pathname;
}

function _restCallbackUrl(result) {
  const url = new URL(_callbackBaseUrl());
  url.searchParams.set('callback', 'rest');
  url.searchParams.set('result', result);
  return url.href;
}

function _restoreCallbackInput(input) {
  input.value = input.dataset.backup || '';
  delete input.dataset.backup;
  input.readOnly = false;
  input.style.opacity = '';
}

function _applyCallbackReceiver(enabled) {
  const base = _callbackBaseUrl();
  const ids = ['urlSuccess', 'urlFailure', 'urlNotify', 'urlBack'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (enabled) {
      if (!('backup' in el.dataset)) el.dataset.backup = el.value;
      if (currentIntegration === 'rest' && id === 'urlNotify') {
        _restoreCallbackInput(el);
        return;
      }
      const restResults = { urlSuccess: 'success', urlFailure: 'failure', urlBack: 'cancel' };
      el.value = currentIntegration === 'rest' ? _restCallbackUrl(restResults[id]) : base;
      el.readOnly = true;
      el.style.opacity = '0.65';
    } else {
      _restoreCallbackInput(el);
    }
  });
}

function toggleCallbackReceiver() {
  const enabled = document.getElementById('cb-receiver-toggle').checked;
  localStorage.setItem(CALLBACK_RECEIVER_KEY, enabled ? '1' : '0');
  _applyCallbackReceiver(enabled);
}

function updateCallbackReceiverAvailabilityUI() {
  const receiverSupported = ['http:', 'https:'].includes(window.location.protocol);
  const toggle = document.getElementById('cb-receiver-toggle');
  const row = document.getElementById('cb-receiver-row');
  const hint = document.getElementById('cb-receiver-hint');
  if (toggle) {
    toggle.disabled = !receiverSupported;
    if (!receiverSupported) toggle.checked = false;
    toggle.title = receiverSupported ? '' : t('cb_receiver_file_title');
  }
  row?.classList.toggle('is-unavailable', !receiverSupported);
  if (hint) {
    const hintKey = !receiverSupported
      ? 'cb_receiver_file_hint'
      : (currentIntegration === 'rest' ? 'cb_receiver_rest_hint' : 'cb_receiver_hint');
    hint.textContent = t(hintKey);
  }
  return receiverSupported;
}

function applyExternalDemoCallbackUrls({ preserveExisting = false } = {}) {
  Object.entries(EXTERNAL_DEMO_CALLBACK_URLS).forEach(([id, value]) => {
    const input = document.getElementById(id);
    if (!input) return;
    if (preserveExisting && input.value.trim()) return;
    input.value = value;
  });
}

function applyHttpbingoDemo() {
  const toggle = document.getElementById('cb-receiver-toggle');
  if (toggle?.checked) {
    toggle.checked = false;
    localStorage.setItem(CALLBACK_RECEIVER_KEY, '0');
    _applyCallbackReceiver(false);
  }
  applyExternalDemoCallbackUrls();
  markPreviewStale();
  showToast(t('toast_httpbingo_demo'), 'warning');
}

function initCallbackReceiver() {
  const storedSetting = localStorage.getItem(CALLBACK_RECEIVER_KEY);
  const receiverSupported = updateCallbackReceiverAvailabilityUI();
  const enabled = receiverSupported && (storedSetting === null || storedSetting === '1');
  const toggle  = document.getElementById('cb-receiver-toggle');
  if (toggle) {
    toggle.checked = enabled;
  }
  if (enabled) {
    localStorage.setItem(CALLBACK_RECEIVER_KEY, '1');
    _applyCallbackReceiver(true);
  } else if (!receiverSupported) {
    localStorage.setItem(CALLBACK_RECEIVER_KEY, '0');
    applyExternalDemoCallbackUrls({ preserveExisting: true });
  }
  initCallbackRelay();
  checkCallbackParams();
}

function _callbackPayloadFromUrl(urlString) {
  const url = new URL(urlString, window.location.href);
  const data = url.searchParams.get('Data') || url.searchParams.get('data');
  const len = url.searchParams.get('Len') || url.searchParams.get('len');
  if (!data || !len) return null;
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    url: url.href,
    createdAt: Date.now(),
  };
}

function _restCallbackPayloadFromUrl(urlString) {
  const url = new URL(urlString, window.location.href);
  if (url.searchParams.get('callback') !== 'rest') return null;
  const params = new URLSearchParams(url.searchParams);
  params.delete('callback');
  const result = params.get('result') || '';
  return {
    timestamp: new Date().toISOString(),
    status: params.get('Status') || params.get('status') || result,
    result,
    paymentId: params.get('PayID') || params.get('paymentId') || params.get('PaymentID') || '',
    transId: params.get('TransID') || params.get('transactionId') || '',
    merchantId: params.get('MerchantID') || params.get('mid') || '',
    paymentMethod: _normalisePaymentMethodLabel(
      params.get('PayType') || params.get('paymentMethod') || params.get('paymentType') ||
      params.get('Brand') || params.get('Type') || params.get('pt') || ''
    ),
    integration: 'rest',
    url: url.href,
    plain: params.toString(),
  };
}

function _plainPaygateCallbackPayloadFromUrl(urlString) {
  const url = new URL(urlString, window.location.href);
  const params = url.searchParams;
  if (params.has('Data') || params.has('data') || params.has('Len') || params.has('len')) return null;

  const hasResultState = ['Status', 'status', 'Code', 'code', 'MAC'].some(name => params.has(name));
  const hasPaymentReference = [
    'PayID', 'payId', 'paymentId', 'PaymentID',
    'TransID', 'TransId', 'transId', 'transactionId',
    'XID', 'refnr', 'RefNr'
  ].some(name => params.has(name));
  if (!hasResultState || !hasPaymentReference) return null;

  return {
    timestamp: new Date().toISOString(),
    status: params.get('Status') || params.get('status') || '',
    paymentId: params.get('PayID') || params.get('payId') || params.get('paymentId') || params.get('PaymentID') || '',
    transId: params.get('TransID') || params.get('TransId') || params.get('transId') || params.get('transactionId') || '',
    merchantId: params.get('MerchantID') || params.get('mid') || params.get('merchantId') || '',
    paymentMethod: _normalisePaymentMethodLabel(
      params.get('PayType') || params.get('paymentMethod') || params.get('paymentType') ||
      params.get('Brand') || params.get('Type') || params.get('pt') || ''
    ),
    integration: 'classic',
    url: url.href,
    plain: params.toString(),
  };
}

function _unknownCallbackPayloadFromUrl(urlString) {
  const url = new URL(urlString, window.location.href);
  const params = new URLSearchParams(url.searchParams);
  NON_CALLBACK_QUERY_PARAMS.forEach(name => params.delete(name));
  if (!params || Array.from(params.keys()).length === 0) return null;
  if (params.has('Data') || params.has('data') || params.has('Len') || params.has('len')) return null;
  if (_restCallbackPayloadFromUrl(urlString) || _plainPaygateCallbackPayloadFromUrl(urlString)) return null;
  if (localStorage.getItem(CALLBACK_RECEIVER_KEY) !== '1') return null;

  return {
    timestamp: new Date().toISOString(),
    status: 'UNKNOWN',
    result: 'UNKNOWN',
    paymentId: '',
    transId: '',
    merchantId: params.get('MerchantID') || params.get('mid') || params.get('merchantId') || '',
    paymentMethod: _paymentMethodFromPlain(params.toString()),
    integration: 'unknown',
    callbackHost: url.host || url.pathname || 'callback',
    url: url.href,
    plain: params.toString(),
  };
}

async function handleRestCallbackUrl(urlString) {
  try {
    if (localStorage.getItem(CALLBACK_RECEIVER_KEY) !== '1') return false;
    const entry = _restCallbackPayloadFromUrl(urlString);
    if (!entry) return false;
    window.history.replaceState({}, '', _callbackBaseUrl());
    await _addLogEntry(LOG_RESPONSE_STORE, RESP_LOG_LS_KEY, entry);
    await renderResponseLog();
    document.getElementById('nav-resp-log')?.click();
    showToast(t('toast_rest_callback_received'), 'success');
    return true;
  } catch (e) {
    console.warn('handleRestCallbackUrl error:', e);
    return false;
  }
}

async function handlePlainPaygateCallbackUrl(urlString) {
  try {
    const entry = _plainPaygateCallbackPayloadFromUrl(urlString);
    if (!entry) return false;
    window.history.replaceState({}, '', _callbackBaseUrl());
    await _addLogEntry(LOG_RESPONSE_STORE, RESP_LOG_LS_KEY, entry);
    await renderResponseLog();
    document.getElementById('nav-resp-log')?.click();
    showToast(t('toast_paygate_callback_received'), 'success');
    return true;
  } catch (e) {
    console.warn('handlePlainPaygateCallbackUrl error:', e);
    return false;
  }
}

async function handleUnknownCallbackUrl(urlString) {
  try {
    const entry = _unknownCallbackPayloadFromUrl(urlString);
    if (!entry) return false;
    window.history.replaceState({}, '', _callbackBaseUrl());
    await _addLogEntry(LOG_RESPONSE_STORE, RESP_LOG_LS_KEY, entry);
    await renderResponseLog();
    document.getElementById('nav-resp-log')?.click();
    showToast(t('toast_unknown_callback_received'), 'error');
    return true;
  } catch (e) {
    console.warn('handleUnknownCallbackUrl error:', e);
    return false;
  }
}

function _publishCallback(payload) {
  try {
    localStorage.setItem(CALLBACK_RELAY_KEY, JSON.stringify(payload));
    callbackRelayChannel?.postMessage({ type: 'callback', payload });
  } catch (e) {
    console.warn('Callback relay publish failed:', e);
  }
}

function _acknowledgeCallback(payload) {
  try {
    localStorage.setItem(CALLBACK_RELAY_ACK_KEY, payload.id);
  } catch (e) {
    console.warn('Callback relay acknowledgement failed:', e);
  }
  callbackRelayChannel?.postMessage({ type: 'ack', id: payload.id });
}

function _finishCallbackRelay(id) {
  if (id !== window.__callbackRelayId) return;
  window.__callbackRelayCompleted = true;
  localStorage.removeItem(CALLBACK_RELAY_ACK_KEY);
  showToast(t('toast_callback_transferred'), 'success');
  setTimeout(() => window.close(), 700);
}

function _acceptRelayedCallback(payload) {
  if (!payload || !payload.url || Date.now() - payload.createdAt > CALLBACK_RELAY_MAX_AGE) return false;
  if (acceptedCallbackIds.has(payload.id)) return false;
  const pendingRaw = localStorage.getItem(PAYMENT_PENDING_KEY);
  if (!pendingRaw) return false;
  try {
    const pending = JSON.parse(pendingRaw);
    if (!pending.createdAt || payload.createdAt < pending.createdAt) return false;
  } catch (e) {
    return false;
  }
  if (!handleCallbackUrl(payload.url, false)) return false;
  acceptedCallbackIds.add(payload.id);
  _acknowledgeCallback(payload);
  localStorage.removeItem(PAYMENT_PENDING_KEY);
  localStorage.removeItem(CALLBACK_RELAY_KEY);
  window.focus();
  return true;
}

function initCallbackRelay() {
  if ('BroadcastChannel' in window) {
    callbackRelayChannel = new BroadcastChannel(CALLBACK_RELAY_CHANNEL);
    callbackRelayChannel.addEventListener('message', event => {
      if (event.data?.type === 'callback') _acceptRelayedCallback(event.data.payload);
      if (event.data?.type === 'ack') _finishCallbackRelay(event.data.id);
    });
  }

  window.addEventListener('storage', event => {
    if (event.key === CALLBACK_RELAY_ACK_KEY && event.newValue) {
      _finishCallbackRelay(event.newValue);
      return;
    }
    if (event.key !== CALLBACK_RELAY_KEY || !event.newValue) return;
    try { _acceptRelayedCallback(JSON.parse(event.newValue)); } catch (e) { console.warn('Callback relay parse failed:', e); }
  });

  try {
    const pending = localStorage.getItem(PAYMENT_PENDING_KEY);
    const relayed = localStorage.getItem(CALLBACK_RELAY_KEY);
    if (pending && relayed) _acceptRelayedCallback(JSON.parse(relayed));
  } catch (e) {
    console.warn('Stored callback relay failed:', e);
  }

  if ('launchQueue' in window) {
    window.launchQueue.setConsumer(launchParams => {
      if (launchParams.targetURL && handleCallbackUrl(launchParams.targetURL, false)) {
        localStorage.removeItem(PAYMENT_PENDING_KEY);
      }
    });
  }
}

function handleCallbackUrl(urlString, cleanCurrentUrl = false) {
  try {
    if (localStorage.getItem(CALLBACK_RECEIVER_KEY) !== '1') return false;
    const callbackUrl = new URL(urlString, window.location.href);
    const params = callbackUrl.searchParams;
    const data   = params.get('Data') || params.get('data');
    const len    = params.get('Len')  || params.get('len');
    if (!data || !len) return false;

    // Clean URL without reload
    if (cleanCurrentUrl) window.history.replaceState({}, '', _callbackBaseUrl());

    // Open the dedicated response decryptor view
    const respCard = document.getElementById('card-response');
    if (respCard) respCard.classList.remove('collapsed');

    // Preserve the complete callback URL for decryption and inspection
    const respUrlEl = document.getElementById('resp-url');
    if (respUrlEl) respUrlEl.value = callbackUrl.href;

    setResponseAnalysisMode('classic');
    document.getElementById('nav-response')?.click();

    showToast(t('toast_callback_received'), 'success');

    // Loading credentials may require the app's master-password dialog.
    // Once unlocked, restore the last profile and continue automatically.
    setTimeout(() => {
      _decryptCallbackAfterCredentialsLoad().catch(error => {
        console.warn('Automatic callback decryption failed:', error);
        showToast(error.message, 'error');
      });
    }, 0);
    return true;
  } catch(e) {
    console.warn('handleCallbackUrl error:', e);
    return false;
  }
}

function checkCallbackParams() {
  if (_restCallbackPayloadFromUrl(window.location.href)) {
    handleRestCallbackUrl(window.location.href);
    return;
  }
  if (_plainPaygateCallbackPayloadFromUrl(window.location.href)) {
    handlePlainPaygateCallbackUrl(window.location.href);
    return;
  }
  if (_unknownCallbackPayloadFromUrl(window.location.href)) {
    handleUnknownCallbackUrl(window.location.href);
    return;
  }
  const payload = _callbackPayloadFromUrl(window.location.href);
  if (!payload) return;

  const pending = localStorage.getItem(PAYMENT_PENDING_KEY);
  const receiverEnabled = localStorage.getItem(CALLBACK_RECEIVER_KEY) === '1';
  if (pending && receiverEnabled && isStandaloneApp() === false) {
    window.__callbackRelayId = payload.id;
    window.__callbackRelayCompleted = false;
    _publishCallback(payload);
    setTimeout(() => {
      if (!window.__callbackRelayCompleted) handleCallbackUrl(window.location.href, true);
    }, 1800);
    return;
  }

  handleCallbackUrl(window.location.href, true);
}

// ══════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  resetScrollAfterClearAllIfNeeded();
  initActionDelegation();
  initSettingsMenu();
  initStandaloneViews();
  initDesign();
  initTheme();
  initLang();
  bindSectionJumpLinks(document.getElementById('tools-view'));
  initArticleList();
  initStatusTransactionPicker();
  generateTransId();
  initPayByLinkDefaults();
  setIntegration(currentIntegration);
  loadCredentials();
  initLogStorage().then(() => {
    renderLog();
    renderResponseLog();
  });
  _updateCredStatus();
  initParamTips();
  initClearAllModal();
  initQrModal();
  initMasterPwModals();
  initProfileDeleteModal();
  initNewFlowModal();
  initLogActionModal();
  initLogDataModal();
  initNavigation();
  initWorkflowNavigation();
  initPaymentFlowChangeTracking();
  initCallbackReceiver();
  fetch('./VERSION').then(r => r.text()).then(v => {
    const version = v.trim();
    const changelogBadge = document.getElementById('changelog-version-badge');
    const navVersionBadge = document.getElementById('nav-version-badge');
    if (changelogBadge && version) changelogBadge.textContent = 'Beta v' + version;
    if (navVersionBadge && version) navVersionBadge.textContent = 'Beta v' + version;
  }).catch(() => {});
});

// Central action registries: markup declares intent via data-action /
// data-action-change attributes; the CSP forbids inline event handlers.
const CLICK_ACTIONS = {
  'generate-transid': () => generateTransId(),
  'build-and-preview': () => buildAndPreview(),
  'toggle-workflow-subsection': el => toggleWorkflowSubsection(el.dataset.target),
  'toggle-theme': () => toggleTheme(),
  'toggle-lang': () => toggleLang(),
  'toggle-settings-menu': () => toggleSettingsMenu(),
  'toggle-design': () => toggleDesign(),
  'toggle-pwd': el => togglePwd(el.dataset.target, el),
  'toggle-card': el => toggleCard(el.dataset.target),
  'submit-payment': () => submitPayment(),
  'submit-classic-status': () => submitClassicStatus(),
  'start-new-payment-flow': () => startNewPaymentFlow(),
  'set-use-case': el => setUseCase(el.dataset.arg),
  'set-response-analysis-mode': el => setResponseAnalysisMode(el.dataset.arg),
  'set-method': el => setMethod(el.dataset.arg),
  'set-integration': el => setIntegration(el.dataset.arg),
  'set-classic-encryption': el => setClassicEncryption(el.dataset.arg),
  'save-profile': () => saveProfile(),
  'load-profile': () => loadProfile(),
  'delete-profile': () => deleteProfile(),
  'remove-article-item': el => removeArticleItem(el),
  'open-log-import': el => openLogImport(el.dataset.arg),
  'open-log-data-modal': () => openLogDataModal(),
  'open-combined-log-import': () => openCombinedLogImport(),
  'generate-test-customer': () => generateTestCustomer(),
  'generate-test-articlelist': () => generateTestArticleList(),
  'generate-pbl-ref': () => generatePayByLinkRef(),
  'generate-customfield-example': () => generateCustomFieldExample(),
  'export-log': el => exportLog(el.dataset.arg),
  'export-all-logs': () => exportAllLogs(),
  'decrypt-response': () => decryptResponse(),
  'copy-text': el => copyText(el.dataset.target),
  'copy-resp-plain': () => copyRespPlain(),
  'copy-test-card': el => {
    navigator.clipboard.writeText(el.dataset.number || '')
      .then(() => showToast(t('toast_copied'), 'success'));
  },
  'clear-response-log': () => clearResponseLog(),
  'clear-log': () => clearLog(),
  'clear-customer-master-data': () => clearCustomerMasterData(),
  'clear-customfields': () => clearCustomFields(),
  'clear-articlelist': () => clearArticleList(),
  'clear-all-storage': () => clearAllStorage(),
  'apply-httpbingo-demo': () => applyHttpbingoDemo(),
  'analyze-rest-response': () => analyzeRestResponse(),
  'add-article-item': () => addArticleItem(),
  'validate-mac': () => validateMac(),
  'mac-fill-from-workflow': () => macFillFromWorkflow(),
  'submit-payment-embedded': () => submitPaymentEmbedded(),
  'close-embedded-form': () => closeEmbeddedForm(),
  'show-request-qr': () => showRequestQr(),
  'open-master-pw-modal': () => openMasterPwModal(),
  'unlock-credentials-inline': () => unlockCredentialsInline(),
  'b64-encode': () => b64Encode(),
  'b64-decode': () => b64Decode(),
  'b64-copy-encoded': () => b64CopyEncoded(),
  'b64-copy-param': () => b64CopyParam(),
};

const CHANGE_ACTIONS = {
  'update-rest-controls': () => updateRestControls(),
  'validate-rest-credential-optin': el => validateRestCredentialOptIn(el),
  'update-use-case-ui': () => updateUseCaseUI(),
  'update-article-requirements': () => updateArticleRequirements(),
  'toggle-shipping-address': () => toggleShippingAddress(),
  'toggle-customer-master-data': () => toggleCustomerMasterData(),
  'toggle-customfields': () => toggleCustomFields(),
  'toggle-callback-receiver': () => toggleCallbackReceiver(),
  'toggle-articlelist': () => toggleArticleList(),
  'on-template-change': () => onTemplateChange(),
  'on-profile-select': () => onProfileSelect(),
  'on-orderdesc-change': el => onOrderDescChange(el),
  'handle-log-import-file': el => handleLogImportFile(el.dataset.arg, el),
  'handle-combined-log-import-file': el => handleCombinedLogImportFile(el),
  'apply-b64-sample': () => applyB64Sample(),
};

function initActionDelegation() {
  document.addEventListener('click', event => {
    const el = event.target.closest('[data-action]');
    if (!el) return;
    const action = CLICK_ACTIONS[el.dataset.action];
    if (action) action(el);
  });
  document.addEventListener('change', event => {
    const el = event.target.closest('[data-action-change]');
    if (!el) return;
    const action = CHANGE_ACTIONS[el.dataset.actionChange];
    if (action) action(el);
  });
}

function initStandaloneViews() {
  const placements = {
    'card-log': 'request-log-view',
    'card-response': 'response-view',
    'card-resp-log': 'response-log-view',
  };
  Object.entries(placements).forEach(([cardId, viewId]) => {
    const card = document.getElementById(cardId);
    const view = document.getElementById(viewId);
    if (!card || !view) return;
    card.classList.remove('collapsed');
    view.appendChild(card);
  });
}

function initClearAllModal() {
  const modal = document.getElementById('clear-all-modal');
  const cancel = document.getElementById('clear-all-cancel');
  const confirmButton = document.getElementById('clear-all-confirm');
  if (!modal || !cancel || !confirmButton) return;

  cancel.addEventListener('click', closeClearAllModal);
  confirmButton.addEventListener('click', confirmClearAllStorage);
  modal.addEventListener('click', event => {
    if (event.target === modal) closeClearAllModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeClearAllModal();
  });
}

function initProfileDeleteModal() {
  const modal = document.getElementById('profile-delete-modal');
  const cancel = document.getElementById('profile-delete-cancel');
  const confirmButton = document.getElementById('profile-delete-confirm');
  if (!modal || !cancel || !confirmButton) return;

  cancel.addEventListener('click', closeProfileDeleteModal);
  confirmButton.addEventListener('click', confirmProfileDelete);
  modal.addEventListener('click', event => {
    if (event.target === modal) closeProfileDeleteModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeProfileDeleteModal();
  });
}

function initNewFlowModal() {
  const modal = document.getElementById('new-flow-modal');
  const cancel = document.getElementById('new-flow-cancel');
  const confirmButton = document.getElementById('new-flow-confirm');
  if (!modal || !cancel || !confirmButton) return;

  cancel.addEventListener('click', closeNewFlowModal);
  confirmButton.addEventListener('click', confirmNewPaymentFlow);
  modal.addEventListener('click', event => {
    if (event.target === modal) closeNewFlowModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeNewFlowModal();
  });
}

function initLogActionModal() {
  const modal = document.getElementById('log-action-modal');
  const cancel = document.getElementById('log-action-cancel');
  const secondary = document.getElementById('log-action-secondary');
  const confirmButton = document.getElementById('log-action-confirm');
  if (!modal || !cancel || !secondary || !confirmButton) return;

  cancel.addEventListener('click', () => closeLogActionModal(null));
  secondary.addEventListener('click', () => closeLogActionModal('secondary'));
  confirmButton.addEventListener('click', () => closeLogActionModal('confirm'));
  modal.addEventListener('click', event => {
    if (event.target === modal) closeLogActionModal(null);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeLogActionModal(null);
  });
}

function initLogDataModal() {
  const modal = document.getElementById('log-data-modal');
  const closeButton = document.getElementById('log-data-close');
  if (!modal || !closeButton) return;

  closeButton.addEventListener('click', () => closeLogDataModal());
  modal.addEventListener('click', event => {
    if (event.target === modal) closeLogDataModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeLogDataModal();
  });
}

function initStatusTransactionPicker() {
  document.getElementById('status-saved-transaction')?.addEventListener('change', applySavedStatusTransaction);
  document.getElementById('status-payment-id')?.addEventListener('input', markStatusTransactionManual);
  document.getElementById('status-transaction-id')?.addEventListener('input', markStatusTransactionManual);
}

function initParamTips() {
  const tip = document.createElement('div');
  tip.id = 'g-tip';
  document.body.appendChild(tip);

  function show(btn) {
    tip.textContent = btn.dataset.tip || '';
    // Position off-screen first to measure height
    tip.style.left = '-9999px';
    tip.style.top  = '-9999px';
    tip.classList.add('visible');

    const rect   = btn.getBoundingClientRect();
    const tipW   = tip.offsetWidth;
    const tipH   = tip.offsetHeight;
    const margin = 10;

    let left = rect.left + rect.width / 2 - tipW / 2;
    let top  = rect.top - tipH - 7;

    // Clamp horizontally within viewport
    left = Math.max(margin, Math.min(left, window.innerWidth - tipW - margin));
    // Flip below the button if not enough space above
    if (top < margin) top = rect.bottom + 7;

    tip.style.left = left + 'px';
    tip.style.top  = top  + 'px';
  }

  function hide() {
    tip.classList.remove('visible');
  }

  document.querySelectorAll('.param-tip').forEach(btn => {
    btn.addEventListener('mouseenter', () => show(btn));
    btn.addEventListener('mouseleave', hide);
    btn.addEventListener('focus',      () => show(btn));
    btn.addEventListener('blur',       hide);
  });
}

function toggleWorkflowSubsection(id, expanded) {
  const section = document.getElementById(id);
  if (!section) return;
  const shouldExpand = expanded ?? section.classList.contains('is-collapsed');
  section.classList.toggle('is-collapsed', !shouldExpand);
  section.querySelector(':scope > .workflow-subsection-header')?.setAttribute('aria-expanded', String(shouldExpand));
  refreshWorkflowNavigation();
}

function initWorkflowNavigation() {
  const workflowView = document.getElementById('payment-workflow-view');
  const nav = document.getElementById('workflow-nav');
  const glassNav = document.querySelector('.glass-nav');
  const workflowShell = document.querySelector('.workflow-shell');
  const mobileTrigger = document.getElementById('workflow-mobile-trigger');
  const mobileCurrent = document.getElementById('workflow-mobile-current');
  const links = Array.from(document.querySelectorAll('.workflow-nav-item[data-workflow-target]'));
  if (!workflowView || !nav || !links.length) return;

  let activeLink = null;
  let updatePending = false;
  let metricsUpdatePending = false;
  let navigationLockUntil = 0;

  function workflowScrollOffset() {
    const navBottom = glassNav?.getBoundingClientRect().bottom || 96;
    const mobileBottom = window.matchMedia('(max-width: 900px)').matches
      ? nav.getBoundingClientRect().bottom
      : 0;
    return Math.ceil(Math.max(navBottom, mobileBottom) + 12);
  }

  function updateMobileMetrics() {
    metricsUpdatePending = false;
    if (!glassNav || !workflowShell || !window.matchMedia('(max-width: 900px)').matches) {
      nav.style.removeProperty('--workflow-mobile-sticky-top');
      nav.style.removeProperty('--workflow-mobile-width');
      nav.style.removeProperty('--workflow-mobile-offset');
      return;
    }
    const glassRect = glassNav.getBoundingClientRect();
    const shellRect = workflowShell.getBoundingClientRect();
    const viewportOffsetTop = window.visualViewport?.offsetTop || 0;
    nav.style.setProperty('--workflow-mobile-sticky-top', `${Math.ceil(glassRect.bottom + viewportOffsetTop + 14)}px`);
    nav.style.setProperty('--workflow-mobile-width', `${glassRect.width}px`);
    nav.style.setProperty('--workflow-mobile-offset', `${glassRect.left - shellRect.left}px`);
  }

  function scheduleMobileMetricsUpdate() {
    if (metricsUpdatePending) return;
    metricsUpdatePending = true;
    requestAnimationFrame(() => {
      updateMobileMetrics();
      scheduleUpdate();
    });
  }

  const conditionVisible = link => {
    const condition = link.dataset.workflowVisible;
    if (!condition) return true;
    if (condition === 'classic') return currentIntegration === 'classic';
    if (condition === 'status') return currentUseCase === 'payment-status';
    if (condition === 'create') return currentUseCase === 'create-payment';
    if (condition === 'classic-create') return currentUseCase === 'create-payment' && currentIntegration === 'classic';
    if (condition === 'classic-hpp') return currentUseCase === 'create-payment' && currentIntegration === 'classic' && currentMethod === 'hpp';
    if (condition === 'classic-preview') {
      const classicPreview = document.getElementById('debug-section');
      return currentUseCase === 'create-payment'
        && currentIntegration === 'classic'
        && classicPreview?.style.display !== 'none';
    }
    return true;
  };

  const targetIsRendered = target => {
    if (!target || !target.getClientRects().length) return false;
    const collapsedCard = target.closest('.card.collapsed');
    if (collapsedCard && collapsedCard !== target) return false;
    const collapsedSection = target.closest('.workflow-subsection.is-collapsed');
    return !collapsedSection || collapsedSection === target;
  };

  function setActive(link) {
    if (!link || link.hidden) return;
    activeLink = link;
    links.forEach(item => {
      const isActive = item === link;
      item.classList.toggle('workflow-nav-active', isActive);
      if (isActive) item.setAttribute('aria-current', 'location');
      else item.removeAttribute('aria-current');
    });
    if (mobileCurrent) mobileCurrent.textContent = link.textContent.trim();
  }

  function updateActiveFromScroll() {
    updatePending = false;
    if (workflowView.hidden) return;
    if (Date.now() < navigationLockUntil) return;
    const activationLine = workflowScrollOffset();
    const candidates = links.filter(link => {
      if (link.hidden) return false;
      return targetIsRendered(document.getElementById(link.dataset.workflowTarget));
    });
    if (!candidates.length) return;
    const positioned = candidates
      .map(link => ({
        link,
        top: document.getElementById(link.dataset.workflowTarget).getBoundingClientRect().top
      }))
      .sort((a, b) => a.top - b.top);
    const passed = positioned.filter(item => item.top <= activationLine);
    const atPageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 24;
    const closest = positioned.reduce((best, item) =>
      Math.abs(item.top - activationLine) < Math.abs(best.top - activationLine) ? item : best
    );
    const next = (atPageBottom ? closest : passed.at(-1) || positioned[0]).link;
    setActive(next);
  }

  function scheduleUpdate() {
    if (updatePending) return;
    updatePending = true;
    requestAnimationFrame(updateActiveFromScroll);
  }

  refreshWorkflowNavigation = () => {
    links.forEach(link => { link.hidden = !conditionVisible(link); });
    if (activeLink?.hidden) activeLink = null;
    scheduleUpdate();
  };

  function expandTarget(target) {
    const card = target.closest('.card');
    card?.classList.remove('collapsed');
    const subsection = target.classList.contains('workflow-subsection')
      ? target
      : target.closest('.workflow-subsection');
    if (subsection?.classList.contains('is-collapsed')) toggleWorkflowSubsection(subsection.id, true);
  }

  links.forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.dataset.workflowTarget);
      if (!target) return;
      expandTarget(target);
      setActive(link);
      navigationLockUntil = Date.now() + 1200;
      nav.classList.remove('mobile-open');
      mobileTrigger?.setAttribute('aria-expanded', 'false');
      if (location.hash !== `#${target.id}`) history.pushState({}, '', `#${target.id}`);
      requestAnimationFrame(() => {
        const offset = workflowScrollOffset();
        const top = window.scrollY + target.getBoundingClientRect().top - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        window.setTimeout(() => {
          target.focus({ preventScroll: true });
          navigationLockUntil = 0;
        }, 1200);
      });
    });
  });

  mobileTrigger?.addEventListener('click', () => {
    const open = nav.classList.toggle('mobile-open');
    mobileTrigger.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', event => {
    if (!nav.classList.contains('mobile-open') || nav.contains(event.target)) return;
    nav.classList.remove('mobile-open');
    mobileTrigger?.setAttribute('aria-expanded', 'false');
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !nav.classList.contains('mobile-open')) return;
    nav.classList.remove('mobile-open');
    mobileTrigger?.setAttribute('aria-expanded', 'false');
    mobileTrigger?.focus();
  });

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', () => {
    scheduleMobileMetricsUpdate();
    scheduleUpdate();
  });
  window.addEventListener('orientationchange', scheduleMobileMetricsUpdate, { passive: true });
  window.addEventListener('pageshow', scheduleMobileMetricsUpdate);
  window.visualViewport?.addEventListener('resize', scheduleMobileMetricsUpdate, { passive: true });
  window.visualViewport?.addEventListener('scroll', scheduleMobileMetricsUpdate, { passive: true });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(scheduleUpdate, { rootMargin: '-100px 0px -62% 0px' });
    links.forEach(link => {
      const target = document.getElementById(link.dataset.workflowTarget);
      if (target) observer.observe(target);
    });
  }
  const stateObserver = new MutationObserver(refreshWorkflowNavigation);
  stateObserver.observe(document.getElementById('card-payment'), {
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'style', 'hidden']
  });
  stateObserver.observe(document.getElementById('card-preview'), {
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'style', 'hidden']
  });
  if ('ResizeObserver' in window && glassNav) {
    new ResizeObserver(() => {
      scheduleMobileMetricsUpdate();
      scheduleUpdate();
    }).observe(glassNav);
  }

  const initialTarget = document.getElementById(location.hash.slice(1));
  const initialLink = initialTarget && links.find(link => link.dataset.workflowTarget === initialTarget.id);
  updateMobileMetrics();
  window.setTimeout(scheduleMobileMetricsUpdate, 120);
  window.setTimeout(scheduleMobileMetricsUpdate, 420);
  if (initialLink) requestAnimationFrame(() => initialLink.click());
  else refreshWorkflowNavigation();
}

function initNavigation() {
  const targetLinks = Array.from(document.querySelectorAll('[data-nav-target]'));
  const viewLinks = Array.from(document.querySelectorAll('[data-nav-view]'));
  const paymentWorkflowView = document.getElementById('payment-workflow-view');
  const views = {
    overview: document.getElementById('overview-view'),
    'request-log': document.getElementById('request-log-view'),
    response: document.getElementById('response-view'),
    'response-log': document.getElementById('response-log-view'),
    tools: document.getElementById('tools-view'),
    help: document.getElementById('help-view'),
    changelog: document.getElementById('changelog-view'),
  };
  const targets = targetLinks
    .map(link => document.getElementById(link.dataset.navTarget))
    .filter(Boolean);
  const glassNav = document.querySelector('.glass-nav');
  const navScrollLeft = document.getElementById('nav-scroll-left');
  const navScrollRight = document.getElementById('nav-scroll-right');
  const navOverflowTolerance = 12;
  let navigationLockTarget = null;
  let navigationLockTimer = 0;
  let scrollUpdatePending = false;

  function setActiveLink(activeLink) {
    [...targetLinks, ...viewLinks].forEach(link => {
      link.classList.toggle('nav-active', link === activeLink);
    });
    if (activeLink && glassNav && glassNav.scrollWidth > glassNav.clientWidth + navOverflowTolerance) {
      activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  function updateNavScrollControls() {
    if (!glassNav || !navScrollLeft || !navScrollRight) return;
    const navRect = glassNav.getBoundingClientRect();
    const controlTop = navRect.top + (navRect.height - navScrollLeft.offsetHeight) / 2;
    navScrollLeft.style.top = `${controlTop}px`;
    navScrollRight.style.top = `${controlTop}px`;
    const hasOverflow = glassNav.scrollWidth > glassNav.clientWidth + navOverflowTolerance;
    const atStart = glassNav.scrollLeft <= navOverflowTolerance;
    const atEnd = glassNav.scrollLeft + glassNav.clientWidth >= glassNav.scrollWidth - navOverflowTolerance;
    navScrollLeft.classList.toggle('visible', hasOverflow && !atStart);
    navScrollRight.classList.toggle('visible', hasOverflow && !atEnd);
  }

  function updateMobileContentOffset() {
    if (!glassNav || !window.matchMedia('(max-width: 640px)').matches) {
      document.documentElement.style.removeProperty('--mobile-content-top');
      return;
    }
    const navBottom = glassNav.getBoundingClientRect().bottom;
    document.documentElement.style.setProperty('--mobile-content-top', `${Math.ceil(navBottom + 14)}px`);
  }

  function updateNavigationMetrics() {
    updateMobileContentOffset();
    updateNavScrollControls();
  }

  function scrollNavigation(direction) {
    if (!glassNav) return;
    glassNav.scrollBy({ left: direction * Math.max(260, glassNav.clientWidth * .62), behavior: 'smooth' });
  }

  navScrollLeft?.addEventListener('click', () => scrollNavigation(-1));
  navScrollRight?.addEventListener('click', () => scrollNavigation(1));
  glassNav?.addEventListener('scroll', updateNavScrollControls, { passive: true });
  glassNav?.addEventListener('wheel', event => {
    if (glassNav.scrollWidth <= glassNav.clientWidth + navOverflowTolerance || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();
    glassNav.scrollBy({ left: event.deltaY, behavior: 'auto' });
  }, { passive: false });

  function activeWorkflowLinkAtScrollPosition() {
    const activationLine = (glassNav?.getBoundingClientRect().bottom || 90) + 16;
    let activeTarget = targets[0];
    targets.forEach(target => {
      if (target.getBoundingClientRect().top <= activationLine) activeTarget = target;
    });
    return targetLinks.find(link => link.dataset.navTarget === activeTarget?.id);
  }

  function updateWorkflowNavigation() {
    scrollUpdatePending = false;
    if (paymentWorkflowView.hidden || navigationLockTarget) return;
    setActiveLink(activeWorkflowLinkAtScrollPosition());
  }

  function scheduleWorkflowNavigationUpdate() {
    if (scrollUpdatePending) return;
    scrollUpdatePending = true;
    requestAnimationFrame(updateWorkflowNavigation);
  }

  function releaseNavigationLock() {
    if (!navigationLockTarget) return;
    navigationLockTarget = null;
    clearTimeout(navigationLockTimer);
    scheduleWorkflowNavigationUpdate();
  }

  function showPaymentWorkflowView(updateHistory = true, hash = '#payment-workflow') {
    paymentWorkflowView.hidden = false;
    Object.values(views).forEach(view => { if (view) view.hidden = true; });
    requestAnimationFrame(() => refreshWorkflowNavigation());
    if (updateHistory && location.hash !== hash) history.pushState({}, '', hash);
  }

  function showStandaloneView(viewName, updateHistory = true) {
    const activeView = views[viewName];
    if (!activeView) return;
    paymentWorkflowView.hidden = true;
    Object.entries(views).forEach(([name, view]) => { if (view) view.hidden = name !== viewName; });
    setActiveLink(viewLinks.find(link => link.dataset.navView === viewName));
    if (updateHistory && location.hash !== `#${viewName}`) history.pushState({}, '', `#${viewName}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  targetLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.dataset.navTarget);
      if (!target) return;
      const targetHash = target.id === 'payment-workflow-view' ? '#payment-workflow' : `#${target.id}`;
      showPaymentWorkflowView(true, targetHash);
      navigationLockTarget = target.id;
      clearTimeout(navigationLockTimer);
      navigationLockTimer = window.setTimeout(releaseNavigationLock, 1200);
      setActiveLink(link);
      requestAnimationFrame(() => {
        target.classList.remove('collapsed');
        requestAnimationFrame(() => {
          if (target.id === 'payment-workflow-view') window.scrollTo({ top: 0, behavior: 'smooth' });
          else {
            const offset = (glassNav?.getBoundingClientRect().bottom || 90) + 8;
            const top = window.scrollY + target.getBoundingClientRect().top - offset;
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
          }
        });
      });
    });
  });

  viewLinks.forEach(link => {
    link.addEventListener('click', () => showStandaloneView(link.dataset.navView));
  });
  document.querySelectorAll('[data-overview-nav-view]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      showStandaloneView(link.dataset.overviewNavView);
    });
  });
  document.querySelectorAll('[data-overview-nav-target]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetLink = targetLinks.find(navLink => navLink.dataset.navTarget === link.dataset.overviewNavTarget);
      if (targetLink) targetLink.click();
    });
  });

  function applyLocationView() {
    const viewName = location.hash.slice(1);
    if (!viewName) showStandaloneView('overview', false);
    else if (views[viewName]) showStandaloneView(viewName, false);
    else {
      showPaymentWorkflowView(false);
      const targetLink = targetLinks.find(link => link.dataset.navTarget === viewName);
      if (targetLink) targetLink.click();
    }
  }
  window.addEventListener('popstate', applyLocationView);
  applyLocationView();
  window.addEventListener('scroll', scheduleWorkflowNavigationUpdate, { passive: true });
  window.addEventListener('resize', () => {
    scheduleWorkflowNavigationUpdate();
    updateNavigationMetrics();
  });
  window.visualViewport?.addEventListener('resize', updateNavigationMetrics, { passive: true });
  if ('ResizeObserver' in window && glassNav) {
    new ResizeObserver(updateNavigationMetrics).observe(glassNav);
  }
  if ('onscrollend' in window) window.addEventListener('scrollend', releaseNavigationLock);
  scheduleWorkflowNavigationUpdate();
  updateNavigationMetrics();
}

// ── PWA Service Worker Registration ──
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').catch(() => {});
}
