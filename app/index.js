/**
 * optimizing-performance.
 */
// 0. 发布时使用代码压缩
// 1. When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM.
// 2. shouldComponentUpdate决定要不要进行比较，有没有必要触发render
// 3. PureComponent会自动进行浅比较（shallow comparison)
// 4. 注意数据的操作方式，要拷贝不要突变；否则，PureComponent时的浅比较是相等的，因为指向同一个对象
 
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';

class CounterButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  // PureComponent will do shallow comparison about props and state auto
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.color !== nextProps.color) {
  //     return true;
  //   }
  //   if (this.state.count !== nextState.count) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}



// class ListOfWords extends PureComponent {
//   render() {
//     return <div>{this.props.words.join(',')}</div>;
//   }
// }


// 函数组件默认 extends React.Component
function ListOfWords(props) {
	return <div>{props.words.join(',')}</div>
}

class WordAdder extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
  	console.log('componentDidUpdate')
  }

  handleClick() {
    // This section is bad style and causes a bug
    // const words = this.state.words;
    // words.push('marklar');
    // this.setState({words: words});

    // The simplest way to avoid this problem is to avoid mutating values that you are using as props or state.
    this.setState(prevState => ({
    	// words: prevState.words.concat(['marklar'])
    	words: [...prevState.words, 'marklar']
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>add word</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}



ReactDOM.render(
	<WordAdder />,
	document.getElementById('root')
)