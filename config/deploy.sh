#!/bin/bash

# clean-up previous build
rm -rf docs/static

# Build Storybooks
yarn storybooks-build
yarn workspace storybook build

# Build Gatsby, then move contents to public folder for publishing
yarn workspace www build

# Move everything into place...
mv www/public docs/static

# Move everything into place...
mv storybook/build_static docs/static/storybook

# sub-storybook (TODO)
# sub-storybook (TODO)
# sub-storybook (TODO)
