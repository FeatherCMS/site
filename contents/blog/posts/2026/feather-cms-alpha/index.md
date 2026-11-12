---
type: post
title: "Feather CMS 1.0.0-alpha.1 is now available"
slug: feather-cms-first-alpha-is-now-available
description: "Run Feather CMS in Docker or on your machine, explore its modules, and help shape what comes next."
publication: "2026-11-12 09:00:00"
tags:
    - cms
authors:
    - tibor-bodecs
featured: true
---

Starting today, [Feather CMS 1.0.0-alpha.1](https://github.com/feathercms/feather/tree/1.0.0-alpha.1) is available to try. Feather is a Swift CMS built on the [Feather Framework](https://feather-framework.com/). This alpha gives you a running application and a chance to explore its modules, APIs, and web admin. 🪶

The project is still evolving, so features and APIs may change between releases. If something feels rough or doesn't work as expected, we'd love to hear about it.

Once Feather reaches beta, the modules will move into their own repositories. For now, they live in the main repository alongside the Feather Core library. We also plan to provide a command-line interface (CLI) to speed up code generation and support agentic development workflows.

## Run Feather CMS

You can run Feather CMS in Docker, or run it on your machine while Docker handles PostgreSQL and [Floci](https://floci.io/aws/). Floci provides local AWS-compatible services for object storage, email, and media delivery. You'll need Git and Docker; running Feather CMS on your machine also requires Swift 6.3 or later.

First, clone the repository and move into its root directory:

```sh
git clone https://github.com/feathercms/feather.git
cd feather
```

### Run Feather CMS in Docker

Build and start the application and its services:

```sh
docker compose up --build
```

Open the web app at <http://localhost:3456>. The backend API is available at <http://localhost:8080>. 🚀

Press `Ctrl-C` to stop the stack, then run `docker compose down` to remove its containers and network. Named data volumes are kept.

### Run Feather CMS on your machine

From the repository root, run:

```sh
make local
```

This builds and starts Feather CMS on your machine, including the Migrator, Server, Worker, WebApp, and WebStatic processes. PostgreSQL and Floci continue to run in Docker. Open the web app at <http://localhost:3456> and the backend API at <http://localhost:8080>.

Press `Ctrl-C` to stop Feather CMS. PostgreSQL and Floci keep running in Docker. Run `docker compose down` from the repository root when you want to stop those services too. Named data volumes are preserved. For other development commands, see the [Make commands guide](https://github.com/feathercms/feather/blob/main/docs/05-make-commands.md).

Want to run Feather on a server? The repository also has a [deployment guide](https://github.com/feathercms/feather/blob/main/deployment/README.md) for installing it natively on Ubuntu 26.04.

## Sign in to the admin

The initial database seed creates a root admin account:

- Email: `mail.tib@gmail.com`
- Password: `root`

These fixed credentials are for local testing. Change the password before exposing an instance outside your machine.

## Help shape the alpha

This is an early release, and your feedback can help us decide what to improve next. [Open an issue](https://github.com/feathercms/feather/issues) to report a problem or suggest an idea, or [join the Feather Discord](https://discord.gg/wMSkxCUXAD) to talk with us. You can also explore the [project documentation](https://github.com/feathercms/feather/tree/main/docs) and send a pull request.
