#!/bin/bash

echo "Delete all containers..."
docker rm -f $(docker ps -a -q)

echo "Deleting all volumes"
docker volume rm $(docker volume ls -q)

echo "Deleting all images"
docker rmi $(docker images -a -q)
