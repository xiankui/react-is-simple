/**
 * set type="text/babel"
 * babel can presets es2015 and react jsx
 */

/**
 * Lists and Keys
 */
const NumberList = ({
  numbers
}) => {
  let listItems = numbers.map((number, index) => <li key={`${index}-${number}`}>{number}</li>)

  return <ul>{listItems}</ul>
}

const numbers = [1, 2, 3, 3, 4, 5];

ReactDOM.render(
	<NumberList numbers={numbers} />,
	document.getElementById('root')
)