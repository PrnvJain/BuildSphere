const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
    apiVersion: '2023-10-16',
    appInfo: {
        name: "BuildSphere App",
        version: "0.1.0",
    }
});

console.log(stripe);
