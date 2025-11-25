import Aluno from "@/data/model/aluno";
import { StyleSheet, Text, View } from "react-native";

export interface ResultadoAlunoProps {
  aluno: Aluno;
}

export default function ResultadoAluno(props: ResultadoAlunoProps) {
  const { aluno } = props;
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>{aluno.nome}</Text>
      <Text style={styles.text}>{aluno.nota}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#222",
    marginBottom: 5,
    padding: 15,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
  },
});
