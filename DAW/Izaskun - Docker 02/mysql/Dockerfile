FROM mysql:8.2

COPY BD_sortu.sql /docker-entrypoint-initdb.d/
COPY BD_txertatu_datuak.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
CMD ["mysqld", "--daemonize=0"]