const React = require('react');
const Logo = require('./logo.jsx');
const Button = require('./button.jsx');
const Dropdown = require('./dropdown.jsx');

const headerContainer = React.createClass({

  render: function(){
    return(
      <div>
        <Logo/>
        <Button/>
        <Dropdown/>
      </div>
      )
  }

})

module.exports = headerContainer;