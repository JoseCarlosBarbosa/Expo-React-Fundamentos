import { divCenter, textBold, textRed500 } from "@/styles/utils";
import { Text, View } from "react-native";

export default function Padrao() {
  return (
    <View style={divCenter}>
      <Text style={textRed500}> Componente Padrão</Text>
    </View>
  );
}

function AlternativoA() {
  return <Text style={textRed500}> Componente Alternativo A</Text>;
}

function AlternativoB() {
  return <Text style={textBold}> Componente Alternativo B</Text>;
}

export { AlternativoA, AlternativoB };
