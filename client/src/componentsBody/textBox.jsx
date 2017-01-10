const React = require('react');

const textBox = React.createClass({

  render: function(){
    return(
      <p>{this.props.text}</p>
      )
  }

})

module.exports = textBox;