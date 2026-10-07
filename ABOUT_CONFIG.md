# ⚙️ `about:config` Cheat Codes

Type `about:config` in your Firefox address bar, accept the warning, and use the search bar to find and modify the values below:

### 🔬 Reverse Engineering & Inspection
*   **`view_source.editor.path`**: Set the path to your favorite external code editor (e.g., `/usr/bin/code` or `sublime`). When you right-click a page and choose "View Page Source", it will open in your external IDE.
*   **`javascript.options.wasm`**: Toggle to `false` if you want to completely disable WebAssembly on web pages to mitigate modern browser-based memory exploits.
*   **`network.http.spdy.enabled.http2`**: Toggle to `false` to force a protocol downgrade from HTTP/2 to HTTP/1.1. This makes reading raw, uncompressed headers much easier in interception proxies.

### 🔓 Bypassing Annoying Restrictions
*   **`dom.allow_cut_copy`**: Set to `true` to force Copy/Paste functionality on banking websites or forms that attempt to block clipboard actions.
*   **`media.autoplay.default`**: Set to `5` to absolutely block all media (audio and video) from autoplaying until you explicitly click on them.
