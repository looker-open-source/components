#!/usr/bin/env bash

cd $(dirname $0)/..
WORKING_DIR=$PWD
set -e

ci/setup.sh
yarn test
