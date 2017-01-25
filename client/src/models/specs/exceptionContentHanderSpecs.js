const assert = require('assert');
const Content = require('../content/contentHandler.js');

describe("Exceptions a page should pass", function(){

  let page;
  let exceptionHeader = {
    paragraphs : [
      {text: "paragraph one"}   
    ],
    videos : {
      url: "video.url/123"
    },
    images : [
      {url: "image.url/1"}
    ]
  }
  let exceptionParagraph = {
    header: {
      text: "Example Header"
    },
    videos : {
      url: "video.url/123"
    },
    images : [
      {url: "image.url/1"}
    ]
  }
  let exceptionImage = {
    header: {
      text: "Example Header"
    },
    paragraphs : [
      {text: "paragraph one"}    
    ],
    videos : {
      url: "video.url/123"
    }
  }
  let exceptionVideo = {
    header: {
      text: "Example Header"
    },
    paragraphs : [
      {text: "paragraph one"}    
    ],
    images : [
      {url: "image.url/1"}
    ]
  }

  before(function(){
    page= new Content();
  })

  beforeEach(function(){
    page.reset();
  })

  it("should work without a header present", function(){
    page.addData(exceptionHeader);
    assert.deepEqual(undefined, page.header);
  })

  it("should work without paragraphs present", function(){
    page.addData(exceptionParagraph);
    assert.deepEqual([], page.paragraphs);
  })

  it("should work without images present", function(){
    assert.deepEqual([], page.images);
  })

  it("should work without videos present", function(){
    assert.deepEqual([], page.videos);
  })

})