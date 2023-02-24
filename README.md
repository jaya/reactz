# The Resident Zombie Front-end App

## Prerequisites

- Docker (Docker Engine)
- docker-compose

## Development

First, run the development server:

```bash
# Build dev
# Note: Keep v1 command until "Use Docker Compose v2" is enabled by default for Docker Desktop for Linux
# Docker aliases `docker-compose` (v1 command) to `docker compose` (v2 command), but not the other way around
docker-compose build

# Up dev
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production

Multistage builds are highly recommended in production. Combined with the Next [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) feature, only `node_modules` files required for production are copied into the final Docker image.

First, run the production server (Final image approximately 110 MB).

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build prod
docker-compose -f docker-compose.prod.yml build

# Up prod in detached mode
docker-compose -f docker-compose.prod.yml up -d
```

Alternatively, run the production server without without multistage builds (Final image approximately 1 GB).

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build prod without multistage
docker-compose -f docker-compose.prod-without-multistage.yml build

# Up prod without multistage in detached mode
docker-compose -f docker-compose.prod-without-multistage.yml up -d
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
# Stop all running containers
docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

# Free space
docker system prune -af --volumes
```
