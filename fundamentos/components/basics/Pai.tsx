import { StyleSheet, Text, View } from "react-native";

interface PaiProps {
  children?: any;
}

export function Pai(props: PaiProps) {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white" }}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 100,
    backgroundColor: "#ff0000ff",
  },
});
