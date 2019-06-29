#!/bin/bash

while (( "$#" )); do 
  echo Executing inside docker container
  docker exec -it funil-php /bin/sh -c "cd ../ && $1"
  shift 
done