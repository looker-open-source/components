#!/bin/bash
PACKAGE_VERSION=v$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' lerna.json)
config/website.sh $PACKAGE_VERSION
ln -s docs/$PACKAGE_VERSION docs/latest
