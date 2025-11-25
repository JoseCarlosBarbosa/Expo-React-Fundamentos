import Aprovados from "@/components/basics/Aprovados";
import alunos from "@/data/constants/alunos";
import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";

export default function Lista() {
  return (
    <View style={styles.container}>
      <Text style={styles.textBlack}> Lista De Components</Text>
      <Aprovados alunos={alunos} />
    </View>
  );
}
