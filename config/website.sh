#!/bin/bash

VERSION=$1

# clean-up previous build if exists
rm -rf docs/$VERSION

# Build Gatsby, then move contents to public folder for publishing
sed -i -e "s/VERSION/$VERSION/g" www/gatsby-config.js
yarn workspace www build
git checkout HEAD -- www/gatsby-config.js
mv www/public docs/$VERSION

# Build Storybooks

# @TODO Check if storybook is already built and re-use
if [ ! -d storybook/storybook-static ]; then
  yarn workspace storybook build
fi
cp -r storybook/storybook-static docs/$VERSION/storybook
