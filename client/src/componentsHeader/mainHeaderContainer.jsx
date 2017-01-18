const React = require('react');
const Logo = require('./logo.jsx');

const headerContainer = React.createClass({

  render: function(){
    return(
      <Logo/>
      )
  }

})

module.exports = headerContainer;