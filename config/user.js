// ============================================================================
// CORE ENGINE: Hardening & Interception Capabilities
// ============================================================================

// PROXY & TRAFFIC INTERCEPTION DETOUR
user_pref("network.proxy.type", 0); // 0 = Direct, 1 = Manual (Easy switch for Burp/ZAP)
user_pref("security.cert_pinning.enforcement_level", 0); 
user_pref("security.pki.mitm_can_bypass_trust", true); // Trusts root certificates for debugging tools

// JAVASCRIPT & MEMORY EXPLOIT MITIGATION
user_pref("javascript.options.wasm", false); // Disables WebAssembly to block advanced side-channel attacks
user_pref("javascript.options.asmjs", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", 524288); // Allocates 512MB RAM maximum for aggressive cache testing

// FINGERPRINTING & BEACON BLOCKING
user_pref("privacy.resistFingerprinting", true);
user_pref("beacon.enabled", false); // Disables asynchronous telemetry pings when leaving pages
user_pref("browser.send_pings", false);

// ENABLE CUSTOM UI (Crucial for userChrome.css)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
