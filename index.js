/**
 * set type="text/babel"
 * babel can presets es2015 and react jsx
 */

/**
 * Thinking in React
 */
const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

/**
 * Step 1: Break The UI Into A Component Hierarchy
 * 依据单一职能原则，把UI分成组件等级体系
 */
const UI = {
  FilterableProductTable: {
    SearchBar: 'Component',
    ProductTable: {
      ProductCategoryRow: 'Component',
      ProductRow: 'Component'
    }
  }
}

/**
 * Step 2: Build A Static Version in React
 * 小型组件可以从上到下组织开发，大型组件可以从下往上开发更方便
 */
const StaticFilterableProductTable = (props) => {
  return (
    <div>
      <StaticSearchBar />
      <ProductTable products={props.products} />
    </div>
  )
}

const StaticSearchBar = () => (
  <form>
    <input type="text" placeholder="Search..." />
    <p>
      <input type="checkbox" />
      {' '}
      Only show products in stock
    </p>
  </form>
)

const ProductTable = (props) => {
  let products = props.products;
  let rows = [];
  let lastCategory = '';

  for (let product of products) {
    let category = product.category;

    // add ProductCategoryRow
    if (category !== lastCategory) {
      lastCategory = category;
      rows.push(
        <ProductCategoryRow
          key={category}
          category={category} />
      )
    }

    rows.push(
      <ProductRow 
        key={product.name}
        name={product.name}
        price={product.price} />
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

const ProductCategoryRow = (props) => (
  <tr>
    <th colSpan="2">{props.category}</th>
  </tr>
)

const ProductRow = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>{props.price}</td>
  </tr>
)


/**
 * Step 3: Identify The Minimal (but complete) Representation Of UI State
 * Don't Repeat Yourself. 可以通过计算得出的，就不要设置state
 *   - The original list of products (props, not state)
 *   - The search text the user has entered (yes state)
 *   - The value of the checkbox (yes state)
 *   - The filtered list of products (can computed, not state)
 */

/**
 * Step 4: Identify Where Your State Should Live
 * that must be FilterableProductTable
 */

 /**
  * Step 5: Add Inverse Data Flow
  */

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
    this.handleInStockInput = this.handleInStockInput.bind(this)
  }

  filter(products, filterText, inStockOnly) {
    if (inStockOnly) {
      products = products.filter(product => product.stocked)
    }

    if (!!filterText) {
      products = products.filter(product => product.name.indexOf(filterText) !== -1)
    }

    return products;
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText
    })
  }

  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly
    })
  }

  render() {

    let filterProducts = this.filter(this.props.products, this.state.filterText, this.state.inStockOnly)

    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput} />
        <ProductTable products={filterProducts} />
      </div>
    )
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      filterText,
      inStockOnly,
      onFilterTextInput,
      onInStockInput
    } = this.props;

    return (
      <form>
        <input type="text" value={filterText} placeholder="Search..."
          onChange={e => onFilterTextInput(e.target.value)} />
        <p>
          <input type="checkbox" checked={inStockOnly} 
            onChange={e => onInStockInput(e.target.checked)} />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}


/**
 * code is read far more than it's written
 * with react, write modular, explicit code.
 * enjoy it!
 */

ReactDOM.render(
	<FilterableProductTable products={PRODUCTS} />,
	document.getElementById('root')
)