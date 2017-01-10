const React = require('react');
const TextBox = require('./textBox.jsx');

const mainBody = React.createClass({

  render: function(){
    return(
      <div>
        <h1>Main Body</h1>
        <TextBox/>
      </div>
      )
  }

})

module.exports = mainBody;