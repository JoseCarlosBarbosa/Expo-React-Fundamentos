import { View } from "react-native";
import FormTarefas from "./FormTarefas";

import ListaTarefas from "./ListaTarefas";
import useTarefas from "@/hooks/useTarefas";

export default function Tarefas() {
  const {
    tarefas,
    onDelete,
    concluirTarefa,
    restaurarTarefa,
    adicionarTarefa,
  } = useTarefas();
  return (
    <View>
      <FormTarefas adicionarTarefa={adicionarTarefa} />
      <ListaTarefas
        tarefas={tarefas}
        onDelete={onDelete}
        concluirTarefa={concluirTarefa}
        restaurarTarefa={restaurarTarefa}
      />
    </View>
  );
}
