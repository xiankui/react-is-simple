/**
 * jsx in depth
 */

// 0. jsx components must be defined first.
// 1. jsx components need React.ceateElement to compile to react elements.
// 2. jsx components must be Capitalized, otherwise, it will be considered as HTML elements.
// 3. javascript expressions as props that surrounding with {} will be evaluated.
// 4. spread attributes can be used, likes <Component { ...propsObj} />
// 5. jsx removes whitespace at the beginning and ending of a line. It also removes blank lines. 
// 6. jsx children can be any types: ['String', 'Array', 'Object', 'Function', 'Other Component', 'JavaScript Expressions that return jsx', '...']
// 7. Booleans, Null, and Undefined Are Ignored
// 8. in one word, any thing React.createElement can compiled correctly is valid.

function Hello(props) {
	return <div>hello {props.toWhat}</div>
}

/** 
 * how jsx compile <Hello toWhat="world" />
 */
const HelloWorld = React.createElement(
	Hello, // must be Capitalized
	{toWhat: "world"}, // props
	null // children
)


function Greeting(props) {
	// jsx will compile all javascript expressions within it.
	return (
		<div>
			{props.whoami && `Hi, i am ${props.whoami}! `} 
			greeting
			{/* comments: jsx removes whitespace at the beginning and ending of a line */}
			{' '}
			{props.firstName}
			.
			{props.lastName}
		</div>
	)
}
const user = {
	whoami: 'Lily', // try undefined null true false and 0
	firstName: 'Michel',
	lastName: 'Jodan'
}

ReactDOM.render(
	// <div>hello world</div>,  // considered as plain HTML element
	// <Hello toWhat="world" />, // will be compiled to react element by React.createElement
	// HelloWorld,  // render react element
	<Greeting {...user} />, // spread attributes
	document.getElementById('root')
)