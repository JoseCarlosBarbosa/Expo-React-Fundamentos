import MinMax from "@/components/basics/MinMax";
import { Text, View, StyleSheet } from "react-native";

export default function Propriedades() {
  return (
    <View>
      <MinMax min={3} max={20} />
      <MinMax min={3} max={20} />
      <MinMax min={3} max={20} />
    </View>
  );
}
