FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y iproute2 iputils-ping && \
    rm -rf /var/lib/apt/lists/*

CMD ["sleep", "infinity"]

# Use the official MySQL image
FROM mysql:8.0

# Set environment variables for the database (optional)
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=mydatabase

# Expose the MySQL default port
EXPOSE 3306

# Start the MySQL server
CMD ["mysqld"]
