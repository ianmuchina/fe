#!/bin/bash
# Download all data from advice generator api
echo "[" >data.json
for run in {1..224}; do
    curl "https://api.adviceslip.com/advice/$run" >>data.json
    printf ",\n" >>data.json
done
echo "{}]" >>data.json
