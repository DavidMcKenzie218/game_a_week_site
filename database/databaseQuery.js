const MongoClient = require('mongodb').MongoClient;

const DatabaseQuery = function(){
  this.url = 'mongodb://localhost:27017/game_a_week_database';
}

DatabaseQuery.prototype = {
  all: function(){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        console.log('Connected to Databse');
      }
    })
  }
}

module.exports = DatabaseQuery;