# soft-skills back-end

## Requirements
 - [Node.js](https://nodejs.org/) v10+
 - [Python](https://www.python.org/) v3+
 - [ffmpeg](https://ffmpeg.org/)

## Install

```sh
yarn # or npm i -D
pip3 install -r requirements.txt
sudo apt install ffmpeg
```

## Build

```sh
yarn build
# or
npm run build
```

## Configure
You need to set environment variables to configure the project. Copy [`.env.example`](./.env.example) to `.env` and edit this file.

**This is required**.

| Configuration option | Description | Default value |
| -------------------- | ----------- | ------------- |
| `SERVER_PORT` | Server port | `3100` |
| `MONGO_URI` | MondoDB database URI | `mongodb://localhost:27017/soft-skills` |
| `JWT_SECRET` | JWT secret | `My secret` |

## Run

```sh
yarn start
# or
npm start
```

## Run tests

```sh
yarn test
# or
npm run test
```

## Run linter

```sh
yarn lint
# or
npm run lint
```

## Run a MongoDB instance using Docker

```sh
docker pull mongo
docker run -p 127.0.0.1:27017:27017 --name soft-skills-db mongo
```
