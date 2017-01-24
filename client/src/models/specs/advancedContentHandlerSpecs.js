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
    assert.deepEqual("Example Header", page.header);
  })

  it("should be able to add paragrpahs from the data", function(){
    page.addData(data);
    assert.deepEqual(["paragraph one", "paragraph two", "paragraph three"], page.paragraphs)
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