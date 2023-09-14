#!/bin/bash

# Define the Docker container name
container_name="mysql_docker"

# Check if the container is running
if docker ps -aq -f name="$container_name" | grep -q .; then
    # Container is running, stop and remove it
    echo "Stopping and removing existing container '$container_name'..."
    docker stop "$container_name"
    docker rm "$container_name"
fi

# Build the Docker image
echo "Building Docker image 'my-mysql-image'..."
docker build -t my-mysql-image .

# Run a new container
echo "Starting a new container named '$container_name'..."
docker run --name "$container_name" -d -p 3306:3306 my-mysql-image
