#!/bin/bash

git checkout main
git pull
yarn install

yarn lerna version \
  --conventional-commits \
  --conventional-graduate \
  --no-private

# NOTE: Build must happen after `lerna version` so that postbuild script
# `package.json` files reflect the new version
yarn build

yarn lerna publish from-package \
  --pre-dist-tag=canary \
  --contents lib
