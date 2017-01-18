const React = require('react');

const Button = React.createClass({

  render: function(){
    return(
      <button>{this.props.label}</button>
      )
  }

})

module.exports = Button;