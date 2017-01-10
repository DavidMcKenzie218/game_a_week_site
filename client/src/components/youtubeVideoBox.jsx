const React = require('react');

const youtubeBox = React.createClass({

  render: function(){
    return(
     <iframe width={this.props.width} height={this.props.height} src={this.props.link} frameBorder="0" allowFullScreen></iframe>

      )
  }

})

module.exports = youtubeBox;