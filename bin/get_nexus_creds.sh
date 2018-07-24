#!/usr/bin/env bash

red="\033[31m"
reset="\033[0m"
gradleFile="${HOME}/.gradle/gradle.properties"

if [[ ! -f $gradleFile && -z "${NEXUS_USER}" && -z "${NEXUS_PASS}" ]]; then
  >&2 printf "$red> Could not find the gradle.properties file to load Nexus user information from.$reset\n";
  >&2 printf "$red> Please visit https://github.com/looker/helltool#dependencies for information enabling our Nexus integration.$reset\n";
  exit 1;
fi

case $1 in
user)
  if [ -z "${NEXUS_USER}" ]; then
    nexusUser=$(grep '^\s*nexusUser=' $gradleFile | awk -F'=' '{print $2}')
  else
    nexusUser=$NEXUS_USER
  fi
  echo $nexusUser
  exit 0
  ;;

pwd)
  if [ -z "${NEXUS_PASS}" ]; then
    nexusPass=$(grep '^\s*nexusPass=' $gradleFile | awk -F'=' '{print $2}')
  else
    nexusPass=$NEXUS_PASS
  fi
  echo $nexusPass
  exit 0
  ;;

esac
