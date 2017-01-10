const React = require('react');
const TextBox = require('./textBox.jsx');
const ImageBox = require('./imageBox.jsx');
const YoutubeBox = require('./youtubeVideoBox.jsx');

const mainBody = React.createClass({

  render: function(){
    return(
      <div>
        <h1>Main Body</h1>
        <TextBox text={"This is example text for the text box"}/>
        <YoutubeBox link={"https://www.youtube.com/embed/ESxdCohXbWE"}/>
        <ImageBox/>
      </div>
      )
  }

})

module.exports = mainBody;