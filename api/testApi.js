const DatabaseQuery = require('../database/testDatabaseQuery');

const ContentApi = function(app){

  let query = new DatabaseQuery();

  app.get('/api/test/content', function(req, res){
    query.all(function(results){
      res.json(results);
    });
  });

}

module.exports = ContentApi;