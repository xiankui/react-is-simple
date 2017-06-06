/**
 * reconciliation -- dom-diff -- 算法实现原理
 * When you use React, 
 * at a single point in time you can think of the render() function as creating a tree of React elements.
 * On the next state or props update, that render() function will return a different tree of React elements. 
 * React then needs to figure out how to efficiently update the UI to match the most recent tree.
 */

// 0. 比较元素的类型，如果类型不同，则销毁、重建！！！
// 1. DOM Elements 类型相同时，对不同部分作更新处理
// 2. Component Elements 类型相同时，按照 lifecycle 执行更新
// 3. 列表子元素用 key 作对照标识；key 只需在兄弟元素中唯一即可
 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class RootTree extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	lists: ['one', 'two', 'there']
	  };
	}

	render() {

		// 切记，尽量保持 React elements tree 结构相同；主体结构必须保持稳定

		return (
			<div className="wrapper">
				<div className="banner">banner</div>
				<div className="container">
					<div className="main">
						<h1>main content</h1>
						<ul>
							{
								this.state.lists.map(list => <li key={list}>{list}</li>)
							}
						</ul>
					</div>
					<div className="sidebar">sidebar</div>
				</div>
			</div>
		)
	}
}


ReactDOM.render(
	<RootTree />,
	document.getElementById('root')
)