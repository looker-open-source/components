#!/usr/bin/env bash
cd styleguide
aws s3 sync . s3://lens.looker.com --delete
