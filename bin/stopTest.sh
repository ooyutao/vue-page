#!/usr/bin/env bash

baseDir="$(cd "$(dirname "$0")"; pwd)"

nodebin="/export/local/node/bin/node"
pm2bin="/export/local/pm2/bin/pm2"


export PATH=$PATH:/export/local/node/bin
export NODE_ENV=production
export PORT=3000

$nodebin $pm2bin stop 'dt_web'
$nodebin $pm2bin delete 'dt_web'
