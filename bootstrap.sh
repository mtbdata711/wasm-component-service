#!/bin/bash

curl -o script.sh https://get.extism.org/cli
sh script.sh -y
rm script.sh
extism lib install latest
sh install.sh
composer install
chown -R www-data:www-data /var/www/