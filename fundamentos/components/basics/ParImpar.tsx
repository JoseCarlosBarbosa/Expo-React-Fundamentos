import { Text } from "react-native";

export interface ParImparProps {
  numero: number;
}

export default function ParImpar({ numero }: ParImparProps) {
  const isPar = numero % 2 === 0;
  return <>{isPar ? <Text>Par</Text> : <Text>Impar</Text>}</>;
}
