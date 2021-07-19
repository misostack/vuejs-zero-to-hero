# build stage
FROM node:14-alpine3.13 as build-stage
WORKDIR /app
LABEL maintainer="techlead@sonnm.com"

COPY package*.json ./
COPY yarn.lock ./
COPY .env.production .env
COPY . .

RUN yarn install
RUN yarn build

# production stage
FROM node:14-alpine3.13 as production-stage
WORKDIR /app 
COPY --from=build-stage /app/dist /app/dist

RUN yarn global add serve
CMD NODE_ENV=development serve -s dist -l 17000 -p 3001