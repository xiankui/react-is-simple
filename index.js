/**
 * set type="text/babel"
 * babel can presets es2015 and react jsx
 */

/**
 * 通过状态组件维护UI的变化，而不是每次都要调用ReactDOM.render()
 * 当组件state变化时，当前组件树就会重新render
 */
class Clock extends React.Component {
	constructor(props) {
    super(props);

    // state 初始化
    this.state = {date: new Date()};
  }

	/**
	 * 组件挂载
	 */
  componentWillMount() {
  	console.log('componentWillMount')
  }

  componentDidMount() {
  	console.log('componentDidMount')
  	console.log(this.state.date.toLocaleTimeString())
  	this.timerID = setTimeout(() => this.tick(), 1000)
  }

	/**
	 * 组件更新
	 */
  componentWillReceiveProps(nextProps) {
  	// 作为子组件被嵌套时，可能会触发此状态
  	console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState) {
  	// 组件需要更新吗？默认需要更新
  	// PureComponent会进行一次浅比较，可结合immutable.js
  	// 一般有针对性的深比较一次即可，比如只比较id
  	console.log('shouldComponentUpdate')
  	return true;
  }

  componentWillUpdate() {
  	console.log('componentWillUpdate')
  }

  componentDidUpdate() {
  	console.log('componentDidUpdate')
  }

	/** 
	 * 组件卸载
	 */
  componentWillUnmout() {
  	clearTimeout(this.timerID)
  }

  tick() {
  	// 更改state
  	// this.setState({
  	//		date: new Date()
  	// })

		// 更加安全的方式
  	this.setState((prevState, props) => ({
  		date: new Date()
  	}))
  }

	render() {
		return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
	}
}

ReactDOM.render(
	<Clock />,
	document.getElementById('root')
)