import { Component } from "react";
import ReactDom from "react-dom";
import { eventCenter, getCurrentInstance } from '@tarojs/taro'

const appRoot = document.getElementById('app');

export default function withPositionFixed(WrappedComponent) {
  return class extends Component {
    // eslint-disable-next-line react/sort-comp
    $instance = getCurrentInstance()

    constructor(props) {
      super(props)
      this.el = document.createElement('div');
      this.el.className = 'with-position-fixed';
    }

    componentWillMount () {
      const onShowEventId = this.$instance.router.onShow
      const onHideEventId = this.$instance.router.onHide
      // https://docs.taro.zone/docs/next/react#%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84-onshow
      eventCenter.on(onShowEventId, this.onShow);
      eventCenter.on(onHideEventId, this.onHide);
    }

    componentDidMount () {
      appRoot.appendChild(this.el)
    }

    componentWillUnmount() {
      this.setState = () => false; // https://blog.csdn.net/u012149969/article/details/105670055
      const onShowEventId = this.$instance.router.onShow
      const onHideEventId = this.$instance.router.onHide
      // 卸载
      eventCenter.off(onShowEventId, this.onShow)
      eventCenter.off(onHideEventId, this.onHide)
      appRoot.removeChild(this.el)
    }

    onShow = () => {
      console.log('from page onShow')

      this.el.style.display = '';
    }

    onHide = () => {
      console.log('from page onHide')

      this.el.style.display = 'none';
    }

    render() {
      return ReactDom.createPortal(
        <WrappedComponent {...this.props} />,
        this.el
      )
    }
  }
}
