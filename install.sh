#!/usr/bin/env bash

DIR_BOOTSTRAP_CACHE="${PWD}/bootstrap/cache"
if [ -d "$DIR_BOOTSTRAP_CACHE" ]; then
  sudo chmod -R 777 "$DIR_BOOTSTRAP_CACHE"
  echo "Permissions change for files in ${DIR_BOOTSTRAP_CACHE}"
else
  echo "Error: folder not find ${DIR_BOOTSTRAP_CACHE}"
fi

DIR_STORAGE="${PWD}/storage"
if [ -d "$DIR_STORAGE" ]; then
  sudo chmod -R 777 "$DIR_STORAGE"
  echo "Permissions change for files in ${DIR_STORAGE}"
else
  echo "Error: folder not find ${DIR_STORAGE}"
fi

DIR_PUBLIC="${PWD}/public"
if [ -d "$DIR_PUBLIC" ]; then
  sudo chmod -R 777 "$DIR_PUBLIC"
  echo "Permissions change for files in ${DIR_PUBLIC}"
else
  echo "Error: folder not find ${DIR_PUBLIC}"
fi

composer install

npm i

php artisan migrate:refresh

php artisan migrate

php artisan passport:install

php artisan config:clear

