/**
 * design-principles
 * https://github.com/JobbyM/React-Docs-zh-CN/blob/master/design-principles.md
 */

// Composition: react的主要特征是组件的组合
// Scheduling: 团队内部有一个玩笑，React 应该被称为“调度（schedule）”因为React 不想完全成为“响应（reactive）”。
// Beyond the DOM: JavaScript Documnet Object Model
// Implementation: 我们喜欢枯燥的代码而不是聪明的代码。代码是一次性的并且经常改变。因此，更重要的是，他不会引入新的内部抽象，除非绝对必要。

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div>
				<h1>Design Principles</h1>
				<h2>UI = f(state)</h2>
				<h3>Virtual DOM (JavaScript Document Object Model) == ReactDOM.render ==> DOM (Document Object Model)</h3>
				<Principles />
			</div>
		)
	}
}

const Principles = () => (
	<ul>
		<li key="composition">Composition: react的主要特征是组件的组合</li>
		<li key="scheduling">Scheduling: 团队内部有一个玩笑，React 应该被称为“调度（schedule）”因为React 不想完全成为“响应（reactive）”。</li>
		<li key="beyond-the-dom">Virtual DOM: JavaScript Document Object Model</li>
		<li key="implementation">Implementation: 我们喜欢枯燥的代码而不是聪明的代码。代码是一次性的并且经常改变。因此，更重要的是，他不会引入新的内部抽象，除非绝对必要。</li>
	</ul>
)

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
