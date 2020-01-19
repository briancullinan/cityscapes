const functions = require('firebase-functions');

const app = require('./server.js');

module.exports.index = functions.https.onRequest(app);

