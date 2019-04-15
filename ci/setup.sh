#!/usr/bin/env bash
. ~/.nvm/nvm.sh
nvm install-latest-npm
nvm install

yarn npmrc
yarn install
