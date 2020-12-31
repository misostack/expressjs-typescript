# ExpressJS with Typescript

> Version: 4.17.1

## Development

1. Watch

```bash
yarn start
```

## Deployment

1. Simple

```bash
yarn build
pm2 start ecosystem.config.js
```

2. Heroku


```bash
## setup
sudo snap install --classic heroku
heroku login
# add heroku git for current app
heroku git:remote -a misostack
git push heroku master

## deploy
git push heroku master
```