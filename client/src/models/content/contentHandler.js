const ContentHandler = function(){
  // FUNCTION VARIABLES
  this.header;
  this.paragraphs = [];
  this.images = [];
  this.videos = [];
  this.data;
  this.componentOrder = [];
}

ContentHandler.prototype = {
  // RESETS ALL FUNCTION VARIABLES TO DEFAULT, USED FOR TESTING
  reset: function(){
    delete this.header;
    delete this.data;
    this.paragraphs = [];
    this.images = [];
    this.videos = [];
    this.componentOrder = [];
  },
  // SETTERS, ALSO DEFINES ORDER OF THE COMPONENTS
  addHeader: function(newHeader){
    this.header = newHeader;
    this.componentOrder.push({component: "header"});
  },
  addParagraph: function(newParagraph){
    this.paragraphs.push(newParagraph);
    let order = newParagraph.order;
    if(order < this.componentOrder.length){
      this.componentOrder.splice((order), 0,{component: "paragraph", id: this.paragraphs.length-1});
    }else{
      this.componentOrder.push({component: "paragraph", id: this.paragraphs.length-1})
    }
  },
  addImage: function(newUrl){
    this.images.push(newUrl);
    let order = newUrl.order;
    if(order < this.componentOrder.length){
      this.componentOrder.splice((order-1), 0,{component: "image", id: this.images.length-1});
    }else{
      this.componentOrder.push({component: "image", id: this.images.length-1})
    }
  },
  addVideo: function(newUrl){
    this.videos.push(newUrl);
    let order = newUrl.order;
    if(order < this.componentOrder.length){
      this.componentOrder.splice((order), 0,{component: "video", id: this.videos.length-1});
    }else{
      this.componentOrder.push({component: "video", id: this.videos.length-1})
    }
  },
  // TAKES IN THE DATA STARTS THE SORTING
  addData: function(data){
    this.data = data;
    this.sortData();
  },
  // SORTS THE DATA INTO THE INDIVIDUAL COMPONENTS
  sortData: function(){
    this.addHeader(this.data.header);
    let paraLength = this.data.paragraphs.length;
    for(let x = 0; x < paraLength; x++){
      this.addParagraph(this.data.paragraphs[x]);
    }
    this.addVideo(this.data.videos);
    let imgLength = this.data.images.length;
    for(let i = 0; i < imgLength; i++){
      this.addImage(this.data.images[i])
    }
  }
}

module.exports = ContentHandler;