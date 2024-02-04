FROM php:apache

COPY index.php /var/www/html/
COPY estiloak.css /var/www/html/

RUN docker-php-ext-install mysqli

EXPOSE 80

CMD ["apache2-foreground"]