#!/bin/bash
# use this once after a fresh npm install
# if you `npm update` and ng2-charts is updated, this may not work anymore
THIS="$(readlink -fn "$0")"
pushd "$(dirname "$THIS")"
patch node_modules/ng2-charts/charts/charts.js <charts.js.diff
popd