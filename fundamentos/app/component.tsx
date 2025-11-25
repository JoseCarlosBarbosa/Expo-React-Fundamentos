import Padrao, {
  AlternativoA,
  AlternativoB,
} from "@/components/basics/Componente";
import { container } from "@/styles/utils";
import { View } from "react-native";

export default function Componente() {
  return (
    <>
      <View style={container}>
        <AlternativoA />
        <AlternativoB />
      </View>
      <Padrao />
    </>
  );
}
