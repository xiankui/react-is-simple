# react-is-simple

## what's mean react ? [translate](https://translate.google.cn/#en/zh-CN/react)
  * respond or behave in a particular way in response to something

## [react home](https://facebook.github.io/react/)
  * Declarative 数据驱动的声明式UI
  * Component-Based 组件化
  * Learn Once, Write Anywhere 服务端渲染、RN客户端开发

## Important Features Of Reactjs
  * Virtual DOM

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