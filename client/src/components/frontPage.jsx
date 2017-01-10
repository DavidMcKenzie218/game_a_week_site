const React = require('react');
const Body = require('../componentsBody/mainBodyContainer.jsx');
const Header = require('../componentsHeader/mainHeaderContainer.jsx');

const frontPage = React.createClass({

  render: function(){
    return(
      <div>
        <Header/>
        <Body/>
      </div>
    )
  }

})

module.exports = frontPage;