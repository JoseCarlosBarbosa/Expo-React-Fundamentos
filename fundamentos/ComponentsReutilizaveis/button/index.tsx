import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";

type ButtonProps = {
  onPress: () => void;
  title: string;
  color?: string;
  accessibilityLabel?: string;
  style?: ViewStyle;
};

export default function ButtonInput({
  onPress,
  title,
  color,
  style,
  accessibilityLabel,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      style={[styles.button, style]}
    >
      <Text style={[styles.text, { color: color || "#fff" }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#008f39",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    alignItems: "center",

    fontSize: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
