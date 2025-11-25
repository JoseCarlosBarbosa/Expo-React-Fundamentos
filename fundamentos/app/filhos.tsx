import { Pai } from "@/components/basics/Pai";
import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";

export default function modelo() {
  return (
    <View style={styles.container}>
      <Text style={styles.textBlack}> Components Filhos</Text>
      <Pai>
        <Text>Filho #1</Text>
        <Text>Filho #2</Text>
        <Text>Filho #3</Text>
      </Pai>
    </View>
  );
}
