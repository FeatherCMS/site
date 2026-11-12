---
category: "getting-started"
title: "Run Feather CMS locally"
description: "Run Feather CMS in Docker or on your machine, with PostgreSQL and Floci in Docker."
order: 1
---

# Run Feather CMS locally

You can run Feather CMS in Docker, or run it on your machine while Docker runs PostgreSQL and Floci. Both options are ready for local development.

## Before you start

You need Git and Docker. To run Feather CMS on your machine, you'll also need Swift 6.3 or later.

## Run Feather CMS in Docker

Clone the Feather CMS repository, move into its root directory, then build and start the application and its services:

```sh
git clone https://github.com/feathercms/feather.git
cd feather
docker compose up --build
```

The first run builds the application images. When the services are ready, open the web app at <http://localhost:3456>. The backend API is available at <http://localhost:8080>.

Press `Ctrl-C` to stop the running stack. To remove its containers and network, run:

```sh
docker compose down
```

Named data volumes are kept, so the database and local service data remain available the next time you start Feather.

## Run Feather CMS on your machine

From the repository root, run:

```sh
make local
```

This builds and starts Feather CMS on your machine, including the Migrator, Server, Worker, WebApp, and WebStatic processes. PostgreSQL and Floci continue to run in Docker. The web app is available at <http://localhost:3456>, and the backend API is at <http://localhost:8080>.

Press `Ctrl-C` to stop Feather CMS. PostgreSQL and Floci keep running in Docker. To stop those services too, run `docker compose down` from the repository root. Named volumes are preserved.

For other development commands and environment settings, see the [Make commands guide](https://github.com/feathercms/feather/blob/main/docs/05-make-commands.md) and [environment configuration](https://github.com/feathercms/feather/blob/main/docs/04-environment.md).
