#!/bin/bash
# Install fonts from fontsource
# Usage: `npm i $(./grepfonts.sh)`
grep -Ehro "\[.*\]\(.*\)" src/* |        # Search all markdown links in src/*
    grep "fonts.google.com" |            # Get all fonts.google.com urls
    grep -o "(.*)" |                     # Remove [] brackets
    tr -d "()" |                         # Remove () brackets
    cut -f1 -d "?" |                     # Remove Url query strings
    sort -u |                            # Remove duplicates
    cut -f5 -d "/" |                     # Get Font name
    tr + - |                             # Replace + with -
    tr '[:upper:]' '[:lower:]' |         # Convert to lowercase
    xargs -x -I {} echo "@fontsource/{}" # generate npm Packages
