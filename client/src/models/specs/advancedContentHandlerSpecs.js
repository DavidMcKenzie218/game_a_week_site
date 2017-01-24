const assert = require('assert');
const Content = require('../content/contentHandler.js');

describe("The page recieving data", function(){

  let page;
  const data = {
    header: {
      text: "Example Header"
    }
  }

  before(function(){
    page= new Content();
  })

  beforeEach(function(){
    page.reset();
  })

  it("should be able to add data", function(){
    page.addData(data);
    assert.deepEqual(data, page.data);
  })

  it("should be able to add a header to the page from the data", function(){
    page.addData(data);
    assert.deepEqual("Example Header", page.header);
  })

})