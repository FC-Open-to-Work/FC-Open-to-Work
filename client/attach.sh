#!/bin/bash

container_id=$(docker ps -aq -f name="frontend")

echo "Attaching to backend container '$container_id'..."
docker exec -it "$container_id" bash