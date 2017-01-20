const React = require('react');
const ReactDOM = require('react-dom');
const FrontPage = require('./components/frontPage.jsx');
const PageContent = require('./models/content/pageContent.js');

const addDiv = function(parent){
  let div = document.createElement('div');
  div.id = 'react-container';
  parent.appendChild(div);
}

const reactContainer = function(){
  let body = document.querySelector('body');
  addDiv(body);
}

window.onload = function(){

  let content = new PageContent();

  content.getData();

  reactContainer();

  ReactDOM.render(
    <FrontPage/>,
    document.querySelector('#react-container')

  );

 
}