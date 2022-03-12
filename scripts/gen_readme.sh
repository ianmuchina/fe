#!/bin/bash

# Generate README.md
pnpm run docs:build

# Format
pnpm exec prettier -w README.md

# Commit File if there are changes
git add -f README.md &&
    git commit -m "Update README" \
        --author="gh <41898282+github-actions@users.noreply.github.com>" &&
    git push origin main || echo "No Changes"
