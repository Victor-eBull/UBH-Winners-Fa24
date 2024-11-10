FROM alpine:latest

# Install necessary packages
RUN apk update && \
    apk add --no-cache \
    vim iproute2 coreutils bash apache2

RUN service apache2 start

# Copy the filesystem_challenge directory to /tmp
COPY ./filesystem_challenge /tmp

# Run the setup script & remove after
RUN bash /tmp/setup.sh
RUN rm -rf /tmp/*

RUN rm -rf /opt /mnt /srv 

RUN echo "guest::1000:1000:Guest:/forest:/bin/bash" > /etc/passwd && \
    echo "guest::18474:0:99999:7:::" > /etc/shadow

CMD ["sleep", "infinity"]
