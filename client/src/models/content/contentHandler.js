const ContentHandler = function(){
  this.header;
  this.paragraphs = [];
  this.images = [];
  this.videos = [];
}

ContentHandler.prototype = {
  reset: function(){
    delete this.header;
    this.paragraphs = [];
    this.images = [];
    this.videos = [];
  },
  addHeader: function(newHeader){
    this.header = newHeader;
  },
  addParagraph: function(newParagraph){
    this.paragraphs.push(newParagraph);
  },
  addImage: function(newUrl){
    this.images.push(newUrl);
  },
  addVideo: function(newUrl){
    this.videos.push(newUrl);
  }
}

module.exports = ContentHandler;