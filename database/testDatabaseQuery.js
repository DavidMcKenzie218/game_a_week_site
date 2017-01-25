const MongoClient = require('mongodb').MongoClient;

const DatabaseQuery = function(){
  this.url = 'mongodb://localhost:27017/test_game_a_week_database';
}

DatabaseQuery.prototype = {
  all: function(onQueryFinnished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        console.log('Connected to Testing Databse');

        const collection = db.collection('test_data_home_page');
        collection.find().toArray(function(err, docs){
          onQueryFinnished(docs);
        });
      }
    });
  }
}

module.exports = DatabaseQuery;