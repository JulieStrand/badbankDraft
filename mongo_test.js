import {MongoClient } from "mongodb";
 
const url = "mongodb://127.0.0.1:27017/myproject";
let args = { useNewUrlParser: true, useUnifiedTopology: true }

let mongo = new MongoClient(url)

// a quick test of reading a table
async function unused_test() {
  let cursor = mongo.db().collection('happy').find()
  for await(const entry of cursor) { console.log(entry) }
}

// test add some users
async function makeuser() {

    let db = mongo.db("myproject");
    let collection = db.collection("customers");

    let name = "user" + Math.floor(Math.random() * 10000);
    let email = name + "@mit.edu";
    await collection.insertOne( {name,email}, { writeConcern: { w: "majority" } }, (err, result) => {
        console.log("Document inserted");
      }
    );

    console.log("done insert")

    var customers = db.collection("customers").find()

    // customers.toArray((err, docs) => { console.log("Collection:", docs); });

    for await(const entry of customers) { console.log(entry) }
}

makeuser()



