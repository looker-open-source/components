#!/usr/bin/env bash

cd $(dirname $0)/..
WORKING_DIR=$PWD
set -e

NPMRC_FILE="$WORKING_DIR/.npmrc"

if [ -f $NPMRC_FILE ]; then
  exit 0
fi

nexusUser=$(bin/get_nexus_creds.sh user)
nexusPass=$(bin/get_nexus_creds.sh pwd)
NPM_AUTH=$(echo -n "$nexusUser:$nexusPass" | openssl base64)

if [ ! -f $NPMRC_FILE ]; then
  >&2 echo "[bin/create_npmrc.sh] Generating .npmrc file."
  touch $NPMRC_FILE
(
cat << EOF
; WARNING YOU ARE EDITING AN AUTOMATICALLY GENERATED FILE!
; .npmrc is created by the bin/npmrc_generate script automatically from bin/prepare and bin/yarn
; This file may be deleted or modified at any time. Consider adding npmrc entries to your
; \$HOME/.npmrc file, or modifying bin/npmrc_generate.

registry=https://nexusrepo.looker.com/repository/looker-npm-group/
always-auth=true
email=ops@looker.com
_auth=$NPM_AUTH
EOF
) > $NPMRC_FILE
fi
