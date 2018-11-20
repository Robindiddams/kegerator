# Kegerator

I wanted to know what temperature my beer is. So I made this.

[Check out the site](https://robins-kegerator.netlify.com)

make sure you've got node and serverless
```bash
# to start the backend
cd backend
npm install
yarn start

# to start the frontend
cd frontend
npm install
yarn start
```

## build/deploy
The frontend auto deploys on netlify, but you can `yarn build` if you want to build it.

Backend is serverless so you can just `sls deploy` I use aws, and you'll need to put `kegerator-device-id` and `particle-api-key` in ssm paramater store.