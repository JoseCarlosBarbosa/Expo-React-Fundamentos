import gerarNumerosMega from "@/services/megaSenaService";
import { ordenarNumeros } from "@/services/OrderCresc";
import { useState } from "react";
import { Alert } from "react-native";

export default function useMegaSena() {
  const [quant, setQuant] = useState("");
  const [numeros, setNumeros] = useState<number[]>([]);
  const [toastMessage] = useState("");
  const [toastVisible] = useState(false);

  const handleGenerate = () => {
    try {
      const qtd = Number(quant);
      const result = gerarNumerosMega(qtd);
      const ordenados = ordenarNumeros(result);
      setQuant("");
      setNumeros(ordenados);
    } catch (err: any) {
      Alert.alert(err.message);
      setQuant("");
    }
  };

  return {
    setQuant,
    quant,
    numeros,
    toastMessage,
    toastVisible,
    handleGenerate,
    setNumeros,
  };
}
