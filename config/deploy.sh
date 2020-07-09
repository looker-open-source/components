#!/bin/bash

mkdir -p public

yarn workspace storybook build
yarn workspace www build
mv www/public/* public

echo \"components.looker.com\" > public/CNAME
yarn gh-pages -d public -r https://$GITHUB_TOKEN@github.com/looker-open-source/components.git
