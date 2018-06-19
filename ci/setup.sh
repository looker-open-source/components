#!/usr/bin/env bash

case $1 in
create_npmrc)
  echo "CREATE NPMRC: Setup .npmrc"

  : "${NEXUS_USER:?NEXUS_USER must not be empty}"
  : "${NEXUS_PASS:?NEXUS_PASS must not be empty}"

  AUTH=`echo -n "${NEXUS_USER}:${NEXUS_PASS}" | openssl base64`

  NPMRC="registry=https://nexusrepo.looker.com/repository/looker-npm-group/
always-auth=true
_auth=${AUTH}"

  echo "${NPMRC}" > '.npmrc'
  ;;

cleanup_npmrc)
  echo "CLEANUP"
  rm .npmrc
  ;;

*)
    echo "Usage: setup-npmrc.sh SECTION"
    echo
    echo "CI Scripts"
    echo
    echo "SECTION               DESCRIPTION"
    echo "-------               -----------"
    echo "create_npmrc          Run code which prepares the source code before attempting build"
    echo "cleanup_npmrc         Run code cleans up once build is complete"
    exit 1
    ;;

esac
