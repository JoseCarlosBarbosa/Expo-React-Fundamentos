import Tarefa from "@/data/model/Tarefa";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export interface ListaTarefasProps {
  tarefas: Tarefa[];
  onDelete: (tarefa: Tarefa) => void;
  concluirTarefa: (tarefa: Tarefa) => void;
  restaurarTarefa: (tarefa: Tarefa) => void;
}
export default function ListaTarefas(props: ListaTarefasProps) {
  return (
    <View style={styles.container}>
      {props.tarefas.map((tarefa, i) => (
        <View
          key={tarefa.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 12,
            marginRight: 12,
            height: 40,
            width: "90%",
            gap: 10,
            backgroundColor: tarefa.concluida
              ? "lightgray"
              : i % 2 === 0
                ? "#FFE5B4"
                : "#ffa500",
          }}
        >
          <Text
            style={{
              flex: 1,
              color: tarefa.concluida ? "gray" : "black",
              fontSize: 18,
              fontWeight: tarefa.concluida ? "bold" : "normal",
              textDecorationLine: tarefa.concluida ? "line-through" : "none",
            }}
          >
            {tarefa.titulo}
          </Text>
          {tarefa.concluida ? (
            <AntDesign
              name="sync"
              style={{ marginRight: 10 }}
              size={20}
              color="gray"
              onPress={() => props.restaurarTarefa?.(tarefa)}
            />
          ) : (
            <AntDesign
              name="check"
              style={{ marginRight: 10 }}
              size={20}
              color="green"
              onPress={() => props.concluirTarefa?.(tarefa)}
            />
          )}

          <AntDesign
            name="delete"
            size={24}
            color="red"
            onPress={() => props.onDelete(tarefa)}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
});
