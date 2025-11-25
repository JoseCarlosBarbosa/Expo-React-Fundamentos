import { Text, TextInput, View, StyleSheet } from "react-native";
import { campoTextoProps } from "../interface/interfaces";
import If from "../shared/if";

export default function CampoTexto(props: campoTextoProps) {
  return (
    <View style={styles.container}>
      {/* Label acima */}
      <If teste={props.label}>
        <Text style={styles.label}>{props.label}</Text>
      </If>

      {/* Input */}
      <TextInput
        {...props}
        style={[styles.input, props.style]} // mantém padrão e permite sobrescrever se quiser
        placeholderTextColor="#777"
      />

      {/* Erro */}
      <If teste={props.erro}>
        <Text style={styles.error}>{props.erro}</Text>
      </If>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center", // 🔥 garante centralização igual ao print
  },

  label: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 14,
    color: "#000",
  },

  input: {
    width: 180, // 🔥 mantém SEMPRE o mesmo tamanho
    height: 40, // 🔥 fixa a altura
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    fontSize: 16, // não altera tamanho automaticamente
  },

  error: {
    color: "red",
    marginTop: 4,
    fontSize: 13,
  },
});
