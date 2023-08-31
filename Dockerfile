FROM postgres:15.1-alpine

LABEL author="Walter Ugalde A"
LABEL description="Base de datos para proyecto nestjs"
LABEL version="1.0"

COPY ./db/sql/*.sql /docker-entrypoint-initdb.d/