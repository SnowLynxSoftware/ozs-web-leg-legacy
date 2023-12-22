# OpenZooSim Web

The Official OpenZooSim Web Application, a game by SnowLynxSoftware.

## Table of Contents

- Architecture Overview
- Local Dev Setup

### Architecture Overview

The OpenZooSim (OZS) application is built with a
monolithic approach that is based loosely on the
principles discussed in [Radical Simplicity](https://www.radicalsimpli.city/). You can read more about it yourself, but the general idea is that we are building the simplest monolithic system possible with a minimal set of dependencies.

The entire application is built on top of [NodeJS](https://nodejs.org/), using [Typescript](https://www.typescriptlang.org/). The API is using [ExpressJS](https://expressjs.com/), which connects to a [Postgres](https://www.postgresql.org/) backend. The Express backend also serves up the client frontend which is using the [Eta](https://eta.js.org/) Template Engine for its views. The entire application sits behind [NGINX](https://www.nginx.com/) for SSL termination, caching, and reverse proxy.

### Local Dev Setup

You will need a minimum few pre-reqs first:

- [NodeJS v20+](https://nodejs.org/)
- Access to a Postgres DB

Copy the example config file in the root of the project and fill in the required properties as listed.

```bash
cp ./.env.example ./.env
```

Install All Dependencies

```bash
npm i
```

Run The Dev Server

```bash
npm start
```
