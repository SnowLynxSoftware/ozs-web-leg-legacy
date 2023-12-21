# OpenZooSim Web

The Official OpenZooSim Web Application, a game by SnowLynxSoftware.

## Table of Contents

- Architecture Overview
- Local Dev Setup

### Architecture Overview

The OpenZooSim (OZS) application is built with a
monolithic approach that is based loosely on the
principles discussed in [Radical Simplicity](https://www.radicalsimpli.city/). You can read more about it yourself, but the general idea is that we are building the simplest monolithic system possible with a minimal set of dependencies.

The entire application is built on top of [NodeJS](https://nodejs.org/), using [Typescript](https://www.typescriptlang.org/). The API is using [ExpressJS](https://expressjs.com/), which connects to a [Postgres](https://www.postgresql.org/) backend. The Express backend also serves up the client frontend which is using the [Vue Framework](https://vuejs.org/). The entire application sits behind [NGINX](https://www.nginx.com/) for SSL termination, caching, and reverse proxy.

At the most basic level, the application is split into two parts: Server & Client. The server directory will hold all of the backend code and the client directory will contain all of the Vue frontend code. I wanted this monolith to be easy to understand as an open source project.

### Local Dev Setup

You will need a minimum few pre-reqs first:

- [NodeJS v20+](https://nodejs.org/)
- Access to Postgres DB

Copy the example config file in the root of the project and fill in the required properties as listed.

```bash
cp ./.env.example ./.env
```

Install All Dependencies

```bash
cd ./server && npm i && cd ../client && npm i
```

Build The Client (from ./client directory)

```bash
npm run build
```

Build The Server (from ./server directory)

```bash
npm run build
```

Run The Server (from ./server directory)

```bash
npm start
```
