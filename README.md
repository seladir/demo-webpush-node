It is a backend part of the web push demo.

Install:
1. Run `yarn install`
2. Run `./node_modules/.bin/web-push generate-vapid-keys` to get your VAPID keys.
3. Copy `.env.example` to `.env` and fill in public and private key params with generated values.
4. Start the server with `node index.js`

[Detailed explanation based on this repo](https://medium.com/seladir/how-to-implement-web-push-notifications-in-your-node-react-app-9bed79b53f34)
