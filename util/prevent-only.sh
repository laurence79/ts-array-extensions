#!/bin/sh

if grep -nr "[describe|context|it]\.only" "$@" ; then
  exit 1
fi
