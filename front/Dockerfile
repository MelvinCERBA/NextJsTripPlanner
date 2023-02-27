FROM node:18.14-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . /app/

RUN pnpm i
RUN pnpm build

CMD [ "pnpm", "run", "start" ]
