# VueJS From Zero To Hero

## Demo

- URL : http://onlyvue.site/

## Configuration

```bash
.env.development: dev mode
.env.production: build mode

cp .env.sample .env.development
cp .env.sample .env.production
```

## References

1. NPM :
2. NPM Trends : https://www.npmtrends.com/
3. FakeJSOn : https://fakejson.com/
4. Random user : https://randomuser.me/
5. Dummy Data : https://dummyapi.io/explorer
6. Random : https://random-data-api.com/
7. Test: https://www.valentinog.com/blog/fake/
8. Cheatsheet : https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

## Intermediate Level

### Part 1

1. Vue Template
2. ENV
3. SCSS
4. Bootstrap
5. Build & Deploy

- https://devhints.io/vue
- https://vuex.vuejs.org/guide/actions.html
- https://vi.vuejs.org/v2/guide/computed.html
- https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
- https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards
- https://router.vuejs.org/guide/essentials/named-views.html#nested-named-views

### Part 2

1. Props vs State
2. Render
3. HOC
4. Modal
5. DOM Element

### Part 3

1. State Management with Vuex
2. Forms & Validations
3. PropTypes
4. Events
5. Model

### Part 4

1. JSON Server
2. API Service with axios
3. Vuex Fundamental
4. Vuex in real world

### Part 5

1. Application Structure
2. Unit test
3. Mock & stubs
4. BDD
5. CI & CD with gitlab CI

### Part 6

1. Auth with Firebase
2. Group Chat with Firebase
3. Avatar
4. Profile setting
5. Notification

## Advanced Level

### Docker

1. First time

```bash
docker build -t onlyvue:lastest .
docker run -it -p 8080:80 --name onlyvue-local onlyvue:lastest
```

2. Next build

```bash
docker rmi onlyvue:lastest
docker build -t onlyvue:lastest .
docker container stop onlyvue-local
docker container rm onlyvue-local
docker run -it -p 8080:80 --name onlyvue-local onlyvue:lastest
```
