import InputTextButton from "@/components/basics/InputText";
import ButtonInput from "@/ComponentsReutilizaveis/button";
import { Text, View } from "react-native";
import { styles } from "./styles";
import useMegaSena from "@/hooks";

export default function MegaSena() {
  const { quant, numeros, handleGenerate, setQuant } = useMegaSena();

  return (
    <View style={styles.containerMega1}>
      <View style={styles.containerMega5}>
        <Text style={styles.titleMega1}>Mega Sena</Text>
        <InputTextButton
          value={quant}
          onChangeText={setQuant}
          placeholder="Insira a quantidade de numero"
        ></InputTextButton>

        <View style={styles.containerMega2}>
          <ButtonInput
            style={{
              backgroundColor: "blue",
              width: "100%",
            }}
            onPress={handleGenerate}
            title="Gerar Números"
          />
        </View>
      </View>
      <View style={styles.containerMega3}>
        {numeros.map((numero, index) => (
          <Text key={index} style={styles.numeroMega}>
            {numero}
          </Text>
        ))}
      </View>
    </View>
  );
}
