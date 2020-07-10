#!/bin/bash

# clean-up previous build
rm -rf docs/static
mkdir docs/static

# Storybook static web site build
yarn workspace storybook build

# Gatsby static web site build
yarn workspace www build
# Move Gatsby build assets to docs folder for publishing
mv www/public/* docs/static
