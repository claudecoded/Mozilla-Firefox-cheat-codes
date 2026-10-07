// ============================================================================
// FIREFOX CHEAT CODES - USER.JS FOR HACKERS & DEVS
// ============================================================================

// PRIVACY & ANTI-FINGERPRINTING (Good for OPSEC)
user_pref("privacy.resistFingerprinting", true); // Spoofs system details and canvas fingerprinting
user_pref("privacy.trackingprotection.enabled", true); // Enables native enhanced tracking protection
user_pref("geo.enabled", false); // Disables location-tracking via IP/Wi-Fi

// ADVANCED SECURITY & HARDENING
user_pref("dom.event.clipboardevents.enabled", false); // Prevents websites from knowing when you copy/paste text
user_pref("network.security.esni.enabled", true); // Forces Encrypted SNI (prevents ISPs from seeing your domain requests)
user_pref("browser.fixup.alternate.enabled", false); // Stops Firefox from guessing wrong URLs by sending them to search engines

// DEVELOPER TWEAKS (Bypassing network restrictions)
user_pref("security.cert_pinning.enforcement_level", 0); // Allows easier traffic interception (Burp Suite / OWASP ZAP)
user_pref("devtools.chrome.enabled", true); // Allows debugging the Firefox browser UI itself
user_pref("devtools.debugger.remote-enabled", true); // Enables remote debugging capabilities
