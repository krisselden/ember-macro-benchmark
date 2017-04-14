#!/usr/bin/env bash
echo $1
git_rev=$1
echo $git_rev
pushd ../ember.js
git checkout $git_rev
git clean -f
sed -i.old 's/null/false/g' features.json && rm features.json.old
yarn
BUILD_TYPE=alpha yarn run build
git checkout features.json
popd
mkdir -p "embers/$git_rev"
cp ../ember.js/dist/ember.min.js "embers/$git_rev"
