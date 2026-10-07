# 🛠️ Hidden DevTools Tricks (F12)

The Firefox Developer Tools panel possesses superpowers unknown to the average user.

### ⚡ The Console as an Exploration Shell
Open the Web Console (F12 -> Console) and use these native command-line shortcuts:
*   **`$$('css-selector')`**: A native shortcut equivalent to `document.querySelectorAll()`. Returns a clean array of all matching DOM elements.
*   **`inspect($0)`**: Type this after selecting any element to instantly jump to its exact node inside the HTML Inspector.
*   **`copy(object)`**: Copies string representations of complex objects or DOM elements directly to your clipboard.

### 🕵️‍♂️ Hidden Tools inside the Inspector
1. **3D View (Layer Visualization):** Highly useful for identifying hidden elements (such as invisible clickjacking overlays or malicious hidden inputs). Go to DevTools Settings and check the options for rendering layers.
2. **Pseudo-class State Modifier:** On the right pane of the Inspector, click the `:hov` button. You can force states like `:hover`, `:active`, `:focus`, and `:visited` on any element to test hidden behaviors without physically interacting with the webpage.

### 🌐 Hacks within the Network Panel
*   **Request URL Blocking:** Right-click any script, style sheet, or API request in the Network panel and select **"Block URL"**. This simulates what happens if a tracking script or CDN falls offline, perfect for resilience testing.
*   **Edit and Reend:** Select any HTTP request made by the page, right-click it, and choose **"Edit and Resend"**. You can modify headers, POST parameters, cookies, and trigger the request again without needing external tools like Postman or Curl.
