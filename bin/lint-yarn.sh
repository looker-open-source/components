#!/bin/bash

# Do a fresh build
yarn install
yarn deduplicate

# Check if any changes are present

if [ -z "$(git status yarn.lock --short)" ]
then
  echo "yarn.lock is up-to-date 👍"
else
  echo "⛔️⛔️ ERROR: yarn.lock reflects uncommitted changes. ⛔️⛔️"
  echo "Run \`yarn install\` & \`yarn deduplicate\` and commit changes"
  echo ""
  git status yarn.lock
  exit 100
fi
