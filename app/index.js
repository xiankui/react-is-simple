/**
 * integrating-with-other-libraries 和其他组件库融合
 */

// Although React is commonly used at startup to load a single root React component into the DOM, 
// ReactDOM.render() can also be called multiple times for independent parts of the UI which can be as small as a button, 
// or as large as an app. In fact, this is exactly how React is used at Facebook. 

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// a sample intergrating with jQuery. just for demonstration!!
class Chosen extends React.Component {
  componentDidMount() {
  	// this.$el is jQuery element
    this.$el = $(this.el);
    // this.$el.chosen();

    this.handleChange = this.handleChange.bind(this);
    this.$el.on('change', this.handleChange);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.$el.trigger("chosen:updated");
    }
  }

  componentWillUnmount() {
    this.$el.off('change', this.handleChange);
    // this.$el.chosen('destroy');
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

const MyChosen = () => (
	<Chosen onChange={value => console.log(value)}>
    <option>vanilla</option>
    <option>chocolate</option>
    <option>strawberry</option>
  </Chosen>
)


ReactDOM.render(
	<h1>Intergrating with jQuery Library</h1>,
	document.getElementById('root')
)

ReactDOM.render(
	<MyChosen />,
	document.getElementById('withInJquery')
)