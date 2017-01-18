const React = require('react');
const Logo = require('./logo.jsx');
const Button = require('./button.jsx');

const headerContainer = React.createClass({

  render: function(){
    return(
      <div>
        <Logo/>
        <Button/>
      </div>
      )
  }

})

module.exports = headerContainer;