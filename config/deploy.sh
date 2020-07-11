#!/bin/bash

# clean-up previous build
rm -rf docs/static
mkdir docs/static

yarn workspace storybook build

# Build Gatsby, then move contents to public folder for publishing
yarn workspace www build
mv www/public/* docs/static
