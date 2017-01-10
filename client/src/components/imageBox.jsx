const React = require('react');

const imageBox = React.createClass({

  render: function(){
    return(
      <img src={this.props.source} height={this.props.height} width={this.props.width}></img>
    )
  }

})

module.exports = imageBox;