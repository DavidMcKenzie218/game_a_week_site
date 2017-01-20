const apiQuery = require('../api/apiQuery.js');

const pageContent = function(){
  this.apiRequest = new apiQuery();
}

pageContent.prototype = {
  getData: function(){
    let self = this;
    const url = "http://localhost:3000/api/content";
    this.apiRequest.get(url, function(){
      if(this.status != 200) return;
      let jsonString = this.responseText;
      console.log(jsonString);
      self.processData(jsonString);
    })
  },
  processData: function(jsonData){
    let data = JSON.parse(jsonData);
    console.log(data);
  }
}

module.exports = pageContent;
