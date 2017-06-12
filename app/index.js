/**
 * implementation-notes 节点的实现方式
 * Platform-specific components: ReactDOMComponent ReactNativeBaseComponent
 * User-defined components: CompositeComponent 
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * 以浏览器平台为描述依据
 * DOMComponent vs CompositeComponent
 */
class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div>
				<h1>App Component</h1>
				<Greeting />
			</div>
		)
	}
}

function Greeting(props) {
	return (
		<p>hello world</p>
	)
}

/**
 * 组件层层嵌套，维护着渲染和更新算法，最终渲染出的平台元素形成UI
 */
var _ = {
	// Object => class CompositeComponent
	App: <App />.type.prototype.isReactComponent,

	// undefined => function CompositeComponent
	Greeting: <Greeting />.type.prototype.isReactComponent,

	// String 'div' => DOMComponent
	div: <div />.type
}

console.log(_)

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
