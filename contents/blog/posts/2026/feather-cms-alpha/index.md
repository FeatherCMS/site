---
type: post
title: "Feather CMS 1.0.0-alpha.1 is now available"
slug: feather-cms-first-alpha-is-now-available
description: "Try Feather CMS 1.0.0-alpha.1: run the full stack in Docker or build the CMS locally with Swift."
publication: "2026-11-12 09:00:00"
tags:
    - cms
authors:
    - tibor-bodecs
featured: true
---

Today we're making [Feather CMS 1.0.0-alpha.1](https://github.com/FeatherCMS/feather/releases/tag/1.0.0-alpha.1) available to try. Feather is a Swift CMS built on the [Feather Framework](https://feather-framework.com/). You can run it locally, take a look around the admin, and see how the modules and APIs fit together. 🪶

This is an alpha, so features and APIs may change. If you run into a bug or something that feels unfinished, let us know.

For now, the modules live in the main repository alongside Feather Core. Once we reach beta, we'll move them into their own repositories. We also plan to add a CLI for code generation and agentic development workflows.

## Run Feather CMS

You can run the whole stack in Docker, or build Feather CMS with Swift and run it locally while Docker handles PostgreSQL and [Floci](https://floci.io/aws/). Floci provides local AWS-compatible services for object storage, email, and media delivery. You'll need Git and Docker; the local workflow also requires Swift 6.3 or later.

First, clone the repository and move into its root directory:

```sh
git clone https://github.com/feathercms/feather.git
cd feather
```

### Run Feather CMS in Docker

From the repository root, start the stack:

```sh
docker compose up --build
```

Once it's running, open the web app at <http://localhost:3456>. The API is at <http://localhost:8080>. 🚀

Press `Ctrl-C` to stop the stack, then run `docker compose down` to remove its containers and network. Named data volumes are kept.

### Run Feather CMS locally

From the repository root, run:

```sh
make local
```

This builds Feather CMS and runs the Migrator, Server, Worker, WebApp, and WebStatic processes directly on your host. PostgreSQL and Floci stay in Docker. Open the web app at <http://localhost:3456> and the API at <http://localhost:8080>.

Press `Ctrl-C` to stop Feather CMS. PostgreSQL and Floci will keep running. To stop them too, run `docker compose down` from the repository root. Docker keeps the named data volumes. See the [Make commands guide](https://github.com/feathercms/feather/blob/main/docs/05-make-commands.md) for more development commands.

If you're deploying to a server, the repository has a [guide for installing Feather CMS on Ubuntu 26.04](https://github.com/feathercms/feather/blob/main/deployment/README.md).

## Sign in to the admin

The seed data creates a root admin account:

- Email: `mail.tib@gmail.com`
- Password: `root`

These credentials are for local testing. Change the password before making the instance available outside your machine. 😅

## Help shape the alpha

I'm curious what you'll build with Feather CMS. If you hit a bug, [open an issue](https://github.com/feathercms/feather/issues); for questions or ideas, [join us on Discord](https://discord.gg/wMSkxCUXAD). Pull requests are welcome too, and the [project docs](https://github.com/feathercms/feather/tree/main/docs) live in the repository.
