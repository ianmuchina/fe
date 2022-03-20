#!/bin/bash

# Install fonts from fontsource
# Usage: `npm i $(./grepfonts.sh)`

# List all fonts by reading style_guide.md file
list() {
    grep -Ehro "\[.*\]\(.*\)" src/* | # Search all markdown links in src/*
        grep "fonts.google.com" |     # Get all fonts.google.com urls
        grep -o "(.*)" |              # Remove [] brackets
        tr -d "()" |                  # Remove () brackets
        cut -f1 -d "?" |              # Remove Url query strings
        sort -u |                     # Remove duplicates
        cut -f5 -d "/" |              # Get Font name
        tr + - |                      # Replace + with -
        tr '[:upper:]' '[:lower:]'    # Convert to lowercase
}

# Install fonts using fontsource
install() {
    # Echo packages to install
    list | sed -e 's/^/@fontsource\//' | xargs echo pnpm install
    # Install packages
    list | sed -e 's/^/@fontsource\//' | xargs pnpm install
}

# Update font packages
update() {
    # Echo packages to upgrade
    list | sed -e 's/^/@fontsource\//' | xargs echo pnpm install
    # Upgrade packages
    list | sed -e 's/^/@fontsource\//' | xargs pnpm install
}

# Interactive install
i-install() {
    list | fzf | xargs -I{} bash -c "echo Installing {} font && pnpm install @fontsource/{}"
}

"$@"
