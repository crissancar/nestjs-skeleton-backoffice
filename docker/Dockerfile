FROM node:18.12.0-alpine

WORKDIR /srv/service

ENV TMPDIR "/srv/service/artifacts/tmp"

RUN npm install

RUN npm run build

CMD npm run start
