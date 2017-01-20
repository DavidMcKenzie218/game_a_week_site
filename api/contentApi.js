const DatabaseQuery = require('../database/databaseQuery');

const ContentApi = function(app){

  let query = new DatabaseQuery();

  app.get('/api/content', function(req, res){
    query.all(function(results){
      res.json(results);
    });
  });

}

module.exports = ContentApi;