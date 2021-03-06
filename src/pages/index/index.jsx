import { useCallback, useState } from "react";
import { View, Text, Button, Image, Navigator } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import { useDidHide } from '@tarojs/taro';
import HighButton from "../../components/HighButton";
import SelectContact from "../../components/select-contact";
import logo from "./hook.png";

import './index.less'

const Index = () => {
  const env = useEnv();
  const [visibleSelectContact, setVisibleSelectContact] = useState(false);
  const [_, { setTitle }] = useNavigationBar({ title: "Taro Hooks" });
  const [show] = useModal({
    title: "Taro Hooks!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
    mask: true,
  });
  const [showToast] = useToast({ mask: true });

  const handleModal = useCallback(() => {
    show({ content: "不如给一个star⭐️!" }).then(() => {
      showToast({ title: "点击了支持!" });
    });
  }, [show, showToast]);

  useDidHide(() => {
    console.log('home page useDidHide')
  })

  const closeSelectContact = () => {
    setVisibleSelectContact(false);
  }

  const selectContactCallback = (keys, options) => {
    setVisibleSelectContact(false);
  }

  return (
    <View className='wrapper'>
      <Image className='logo' src={logo} />
      <Text className='title'>Home</Text>
      <Navigator url='pages/detail/detail' className='nav'>Go To Detail</Navigator>
      <Text className='desc'>
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks!
        并结合ahook适配Taro!
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。

        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。

        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。

        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。

        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
        使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。

      </Text>
      <View className='list'>
        <Text className='label'>运行环境</Text>
        <Text className='note'>{env}</Text>
      </View>
      <Button className='button' onClick={() => setTitle("Taro Hooks Nice!")}>
        设置标题
      </Button>
      <Button className='button' onClick={handleModal}>
        使用Modal
      </Button>
      {/* <View className='btn-group'>+</View> */}
      <HighButton onClick={() => setVisibleSelectContact(true)} />
      <SelectContact
        visible={visibleSelectContact}
        onCancel={closeSelectContact}
        onOk={selectContactCallback}
        title='邀请成员'
      />
    </View>
  );
};

export default Index;
