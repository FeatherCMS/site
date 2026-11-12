---
category: "getting-started"
title: "Run Feather CMS locally"
description: "Run Feather CMS in Docker or build and run it locally with Swift."
order: 1
---

# Run Feather CMS locally

Run the whole stack in Docker, or build Feather CMS with Swift and run it locally while Docker handles PostgreSQL and Floci.

## Before you start

You'll need Git and Docker. For the local build, install Swift 6.3 or later too.

## Run Feather CMS in Docker

Clone the repository, move into its root directory, then start the stack:

```sh
git clone https://github.com/feathercms/feather.git
cd feather
docker compose up --build
```

The first run builds the application images. When it's ready, open the web app at <http://localhost:3456>. The API is at <http://localhost:8080>.

Press `Ctrl-C` to stop the running stack. To remove its containers and network, run:

```sh
docker compose down
```

Docker keeps the named volumes, so your database and local service data are still there next time.

## Run Feather CMS locally

From the repository root, run:

```sh
make local
```

This builds Feather CMS and runs the Migrator, Server, Worker, WebApp, and WebStatic processes directly on your host. PostgreSQL and Floci stay in Docker. Open the web app at <http://localhost:3456>. The API is at <http://localhost:8080>.

Press `Ctrl-C` to stop Feather CMS. PostgreSQL and Floci keep running in Docker. To stop them too, run `docker compose down` from the repository root. Docker preserves the named volumes.

For more commands, see the [Make commands guide](https://github.com/feathercms/feather/blob/main/docs/05-make-commands.md). The [environment configuration guide](https://github.com/feathercms/feather/blob/main/docs/04-environment.md) covers the available settings.
