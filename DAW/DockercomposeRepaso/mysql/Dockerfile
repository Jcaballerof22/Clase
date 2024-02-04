FROM mysql:latest

COPY BD_sortu.sql /docker-entrypoint-initdb.d/
COPY BD_txertatu_datuak.sql /docker-entrypoint-initdb.d/

EXPOSE 3306