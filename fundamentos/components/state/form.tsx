import { styles } from "@/app/styles";

import { View } from "react-native";
import { formProps } from "../interface/interfaces";
import CampoTexto from "./CampoDeTexto";

export default function Formulario(props: formProps) {
  return (
    <View>
      <CampoTexto
        label={props.label}
        style={styles.buttonForm}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        erro={props.erro}
      />
    </View>
  );
}
