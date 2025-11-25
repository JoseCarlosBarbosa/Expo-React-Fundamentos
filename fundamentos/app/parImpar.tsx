import { BottonSomaNumeros } from "@/components/basics/ButtonSomaNumeros";
import ParImpar from "@/components/basics/ParImpar";
import { container } from "@/styles/utils";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Modelo() {
  const { numero } = useLocalSearchParams<{ numero: string }>();
  const router = useRouter();
  const numeroConvertido = Number(numero);

  return (
    <View style={container}>
      <BottonSomaNumeros />
      <Text>
        O número {numeroConvertido} é: {<ParImpar numero={numeroConvertido} />}
      </Text>
    </View>
  );
}
