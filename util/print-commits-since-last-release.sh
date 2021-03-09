#!/bin/sh

git log $(git describe --tags --abbrev=0)..HEAD --pretty=format:"%s"