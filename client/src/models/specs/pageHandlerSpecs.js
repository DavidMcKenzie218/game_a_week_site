const assert = require('assert');
const PageHandler = require('../content/pageHandler.js');

describe("The page handler can", function(){

  let pageHandler;
  const expectedApiData = {
  header: {
    text: "Home Page Header",
    order: 1
  },
  paragraphs: [
    {text: "This is the first paragraph", 
    order: 2},
    {text: "This is the second paragraph",
    order: 4}
  ],
  videos: {
    url: "https://www.youtube.com/embed/ESxdCohXbWE",
    order: 5
  },
  images: [
    {url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    order: 3}
  ]
}

  before(function(){
    pageHandler = new PageHandler();
  })

  beforeEach(function(){
    pageHandler.reset();
  })

  it("can make a call to the api, and store the data", function(){
    pageHandler.callApi();
    assert.deepEqual(expectedApiData, pageHandler.apiData);
  })

})