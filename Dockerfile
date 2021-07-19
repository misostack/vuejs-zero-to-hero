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
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]