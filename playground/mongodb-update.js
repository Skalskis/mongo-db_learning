// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('59860ada9beb5bcff27cbb61')
  }, {
    // $set: {
    //   completed: true
    // },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  });

  db.close();
});
