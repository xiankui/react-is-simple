/**
 * typechecking-with-proptypes
 */
 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Greeting extends Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
	name: PropTypes.string.isRequired
}

Greeting.defaultProps = {
	name: 'World'
}

ReactDOM.render(
	<Greeting />,
	document.getElementById('root')
)