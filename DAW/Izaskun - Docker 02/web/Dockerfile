FROM php:apache

RUN docker-php-ext-install mysqli

RUN apt-get update && \
    apt-get install -y default-mysql-client

EXPOSE 80
EXPOSE 443

CMD ["apache2ctl", "-D", "FOREGROUND"]