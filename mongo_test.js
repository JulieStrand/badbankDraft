import pkg from "mongodb";
const { MongoClient } = pkg;
const url = "mongodb://badbank-container:27017/myproject";

// connect to mongo
MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Connected successfully to server");

    // database Name
    const dbName = "myproject";
    const db = client.db(dbName);

    // new user
    var name = "user" + Math.floor(Math.random() * 10000);
    var email = name + "@mit.edu";

    // insert into customer table
    var collection = db.collection("customers");
    var doc = { name, email };
    collection.insertOne(
      doc,
      { writeConcern: { w: "majority" } },
      (err, result) => {
        console.log("Document inserted");
      }
    );

    var customers = db
      .collection("customers")
      .find()
      .toArray((err, docs) => {
        console.log("Collection:", docs);
      });
  }
);
