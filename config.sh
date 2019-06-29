#!/bin/bash

echo Generating .env file
cp ./src/.env.example ./src/.env

echo Generating app key
docker exec -it funil-php /bin/sh -c "cd ../ && php artisan key:generate"

# echo Make migrations
# docker exec -it funil-php /bin/sh -c "cd ../ && php artisan migrate"

# echo Make seeds
# docker exec -it funil-php /bin/sh -c "cd ../ && php artisan db:seed"