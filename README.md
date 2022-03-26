# portfolio-site

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Deployment

Build image

```
docker build . -t portfolio
```

Test image

```
docker run -p 8080:80 -e PORT=80 portfolio
```

Push image to Heroku

```
heroku container:push web
```

Release

```
heroku container:release web
```
