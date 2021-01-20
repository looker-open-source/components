#!/bin/bash

VERSION=$1

# clean-up previous build if exists
rm -rf docs/$VERSION

# Build Gatsby, then move contents to public folder for publishing
sed -i -e "s/VERSION/$VERSION/g" www/gatsby-config.js
yarn workspace www build
mv www/public docs/$VERSION

# Build Storybooks
yarn workspace storybook build
mv storybook/storybook-static docs/$VERSION/storybook
