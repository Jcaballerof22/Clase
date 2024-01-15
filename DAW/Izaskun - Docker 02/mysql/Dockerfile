FROM mysql:8.2

# .sql scriptak /docker-entrypoint-initdb.d direktorioan kopiatzen dugu
COPY BD_sortu.sql /docker-entrypoint-initdb.d/
COPY BD_txertatu_datuak.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
CMD ["mysqld", "--daemonize=0"]