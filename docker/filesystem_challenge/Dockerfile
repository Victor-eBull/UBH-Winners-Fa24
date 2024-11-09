FROM ubuntu:minimal
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    vim iproute2 coreutils && \
    rm -rf /var/lib/apt/lists/*

COPY ./filesystem_challenge /tmp

RUN bash /tmp/setup.sh

RUN rm /tmp/setup.sh

CMD ["/bin/bash"]
