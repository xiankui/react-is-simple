/**
 * refs-and-the-dom
 */

// 0. React可以通过ref属性的callback function来获取原生DOM节点，以便操作
// 1. ref属性的函数会在组件mounted or unmounted时立即执行
// 2. 当然，除非特别必要，不要这样做！想一想是不是可以用state来完成！
 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CustomTextInput extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  this.focus = this.focus.bind(this)
	}

	focus() {
		this.textInput.focus()
	}

  render() {
  	// when component mounted, ref callback function executed immediately
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}


ReactDOM.render(
	<CustomTextInput />,
	document.getElementById('root')
)