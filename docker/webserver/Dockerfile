FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y iproute2 iputils-ping apache2 && \
    rm -rf /var/lib/apt/lists/*

# Modify Apache to listen on port 8080
RUN sed -i 's/^Listen 80/Listen 8080/' /etc/apache2/ports.conf
COPY ./webserver/index.html /var/www/html/

EXPOSE 8080

CMD ["apache2ctl", "-D", "FOREGROUND"]
