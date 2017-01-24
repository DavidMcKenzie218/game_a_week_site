const assert = require('assert');
const Content = require('../content/contentHandler.js');

describe("The page recieving data", function(){

  let page;
  const data = {
    header: {
      text: "Example Header"
    },
    paragraphs : [
      {text: "paragraph one"},
      {text: "paragraph two"},
      {text: "paragraph three"}    
    ],
    videos : {
      url: "video.url/123"
    },
    images : [
      {url: "image.url/1"},
      {url: "image.url/2"}
    ]
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
    assert.deepEqual("Example Header", page.header.text);
  })

  it("should be able to add paragrpahs from the data", function(){
    page.addData(data);
    assert.deepEqual("paragraph one", page.paragraphs[0].text);
    assert.deepEqual('paragraph two', page.paragraphs[1].text);
    assert.deepEqual('paragraph three', page.paragraphs[2].text)
  })

  it("should be able to add video urls from the data", function(){
    page.addData(data);
    assert.deepEqual(["video.url/123"], page.videos);
  })

  it("should be able to add image urls from the data", function(){
    page.addData(data);
    assert.deepEqual(["image.url/1", "image.url/2"], page.images);
  })

})

describe("The page sorting data on positioning", function(){

  let page;
  
  const data = {
    header: {
      text: "Example Header",
      order: 1
    },
    paragraphs : [
      {text: "paragraph one",
      order: 2},
      {text: "paragraph two",
      order: 4},
      {text: "paragraph three",
      order: 5}    
    ],
    videos : {
      url: "video.url/123", 
      order: 6
    },
    images : [
      {url: "image.url/1",
      order: 3},
      {url: "image.url/2", 
      order: 7}
    ]
  }  

  before(function(){
    page = new Content();
  })

  beforeEach(function(){
    page.reset();
  })

  it("the header has the right order number", function(){
    page.addData(data);
    let header = page.header;
    assert.deepEqual(1, header.order);
  })

  it("the paragraphs have the right order numbers", function(){
    page.addData(data);
    let paragraphs = page.paragraphs;
    assert.deepEqual(2, page.paragraphs[0].order)
    assert.deepEqual(4, page.paragraphs[1].order)
    assert.deepEqual(5, page.paragraphs[2].order)
  })

})