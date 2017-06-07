/**
 * Web Components
 * Most people who use React don't use Web Components!!
 */


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// register Web Component with react
const proto = Object.create(HTMLElement.prototype, {
  attachedCallback: {
    value: function() {
      const mountPoint = document.createElement('span');
      this.createShadowRoot().appendChild(mountPoint);

      const name = this.getAttribute('name');
      const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
      ReactDOM.render(<a href={url} target="blank">{name}</a>, mountPoint);
    }
  }
});
document.registerElement('x-search', {prototype: proto});


// using web component in react
class HelloMessage extends React.Component {
	// One common confusion is that Web Components use "class" instead of "className".
  render() {
    return <div className="div">Hello <x-search class="x-search" name={this.props.name}></x-search>!</div>;
  }
}

ReactDOM.render(
	<HelloMessage name='reactjs' />,
	document.getElementById('root')
)