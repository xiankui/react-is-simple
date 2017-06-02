/**
 * set type="text/babel"
 * babel can presets es2015 and react jsx
 */

/**
 * Forms
 */
class Form extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      info: '',
      select: 'coconut',
      fruits: ['apple'],
      sex: 'female'
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInfoChange = this.handleInfoChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleControlledComponent = this.handleControlledComponent.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();

    // input 也可以按照浏览器表单元素的默认行为处理；但不要这样！
    let name = this.refs['name'].value;

    // 当然更推荐用react的方式来处理表单元素：通过state来管理表单元素行为
    let info = this.state.info;

    // select 则必须用react的方式来处理
    let select = this.state.select;

    console.log(`when submit the name is ${name}, the info is ${info}, the select is ${select}`)
  }

  handleInfoChange(e) {
    let v = e.target.value;
    this.setState({
      info: v
    })
  }

  handleSelect(e) {
    this.setState({
      select: e.target.value
    })
  }

  // 受控组件通用处理
  handleControlledComponent(e) {
    let target = e.target;
    let name = target.name;
    let type = target.type;
    let value = target.value;

    if (name === 'sex' && value !== this.state.sex) {
      this.setState({
        sex: value
      })

      return;
    }

    if (name === 'fruits') {
      this.setState(prevState => {
        let _f = prevState.fruits;
        let index = _f.indexOf(value);
        let f = [];
        if (index === -1) {
          f = _f.concat([value])
        } else {
          f = _f.slice(0, index).concat(_f.slice(index+1))
        }

        return {
          fruits: f
        }
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" ref="name" />
        </label>
        <label>
          Info:
          {/* different from html dom <textarea></textarea> */}
          <textarea name="info" value={this.state.info} placeholder="this is textarea" onChange={this.handleInfoChange}  />
        </label>
        <label>
          Select:
          <select name="select" value={this.state.select} onChange={this.handleSelect}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <div>
          Fruits:
          <label>
            <input type="checkbox" name="fruits" value="apple" checked={this.state.fruits.indexOf('apple') !== -1} onChange={this.handleControlledComponent} />Apple
          </label>
          <label>
            <input type="checkbox" name="fruits" value="banana" checked={this.state.fruits.indexOf('banana') !== -1} onChange={this.handleControlledComponent} />Banana
          </label>

          Sex:
          <label>
            <input type="radio" name="sex" value="male" checked={this.state.sex === 'male'} onChange={this.handleControlledComponent} />Male
          </label>
          <label>
            <input type="radio" name="sex" value="female" checked={this.state.sex === 'female'} onChange={this.handleControlledComponent} />Female
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

ReactDOM.render(
	<Form />,
	document.getElementById('root')
)