import If from "@/components/shared/if";
import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";

export default function modelo() {
  const nota = 9;
  return (
    <View style={styles.container}>
      <Text style={styles.textBlack}> Renderização condicional</Text>
      <If teste={nota > 7}>
        <Text style={styles.textBlack}>Aluno Aprovado com {nota}</Text>
        <Text style={styles.textBlack}>Aluno Reprovado com {nota}</Text>
      </If>
    </View>
  );
}
