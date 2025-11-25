import Aluno from "@/data/model/aluno";
import { ScrollView } from "react-native";
import ResultadoAluno from "./ResultadoAluno";

export interface AprovadosProps {
  alunos: Aluno[];
}

export default function Aprovados(props: AprovadosProps) {
  const aprovados = props.alunos.filter((aluno) => aluno.nota >= 0);
  return (
    <ScrollView contentContainerStyle={{ gap: 10 }}>
      {aprovados.map((aluno) => (
        <ResultadoAluno key={aluno.id} aluno={aluno} />
      ))}
    </ScrollView>
  );
}
