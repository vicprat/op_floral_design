const faunadb = require('faunadb');
const verifyWebhookIntegrity = require('shopify-verify-webhook');

const q = faunadb.query;

const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET
})

exports.handler = function (event, context, callback) {
    const isValid = verifyWebhookIntegrity(process.env.SHOPIFY_WEBHOOK_KEY, event.headers['x-shopify-hmac-sha256'], event.body);

    if(isValid){
        callback(null, {
            statusCode: 200,
            body: 'Hello world',
          });
    }else{
        callback(null, {
            statusCode: 403,
            body: 'Error',
          });
    }

  
};
