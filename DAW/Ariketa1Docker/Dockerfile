FROM ubuntu:latest

RUN \
	apt-get update \
	&& apt-get install -y nano \
	&& apt install -y apache2

RUN \
	a2enmod rewrite \
	&& a2enmod ssl\
	&& a2enmod authz_core \
	&& a2enmod rewrite \
	&& rm /var/www/html/index.html

COPY index.html /var/www/html/

RUN service apache2 restart
RUN mkdir /var/www/html/jon

RUN mkdir /var/www/html/jon/pribatua

COPY .htaccess /var/www/html/jon/pribatua/
	
RUN htpasswd -b -c /etc/apache2/.htpasswd administratzaile admin123

RUN \
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/www.jon.org.key -out /etc/ssl/certs/www.jon.org.crt -subj "/C=ES/ST=Bizkaia/L=Santurtzi/O=SanJorge/CN=CommonName"

COPY jon.conf /etc/apache2/sites-available/

RUN a2ensite jon.conf
RUN service apache2 restart

EXPOSE 80
EXPOSE 443

CMD ["apache2ctl", "-D", "FOREGROUND"]