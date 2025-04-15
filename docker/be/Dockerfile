FROM php:8.4-fpm-alpine AS builder
WORKDIR /var/www/html
RUN addgroup -g 1000 appgroup && \
    adduser -u 1000 -G appgroup -s /bin/sh -D appuser
RUN apk add --no-cache \
    bash \
    zip \
    unzip \
    curl \
    libpng \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    oniguruma-dev \
    libxml2-dev \
    icu-dev \
    libzip-dev \
    git \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl intl
COPY --from=composer:2.8 /usr/bin/composer /usr/bin/composer

FROM builder AS final
USER appuser
WORKDIR /var/www/html
EXPOSE 9000
CMD ["php-fpm"]
