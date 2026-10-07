#!/bin/bash
# ============================================================================
# Firefox Cheat Codes - Automated Environment Deployer
# ============================================================================

echo "🦊 Initializing Firefox Hardening & Dev Environment..."

# Detect Firefox Profile Directory
if [ "$(uname)" == "Darwin" ]; then
    FF_DIR="$HOME/Library/Application Support/Firefox/Profiles"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    FF_DIR="$HOME/.mozilla/firefox"
else
    echo "❌ Unsupported OS for automated installation. Please copy files manually."
    exit 1
fi

# Find the default/active profile
PROFILE=$(grep -E '^Path=' "$FF_DIR/profiles.ini" | head -n 1 | cut -d= -f2)

if [ -z "$PROFILE" ]; then
    echo "❌ Active Firefox profile not found."
    exit 1
fi

TARGET_DIR="$FF_DIR/$PROFILE"
echo "🎯 Target Profile Detected: $TARGET_DIR"

# Copy configurations
cp config/user.js "$TARGET_DIR/"
mkdir -p "$TARGET_DIR/chrome"
cp config/chrome/userChrome.css "$TARGET_DIR/chrome/"

echo "✅ Environment successfully deployed! Please restart Firefox."
