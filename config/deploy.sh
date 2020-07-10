#!/bin/bash

# clean-up previous build
rm -rf public
mkdir public

yarn workspace storybook build

# Build Gatsby, then move contents to public folder for publishing
yarn workspace www build
mv www/public/* public

echo \"components.looker.com\" > public/CNAME
yarn gh-pages -d public -r https://$GITHUB_TOKEN@github.com/looker-open-source/components.git
