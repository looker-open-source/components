#!/bin/bash
PACKAGE_VERSION=v$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' packages/components/package.json)
bin/website.sh $PACKAGE_VERSION
bin/website.sh latest
