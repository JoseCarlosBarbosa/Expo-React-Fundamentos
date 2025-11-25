import { Text, View } from "react-native";
import { styles } from "./styles";
import Contador from "@/components/state/Contador";

export default function TelaContador() {
  return (
    <View style={styles.conatinerMain}>
      <Text style={styles.textBlack}>
        <Contador titulo={"Participantes"} inicial={0} />
        <Contador titulo={"Quantidade de produtos"} inicial={5} />
      </Text>
    </View>
  );
}
