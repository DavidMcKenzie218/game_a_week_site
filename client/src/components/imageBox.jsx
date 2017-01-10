const React = require('react');

const imageBox = React.createClass({

  render: function(){
    return(
      <img src={this.props.source}></img>
    )
  }

})

module.exports = imageBox;