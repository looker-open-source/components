#!/bin/bash
PACKAGE_VERSION=v$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' lerna.json)
config/website.sh $PACKAGE_VERSION

# Copy to `/latest` for default usage
rm -rf docs/latest
cp -r docs/$PACKAGE_VERSION docs/latest
