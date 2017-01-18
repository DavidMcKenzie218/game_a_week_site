const React = require('react');

const Dropdown = React.createClass({

  render: function(){
    return(
      <select>
        <option>{this.props.options[0]}</option>
      </select>
      )
  }

})

module.exports = Dropdown;