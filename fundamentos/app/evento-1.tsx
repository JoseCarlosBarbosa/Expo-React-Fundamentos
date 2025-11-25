import { Text, View, StyleSheet, Pressable } from "react-native";
import { styles } from "./styles";

export default function Evento1() {
  function handlePress() {
    alert("Clicou no botão!");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textBlack}> Eventos 1</Text>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.textWhite}>Botão</Text>
      </Pressable>
    </View>
  );
}
