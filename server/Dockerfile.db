FROM mysql/mysql-server:latest

ENV MYSQL_ROOT_PASSWORD=opentowork

EXPOSE 3306

COPY ./sql-scripts/init.sql /docker-entrypoint-initdb.d/

CMD ["mysqld"]
