const apiQuery = require('../api/apiQuery.js');

const apiDataHandler = function(){
  this.apiRequest = new apiQuery();
}

apiDataHandler.prototype = {
  // GETS DATA FROM THE API
  getData: function(api, onCompleted){
    let self = this;
    const url = "http://localhost:3003/api/test/content";
    this.apiRequest.get(url, function(){
      if(this.status != 200) return;
      let jsonString = this.responseText;
      let data = self.processData(jsonString);
      onCompleted(data)
    })
  },
  //PARSES THE DATA TO USUABLE FORM
  processData: function(jsonData){
    let data = JSON.parse(jsonData);
    console.log(data);
    return data;
  }
}

module.exports = apiDataHandler;
