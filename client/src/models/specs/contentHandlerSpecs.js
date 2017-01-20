const assert = require('assert');
const Content = require('../content/contentHandler.js');

describe("The empty page conetent:", function(){

  let page;

  before(function(){
    page = new Content();
  })

  it("should have no header", function(){
    assert.strictEqual(undefined, page.header);
  }),

  it("should have no paragrah content", function(){
    assert.deepEqual([], page.paragraphs);
  })

})