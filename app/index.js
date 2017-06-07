/**
 * Higher-Order Components 高阶组件
 */

// 0. const EnhancedComponent = higherOrderComponent(WrappedComponent);
// 1. a higher-order component is a function that takes a component and returns a new component. likes to curry function.
// 2. Don't Mutate the Original Component. Use Composition.
// 3. Pass Unrelated Props Through to the Wrapped Component
// 4. Static Methods Must Be Copied Over
// 5. Refs Aren't Passed Through

/**
 * react-redux connect is a higher-order function energy by compose
 */
// connect is a function that returns another function
// const enhance = connect(commentListSelector, commentListActions);
// The returned function is an HOC, which returns a component that is connected
// to the Redux store
// const ConnectedComment = enhance(CommentList);



import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const CommentListData = [{
	id: 0,
	comment: 'tmall is so good'
}, {
	id: 1,
	comment: 'taobao is good enough'
}]

class CommentList extends Component {
	constructor(props) {
	  super(props);
	}

	componentDidMount() {
		console.log('CommentList did mount first --- ', this.props)
	}

	render() {
		let { lists, onClick } = this.props;
		return (
			<div>
				CommentList:
				<ul>
					{
						!!lists && lists.length > 0 && lists.map(list => <li key={list.id} onClick={onClick}>{list.comment}</li>)
					}
				</ul>
			</div>
		)
	}
}

// enhance is higher-order component
const enhance = connect(commentListSelector, commentListActions);

const ConnectedComment = enhance(CommentList);

/**
 * higher-order function
 * fake react-redux connect
 * selector reflex mapStateToProps
 * actions reflex mapDispatchToProps
 * selector() and actions() passed as props into WrappedComponent
 */
function connect(selector, actions) {
	// getState dispatch from redux.store
	let propsState = selector();
	let propsDispatch = actions();

	// higher-order component 
	return function(WrappedComponent) {

		// the new component returned base on WrappedComponent
		return class extends Component {
			constructor(props) {
			  super(props);
			
			  this.state = {};
			}

			componentDidMount() {
				console.log('ConnectedComment did mount then --- ', this.props)
			}

			componentWillReceiveProps(nextProps) {
				console.log('ConnectedComment will receive props --- ', nextProps)
			}

			render() {
				return (
					<WrappedComponent {...this.props} {...propsState} {...propsDispatch} />
				)
			}
		}
	}
}

// redux.store.getState
function commentListSelector(state) {
	return {
		lists: CommentListData
	}
}

// redux.store.dispatch
function commentListActions(dispatch) {
	return {
		onClick: function(e) {
			alert(e.target.innerHTML)
		}
	}
}

ReactDOM.render(
	<ConnectedComment name="fake.react-redux" lists={[]} />,
	document.getElementById('root')
)