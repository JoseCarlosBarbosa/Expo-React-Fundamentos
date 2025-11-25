import { divCenter, textBold, textRed500, textXl } from "@/styles/utils";
import { Text, View } from "react-native";

export default function modelo() {
  return (
    <View style={divCenter}>
      <Text style={[textXl, textBold, textRed500]}> Segundo</Text>
    </View>
  );
}
