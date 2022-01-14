import { View, Text, Image } from "@tarojs/components";
import logo from "./hook.png";
import HighButton from "../../components/HighButton";
import './user.less'

const Index = () => {
  return (
    <View className='wrapper'>
      <Image className='logo' src={logo} />
      <Text className='title'>User</Text>
      <Text className='desc'>
      </Text>
      <HighButton>U</HighButton>
    </View>
  );
};

export default Index;
