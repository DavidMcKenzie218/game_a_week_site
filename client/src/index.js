const React = require('react');
const ReactDOM = require('react-dom');

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
    <h1>Welcome</h1>,
    document.querySelector('#react-container')

  )
    

  
 
}