### Taro 3.3.19 开始支持路由过渡动画，但是 `transform` 不为`none` 导致后代元素使用`position：fixed` 属性不生效

### 利用 `ReactDom.createPortal` api 使想要使用`position：fixed` 属性的组建脱离带有`transform`的容器

[ReactDom.createPortal](https://zh-hans.reactjs.org/docs/portals.html)

```
尽管 portal 可以被放置在 DOM 树中的任何地方，但在任何其他方面，其行为和普通的 React 子节点行为一致。由于 portal 仍存在于 React 树， 且与 DOM 树 中的位置无关，那么无论其子节点是否是 portal，像 context 这样的功能特性都是不变的。

这包含事件冒泡。一个从 portal 内部触发的事件会一直冒泡至包含 React 树的祖先，即便这些元素并不是 DOM 树 中的祖先
```

这个特性有一个好处，就是虽然 DOM 树 改变了位置，但是 React 树不变。这导致 比如 使用了 `ReactDom.createPortal` 的 Child 组建 放到 A 这个父组建里边了，当A 销毁时，Child 组建也会一起销毁。

所以有了这个特性我们就不需要担心页面销毁后，组建还在。

但是 Taro 有一种情况时`hide` 状态，比如一个页面`hide`之后 其实就是`display:none`，并没有销毁页面/组建，使用了`TabBar`的时候就是这样的情况。
那 Tab1 跳转到 Tab2 之后，Tab1 里边使用了 `ReactDom.createPortal`的组建 还是在显示。

这种情况我们需要 Taro 内置的消息机制监听页面组件的`onShow()`生命周期来控组建的显示。具体实现在`src/components/withPositionFixed.js`
