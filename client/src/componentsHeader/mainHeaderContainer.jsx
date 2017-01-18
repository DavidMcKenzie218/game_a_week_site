const React = require('react');
const Logo = require('./logo.jsx');
const Button = require('./button.jsx');
const Dropdown = require('./dropdown.jsx');

const headerContainer = React.createClass({

  render: function(){
    return(
      <div>
        <Logo source={'https://upload.wikimedia.org/wikipedia/commons/2/21/Gambas_3_logo.svg'} height={'75'} width={'75'}/>
        <Button label={"Example Button"}/>
        <Dropdown/>
      </div>
      )
  }

})

module.exports = headerContainer;