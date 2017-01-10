const React = require('react');

const youtubeBox = React.createClass({

  render: function(){
    return(
     <iframe width="560" height="315" src={this.props.link} frameBorder="0" allowFullScreen></iframe>

      )
  }

})

module.exports = youtubeBox;