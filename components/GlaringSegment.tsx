import { PropsWithChildren } from "react";
import { StyleProp, ViewStyle, View, StyleSheet } from "react-native";


type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}>

export const GlaringSegment: React.FC<Props> = ({ children, style, contentStyle }) => {
  return (
    <View style={[styles.segmentContainer, style]}>
      <View style={[styles.segment, contentStyle]}>{children}</View>
    </View>

  )
}

const styles = StyleSheet.create({
  segmentContainer: {},
  segment: {}
})


