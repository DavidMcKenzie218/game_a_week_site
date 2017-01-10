const React = require('react');
const ReactDOM = require('react-dom');
const MainBody = require('./components/mainBodyContainer.jsx');

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

  reactContainer();

  ReactDOM.render(
    <MainBody/>,
    document.querySelector('#react-container')

  );

 
}