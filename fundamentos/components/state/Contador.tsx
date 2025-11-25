import { styles } from "@/app/styles";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { contadorProps } from "../interface/interfaces";

export default function Contador(props: contadorProps) {
  const [numero, setNumero] = useState(props.inicial);

  function incrementa() {
    return setNumero(numero + 1);
  }
  function decrementar() {
    return setNumero(numero - 1);
  }
  return (
    <View style={styles.conatinerMain}>
      <Text style={styles.textBlack}>Contador: {props.titulo}</Text>
      <Text style={styles.textBold}> {numero}</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Pressable onPress={decrementar}>
          <AntDesign name="minus" />{" "}
        </Pressable>
        <Pressable onPress={incrementa}>
          <AntDesign name="plus" />
        </Pressable>
      </View>
    </View>
  );
}
