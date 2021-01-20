#!/bin/bash
PACKAGE_VERSION=v$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' lerna.json)
config/website.sh $PACKAGE_VERSION
config/website.sh latest
