import Id from "../model/id";
import Tarefa from "../model/Tarefa";

export default [
  {
    id: Id.gerar(),
    titulo: "Estudo 1",
    descricao: "Estudo de fundamentos de desenvolvimento web",
    concluida: true,
  },
  {
    id: Id.gerar(),
    titulo: "Estudo 2",
    descricao: "Estudo node",
    concluida: true,
  },
  {
    id: Id.gerar(),
    titulo: "Estudo 3",
    descricao: "Estudo react",
    concluida: false,
  },
  {
    id: Id.gerar(),
    titulo: "Estudo 4",
    descricao: "Estudo web",
    concluida: false,
  },
  {
    id: Id.gerar(),
    titulo: "Estudo 5",
    descricao: "Estudo java",
    concluida: false,
  },
  {
    id: Id.gerar(),
    titulo: "Estudo 6",
    descricao: "Estudo pyton",
    concluida: false,
  },
] as Tarefa[];
