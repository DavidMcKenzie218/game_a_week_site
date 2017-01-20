const apiQuery = require('../api/apiQuery.js');

const pageContent = function(){
  this.apiRequest = new apiQuery();
}

pageContent.prototype = {
  getData: function(){
    const url = "http://localhost:3000/api/content";
    this.apiRequest.get(url, function(){
      console.log("API HAS BEEN CALLED");
    })
  }
}

module.exports = pageContent;