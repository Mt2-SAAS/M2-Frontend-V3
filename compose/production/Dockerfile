FROM node:15.0.1-alpine3.12 as build

LABEL maintainer="Luis Penagos <luispenagos91@gmail.com>"

ENV ROOT=/app

RUN mkdir -p $ROOT

RUN npm install -g @angular/cli 

COPY ./ $ROOT

WORKDIR $ROOT

RUN npm install

RUN npm run build:ssr

FROM node:15.0.1-alpine3.12

ENV ROOT=/app

RUN mkdir -p $ROOT

WORKDIR $ROOT

COPY --from=build /app/dist/ .

CMD ["node", "/app/metin2/server/main.js"]
