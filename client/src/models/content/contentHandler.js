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
    this.addHeader(this.data.header);
    let paraLength = this.data.paragraphs.length;
    for(let x = 0; x < paraLength; x++){
      this.addParagraph(this.data.paragraphs[x]);
    }
    this.addVideo(this.data.videos.url);
    let imgLength = this.data.images.length;
    for(let i = 0; i < imgLength; i++){
      this.addImage(this.data.images[i].url)
    }
  }
}

module.exports = ContentHandler;