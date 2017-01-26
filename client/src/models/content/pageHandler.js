const ApiDataHandler = require('./apiDataHandler.js');
const ContentHandler = require('./contentHandler.js');

const pageHandler = function(){
  this.api = new ApiDataHandler();
  this.apiData;
}

pageHandler.prototype = {
  reset: function(){
    delete this.apiData;
  },
  callApi: function(){
    this.api.getData("http://localhost:3003/api/test/content", function(data){
      this.apiData = data;
    })
  }
}

module.exports = pageHandler;