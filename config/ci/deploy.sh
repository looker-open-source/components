#!/usr/bin/env bash
./build.sh

# push to the CDN bucket
aws s3 cp ../../docs/static s3://looker-components/ --recursive --storage-class STANDARD --grants full=emailaddress=TODO read=uri=http://acs.amazonaws.com/groups/global/AllUsers --include "*"
