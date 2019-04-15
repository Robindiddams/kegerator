# Kegerator

[![Netlify Status](https://api.netlify.com/api/v1/badges/220dd555-b8c6-4ea8-92ed-e5abd63c6991/deploy-status)](https://app.netlify.com/sites/robins-kegerator/deploys)

I wanted to know what temperature my beer is. So I made this.

Check it out at <https://robinskegerator.tech>

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