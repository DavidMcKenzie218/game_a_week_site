const ContentHandler = function(){
  this.header;
  this.paragraphs = [];
}

ContentHandler.prototype = {
  all: function(){
    console.log("ALL");
  }
}

module.exports = ContentHandler;