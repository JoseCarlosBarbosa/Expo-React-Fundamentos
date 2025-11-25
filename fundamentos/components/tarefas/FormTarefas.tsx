import Tarefa from "@/data/model/Tarefa";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TextInput, View, StyleSheet } from "react-native";

interface FormTarefaProps {
  tarefa?: Tarefa;
  adicionarTarefa: (tarefa: Tarefa) => void;
}

export default function FormTarefas({ adicionarTarefa }: FormTarefaProps) {
  const [descricao, setDescricao] = useState("");
  function handleAdd() {
    if (!descricao.trim()) return;
    const novaTarefa: Tarefa = {
      id: "",
      titulo: descricao,
      descricao,
      concluida: false,
    };
    adicionarTarefa(novaTarefa);
    setDescricao("");
  }
  return (
    <View style={styles.container}>
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
        placeholder="DIGITE A DESCRIÇÃO DA TAREFA"
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleAdd}>
        <AntDesign name="plus" size={22} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    gap: 12,
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#aaa",
    paddingHorizontal: 12,
    fontSize: 14,
    textAlign: "left",
  },

  button: {
    width: 50,
    height: 50,
    backgroundColor: "orange",

    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
