#!/bin/bash

# benchmark tool
aqua i -l

# runtime
asdf install

# npm packages
cd bun-hono
bun install
cd ..

cd node-hono
npm install
cd ..
