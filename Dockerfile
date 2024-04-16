FROM php:8.1-apache

ENV XDEBUG_PORT 9003
ENV XDEBUG_SESSION docker

# install xdebug for php 8.1
RUN pecl install xdebug-3.1.2 && docker-php-ext-enable xdebug

RUN echo "xdebug.start_with_request=yes" >> /usr/local/etc/php/conf.d/xdebug.ini && \
    echo "xdebug.client_port=${XDEBUG_PORT}" >> /usr/local/etc/php/conf.d/xdebug.ini && \
    echo "xdebug.session=${XDEBUG_SESSION}" >> /usr/local/etc/php/conf.d/xdebug.ini

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# install git
RUN apt-get update && apt-get install -y git

# enable zip
RUN apt-get install -y libzip-dev && docker-php-ext-install zip

# enable ffi
RUN apt-get install -y libffi-dev && docker-php-ext-install ffi
RUN echo 'ffi.enable=On' >> /usr/local/etc/php/conf.d/docker-php-ext-ffi.ini

# install nvm
RUN apt-get update && apt-get install -y curl && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash