FROM node:16-slim as install

ENV APP_DIR /app
WORKDIR $APP_DIR

RUN apt update && apt upgrade -y

COPY package.json package-lock.json ./

RUN npm ci --only=production

FROM node:16-slim as run

ENV APP_DIR /app
WORKDIR $APP_DIR

RUN apt update && apt upgrade -y && apt install wait-for-it

COPY package.json package-lock.json ./
COPY google.mjs ./
COPY --from=install /app/node_modules /app/node_modules
