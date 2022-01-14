import { View } from "@tarojs/components";
import withPositionFixed from "./withPositionFixed";

function HighButton({ color, children, onClick }) {
  return <View className='btn-group' style={{backgroundColor: color || '#ff0000'}} onClick={onClick}>{children || '+'}</View>
}

export default withPositionFixed(HighButton)
