---
type: post
title: "Feather CMS 1.0.0-alpha.1 is available"
description: "Run the first Feather CMS alpha with Docker Compose or Swift on your machine, explore its modules, and help shape what comes next."
publication: "2026-11-12 09:00:00"
tags:
    - cms
authors:
    - tibor-bodecs
featured: true
---

Starting today, Feather CMS 1.0.0-alpha.1 is available to try. Feather is a Swift CMS built on the Feather Framework. This alpha gives you a running application and a chance to explore its modules, APIs, and web admin.

The project is still evolving, so features and APIs may change between releases. If something feels rough or doesn't work as expected, we'd love to hear about it.

## Run Feather CMS

You can run the full stack in Docker Compose, or run Feather's Swift application processes on your machine while Docker runs the supporting services. Both workflows start PostgreSQL and Floci locally. You'll need Git and Docker with Compose; the local Swift workflow also requires Swift 6.3 or later.

First, clone the repository and move into its root directory:

```sh
git clone https://github.com/feathercms/feather.git
cd feather
```

### Run the full stack in Docker

Build and start the application and its services:

```sh
docker compose up --build
```

Open the web app at <http://localhost:3456>. The backend API is available at <http://localhost:8080>.

Press `Ctrl-C` to stop the stack, then run `docker compose down` to remove its containers and network. Named data volumes are kept.

### Run the Swift processes on your machine

From the repository root, run:

```sh
make local
```

This builds and runs the Migrator, Server, Worker, WebApp, and WebStatic processes on your machine. PostgreSQL and Floci run in Docker. Open the web app at <http://localhost:3456> and the backend API at <http://localhost:8080>.

Press `Ctrl-C` to stop the application processes. The Docker services keep running. Run `docker compose down` from the repository root when you want to stop those services too. Named data volumes are preserved. For other development commands, see the [Make commands guide](https://github.com/feathercms/feather/blob/main/docs/05-make-commands.md).

## Help shape the alpha

This is an early release, and your feedback can help us decide what to improve next. [Open an issue](https://github.com/feathercms/feather/issues) to report a problem or suggest an idea, or [join the Feather Discord](https://discord.gg/wMSkxCUXAD) to talk with us. You can also explore the [project documentation](https://github.com/feathercms/feather/tree/main/docs) and send a pull request.
