import Tarefa from "@/data/model/Tarefa";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function useTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const { alterarItem, obterItem } = useLocalStorage();
  useEffect(() => {
    carregarTarefas();
  });
  async function carregarTarefas() {
    const tarefasSalvas = await obterItem("tarefas");
    if (Array.isArray(tarefasSalvas)) setTarefas(tarefasSalvas);
  }

  function onDelete(tarefa: Tarefa) {
    const tarefasRestantes = tarefas.filter((t) => t.id !== tarefa.id);
    alterarTarefas(tarefasRestantes);
  }
  function concluirTarefa(tarefa: Tarefa) {
    const tarefasAtualizadas = tarefas.map((t) =>
      t.id === tarefa.id ? { ...t, concluida: true } : t,
    );
    alterarTarefas(tarefasAtualizadas);
  }
  function restaurarTarefa(tarefa: Tarefa) {
    const tarefasAtualizadas = tarefas.map((t) =>
      t.id === tarefa.id ? { ...t, concluida: false } : t,
    );
    alterarTarefas(tarefasAtualizadas);
  }
  function adicionarTarefa(tarefa: Tarefa) {
    const novaTarefa = {
      ...tarefa,
      id: Date.now().toString(),
      concluida: false,
    };

    alterarTarefas([...tarefas, novaTarefa]);
  }
  function alterarTarefas(tarefas: Tarefa[]) {
    setTarefas(tarefas);
    alterarItem("tarefas", tarefas);
  }
  return {
    tarefas,
    onDelete,
    concluirTarefa,
    restaurarTarefa,
    adicionarTarefa,
    alterarTarefas,
  };
}
