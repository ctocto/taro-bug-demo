import { View, Text, Image } from "@tarojs/components";
import { useDidHide } from '@tarojs/taro';
import logo from "./hook.png";
import HighButton from "../../components/HighButton";
import './detail.less'

const Index = () => {
  useDidHide(() => {
    console.log('useDidHide')
  })

  return (
    <View className='wrapper'>
      <Image className='logo' src={logo} />
      <Text className='title'>Detail</Text>
      <Text className='desc'>
      </Text>
      <HighButton color='#00ff00'>D</HighButton>
    </View>
  );
};

export default Index;
