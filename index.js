/**
 * set type="text/babel"
 * babel can presets es2015 and react jsx
 */

/**
 * lifting state up
 * 摄氏和华氏温度的转换需要提升到他们共同的父组件来控制
 */


/**
 * methods
 */
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let {scale, onTemperatureChange } = this.props;
    let temperature = e.target.value;
    onTemperatureChange(scale, temperature)
  }

  render() {
    let {
      scale,
      temperature,
    } = this.props;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
} 

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    // 只记录一种温度；另外一种通过计算得出
    this.state = {
      scale: 'c',
      temperature: '',
    }

    this.handleTemperatureChange = this.handleTemperatureChange.bind(this)
  }

  handleTemperatureChange(scale, temperature) {
    this.setState({
      scale,
      temperature
    })
  }

  render() {
    // 计算的速度总是很快的
    let scale = this.state.scale,
        temperature = this.state.temperature,
        celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature,
        fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput 
          scale="c" 
          temperature={celsius}
          onTemperatureChange={this.handleTemperatureChange}  />
        <TemperatureInput 
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleTemperatureChange} />

      <BoilingVerdict
        celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

ReactDOM.render(
	<Calculator />,
	document.getElementById('root')
)