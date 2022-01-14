import { Component } from "react";
import ReactDom from "react-dom";
import { eventCenter, getCurrentInstance } from '@tarojs/taro'

export default function withPositionFixed(WrappedComponent) {
  return class extends Component {
    // eslint-disable-next-line react/sort-comp
    $instance = getCurrentInstance()

    state = {
      visible: true,
    }

    componentWillMount () {
      const onShowEventId = this.$instance.router.onShow
      const onHideEventId = this.$instance.router.onHide
      // https://docs.taro.zone/docs/next/react#%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84-onshow
      eventCenter.on(onShowEventId, this.onShow);
      eventCenter.on(onHideEventId, this.onHide);
    }

    componentWillUnmount() {
      this.setState = () => false; // https://blog.csdn.net/u012149969/article/details/105670055
      const onShowEventId = this.$instance.router.onShow
      const onHideEventId = this.$instance.router.onHide
      // 卸载
      eventCenter.off(onShowEventId, this.onShow)
      eventCenter.off(onHideEventId, this.onHide)
    }

    onShow = () => {
      console.log('from page onShow')
      this.setState({
        visible: true,
      })
    }

    onHide = () => {
      console.log('from page onHide')
      this.setState({
        visible: false,
      })
    }

    render() {
      const { visible } = this.state;

      if (visible) {
        return ReactDom.createPortal(
          <WrappedComponent {...this.props} />,
          document.getElementById('app')
        )
      }
      return null;
    }
  }
}
