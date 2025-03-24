import { PressableProps, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function ScaleAnimatedPressable(props: PressableProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }]
    }
  })

  const handlePressIn = () => {
    scale.value = withTiming(0.97, { duration: 80 })
  }

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 80 })
  }

  return (
    <AnimatedPressable
      onPressIn={(event) => {
        handlePressIn();
        if (props.onPressIn) {
          props.onPressIn(event);
        };
      }}
      onPressOut={(event) => {
        handlePressOut();
        if (props.onPressOut) {
          props.onPressOut(event);
        };
      }}
      style={animatedStyle}
      {...props}
    >
      {props.children}
    </AnimatedPressable>
  )
}