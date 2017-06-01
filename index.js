/**
 * set type="text/babel"
 * babel can presets es2015 and react jsx
 */

/**
 * react handling events
 */
class Toggle extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback; otherwise, you can use arrow function
    this.handleClick = this.handleClick.bind(this);
  }

  // when componentDidMount, mock handleClick
  componentDidMount() {
    // but, no 'e' target
    this.handleClick()
  }

  handleClick(e) {
    console.log(e)

    // 阻止默认行为；比如a链接跳转
    e && e.preventDefault();

    // when bind to component-self, this is component-self; otherwise, this is null
    console.log('this', this)

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <button style={{padding: '5px 20px'}} onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

ReactDOM.render(
	<Toggle />,
	document.getElementById('root')
)