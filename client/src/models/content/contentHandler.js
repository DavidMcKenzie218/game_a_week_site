const ContentHandler = function(){
  this.header;
  this.paragraphs = [];
  this.images = [];
  this.videos = [];
  this.data;
}

ContentHandler.prototype = {
  reset: function(){
    delete this.header;
    delete this.data;
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
  },
  addData: function(data){
    this.data = data;
    this.sortData();
  },
  sortData: function(){
    this.addHeader(this.data.header.text);
    let length = this.data.paragraphs.length;
    for(let x = 0; x < length; x++){
      this.addParagraph(this.data.paragraphs[x].text);
    }
  }
}

module.exports = ContentHandler;