#!/usr/bin/env bash
yarn workspace www build
cd packages/www/public
aws s3 sync . s3://lens.looker.com --delete
