#!/usr/bin/env bash

PROJECT_NAME=${PWD##*/}
SERVER_IP='118.24.17.107'

hexo clean && hexo generate

tar cvzf ./${PROJECT_NAME}.tar.gz --directory=./public .
scp ./${PROJECT_NAME}.tar.gz root@${SERVER_IP}:/data
rm -rf ./${PROJECT_NAME}.tar.gz

ssh root@${SERVER_IP} << EOF
  if [ ! -d /data/${PROJECT_NAME} ]
  then
    mkdir /data/${PROJECT_NAME}
  fi

  cd /data/${PROJECT_NAME}
  tar xvzf ../${PROJECT_NAME}.tar.gz
EOF
