import { useRouter } from "expo-router";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import React from "react";

export function BottonSomaNumeros() {
  const router = useRouter();
  const [numeroParImpar, setNumeroParImpar] = React.useState("");

  const handleClickParImpa = () => {
    if (!numeroParImpar) {
      alert("Digite um numero");
      return;
    }

    router.push({ pathname: "/parImpar", params: { numero: numeroParImpar } });
  };
  return (
    <View>
      <TextInput
        placeholder="Digite um número"
        keyboardType="numeric"
        value={numeroParImpar}
        onChangeText={setNumeroParImpar}
        style={{
          borderWidth: 1,
          borderColor: "#999",
          borderRadius: 8,
          padding: 10,
          width: 180,
          textAlign: "center",
          marginTop: 20,
        }}
      />
      <TouchableOpacity
        onPress={handleClickParImpa}
        style={{ marginTop: 20, padding: 10, backgroundColor: "#DDD" }}
      >
        <Text>Verificar Par ou Impar</Text>
      </TouchableOpacity>
    </View>
  );
}
