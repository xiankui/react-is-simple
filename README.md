# 简单之美 - React官方文档导引 - [docs](https://facebook.github.io/react/docs/hello-world.html)

## what's mean react ? [translate](https://translate.google.cn/#en/zh-CN/react)
  * respond or behave in a particular way in response to something

## 三大特性
  * Declarative 数据驱动的声明式UI，从上到下的数据单向流动 `UI = f(state)`
  * Component-Based 可组合的状态化组件，以响应数据变化 `Component(props, state)`
  * Learn Once, Write Anywhere 独立于DOM之上的 `Virtual DOM` 可进行比如服务端渲染、RN客户端开发等

## git branch flow step by step, `npm install & npm run dev` when necessary
  * master
  * rendering-elements
  * components-and-props
  * state-and-lifecycle
  * handling-events
  * conditional-rendering
  * lists-and-keys
  * forms
  * lifting-state-up
  * composition-vs-inheritance
  * thinking-in-react
  * jsx-in-depth
  * typechecking-with-proptypes
  * refs-and-the-dom
  * optimizing-performance
  * reconciliation
  * web-components
  * higher-order-components
  * integrating-with-other-libraries
  * react-component
  * implementation-notes
  * design-principles


## The Component Lifecycle
  * Mounting
    + constructor(props)
      - it always contain `super(props)`
      - the right place to initialize state
      - the right place to bind functions
    
    + componentWillMount()
      - setting state synchronously in this method will not trigger a re-rendering
      - This is the only lifecycle hook called on server rendering
    
    + render()
      - the `render()` function should be pure
   
    + componentDidMount()
      - find DOM nodes can be goes here
      - a good place to instantiate the network request for load data
      - setting state in this method will trigger a re-rendering.

  * Updating
    + componentWillReceiveProps(nextProps)
      - This may occur when the parent component causes your component to re-render.
      - if you transform props to state when constructor, you may need `setState` again when nextProps is different from this.props.
      - Calling `this.setState` generally doesn't trigger `componentWillReceiveProps`.
    
    + shouldComponentUpdate(nextProps, nextState)
      - `shouldComponentUpdate()` is invoked before rendering when new props or state are being received. 
      - Defaults to true. 
      - This method is not called for the initial render or when forceUpdate() is used.
      -  if `shouldComponentUpdate()` returns false, then `componentWillUpdate()`, `render()`, and `componentDidUpdate()` will not be invoked.
      - React.PureComponent which implements `shouldComponentUpdate()` with a shallow prop and state comparison.
      - otherwise, for high performance you may compare prop and state by your hand.

    + componentWillUpdate()
      -  you cannot call this.setState() here.
   
    + render()
      - `render()` will not be invoked if `shouldComponentUpdate()` returns false.
    
    + componentDidUpdate(prevProps, prevState)

  * Unmounting
    + componentWillUnmount()
      - Perform any necessary cleanup in this method, such as invalidating timers...


## The Component Other API
  * setState((prevState, props) => stateChange)
  * forceUpdate(callback)
  * CustomComponent.defaultProps = {}
  * CustomComponent.propTypes = {}

## 参考推荐
  * [React 官网Docs 中文翻译](https://jobbym.gitbooks.io/react-docs-zh-cn/content/)
  * [Virtual DOM](https://github.com/livoras/simple-virtual-dom)