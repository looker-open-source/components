#!/bin/bash

# Do a fresh build
npm run build --workspace @looker/icons > /dev/null

# Check if any changes are present in src

if [ -z "$(git status src --short)" ]; then
  echo "All files in packages/icons/src committed. 👍"
else
  echo "⛔️⛔️ ERROR: packages/icons/src has uncommitted changes. ⛔️⛔️"
  echo "Run \`npm run build --workspace @looker/icons\` and commit changes"
  echo ""
  git status src
  exit 100
fi
