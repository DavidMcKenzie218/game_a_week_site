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
  }
}

module.exports = ContentHandler;