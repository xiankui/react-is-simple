/**
 * set type="text/babel"
 * babel can presets es2015 and react jsx
 */

/**
 * conditional-rendering
 */
function WarningBanner(props) {
  // o!!
  if (!props.warn) {
    return null;  // or return false; props.warn && <div />
  }

  return (
    <div style={{color: 'red',padding: '20px 0'}} className="warning">
      Warning!
    </div>
  );
}


function WarningButton(props) {
  return (
    <button style={{padding: '5px 20px'}} onClick={props.handleToggleClick}>
      {props.warn ? 'Hide' : 'Show'}
    </button>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {showWarning: true};

    //
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(e) {
    e.preventDefault();

    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }))
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <WarningButton warn={this.state.showWarning} handleToggleClick={this.handleButtonClick} />
      </div>
    )
  }
}


ReactDOM.render(
	<Page />,
	document.getElementById('root')
)