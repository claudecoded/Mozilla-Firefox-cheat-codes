<img width="4096" height="1373" alt="image" src="https://github.com/user-attachments/assets/40357aed-3d54-40ba-a05c-9f21ce182790" />

# 🦊 Firefox Cheat Codes Framework

An advanced, executable environment to weaponize Mozilla Firefox for Security Engineering, Penetration Testing, and Deep Web Development. 

## 🛠️ Automated Setup
Clone the repository and run the automated bash execution file to provision your current Firefox profile:
```bash
chmod +x install.sh
./install.sh
```

## ⚙️ Core Architecture
*   `/config/user.js`: Automates browser engine modification (disables telemetry, alters TLS parameters for proxies, shuts down WASM vectors).
*   `/config/chrome/`: Custom rendering UI style to maximize screen workspace when performing audits.
*   `/scripts/`: Executable diagnostic scripts ready to run inside the native Web Console shell.
