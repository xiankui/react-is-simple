# react-is-simple

## what's mean react ? [translate](https://translate.google.cn/#en/zh-CN/react)
  * respond or behave in a particular way in response to something

## [react home](https://facebook.github.io/react/)
  * Declarative 数据驱动的声明式UI
  * Component-Based 组件化
  * Learn Once, Write Anywhere 服务端渲染、RN客户端开发

## Important Features Of Reactjs
  * 虚拟DOM（React-DOM ====(dom-diff)====> Browser-DOM）
  * 数据（via props）单向流动


## Rendering Elements (渲染UI并让UI动起来)
  * Unlike browser DOM elements, React elements are plain objects, and are cheap to create. 
  * ReactDOM.render() method will generate react elements to real DOM elements.
  * And, Applications built with just React usually have a single root DOM node. 
  * So, how to Updating the Rendered Element ?
    - React 元素是不可变的，一旦生成就不可改变，包括子元素或属性
    - 元素就像电影的帧，代表了某一时刻的UI
    - 按照目前的了解为止，我们如果想更新UI，就只能重新调用ReactDOM.render()
    - 不过不用担心，React只更新必要的部分；它会拿当前帧（React Elements DOM）和之前的进行比较，只把变化的部分真正更新到浏览器DOM (react-dom-diff)
    - 由此可见，React性能是良好的

## Components 组件
  * 组件是元素的封装
  * 组件是UI的体现
  * 组件就像纯函数一样，对它的props属性（Read-Only）总是做出相同的回应
  * 组件总是采用大驼峰写法，并且只能由一个根元素包裹
  * 组件最好以UI为依据进行拆分，以方便重用
  * 它总是接受属性（props），导出JSX (react elements)

## Components Stateless 无状态组件
  * 无状态组件可用函数进行表达
  * 通过属性（props）传递数据

## Components Stateful 状态组件
  * 通过state的改变来触发组件的re-render
  * 通过setState来更新state，setState是异步方法
  * re-render触发了当前组件树的数据单向流动
  * stateful components lifecycle
    - componentWillMount
    - componentDidMount
    
    - componentWillReceiveProps
    - shouldComponentUpdate
    - componentWillUpdate
    - componentDidUpdate

    - componentWillUnmount

## 事件处理
  * React实现了标准的DOM事件，只是语法上有些不同；
  * translate lowercase to camelCase
  * translate "func-string()" to {func-define}
  * this 行为也与 javascript 保持一致，如必要需手动绑定；也可使用箭头函数

## 条件渲染
  * true && <C />   ==> <C />
  * false && <C />  ==> null
  * condition ? <C1 /> : <C2 />

## 列表渲染
  * [<Component />, <Component />, ...]
  * 每一项添加一个当前列表中唯一的字符串类型的属性key

## 受控组件(Controlled Components)
  * html的form表单具有默认的状态行为
  * React内的form表单当然也默认具有这种行为
  * 但是，当设置了value属性时，这种默认行为被打断，必须通过react的状态管理方式--setState来维护值的变化

## state提升
  * 当两个组件受同一个state控制的时候，把state提升到他们共同的父组件
  * 要尽量保持state最简单
  * 谨记从上到下的数据流动方向



