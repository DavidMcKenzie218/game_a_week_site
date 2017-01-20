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

  it("should have no image links", function(){
    assert.deepEqual([], page.images);
  })

  it("should have no video links", function(){
    assert.deepEqual([], page.videos);
  })

})

describe("A page with content:", function(){
  
  let page;
  const header = "Example Header";
  const paragraph = "Example Paragraph";
  const url = "Example URL"

  before(function(){
    page = new Content();
  })

  beforeEach(function(){
    page.reset();
  })

  it("should have a header", function(){
    page.addHeader(header);
    assert.deepEqual("Example Header", page.header);
  })

  it("should reset the values", function(){
    assert.strictEqual(undefined, page.header);
  })

  it("should have a paragraph", function(){
    page.addParagraph(paragraph);
    assert.deepEqual(["Example Paragraph"], page .paragraphs);
  })

  it("should have multiple paragraphs", function(){
    page.addParagraph(paragraph);
    page.addParagraph(paragraph);
    assert.deepEqual([paragraph, paragraph], page.paragraphs);
  })

  it("should have image links", function(){
    page.addImage(url);
    assert.deepEqual(["Example URL"], page.images);
  })

  it("should have video links", function(){
    page.addVideo(url);
    assert.deepEqual(["Example URL"], page.videos);
  })
})