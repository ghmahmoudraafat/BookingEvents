// express
const express = require('express')
const app = express()
// Mongo
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'myproject';
console.log('Listening... ')






app.get('/', function (req, res) {
    res.send('Iam Listening')
})
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");   
    const db = client.db(dbName);   
    client.close();
  });



app.listen(3000);




