import React from "react";
import { StyleSheet, TextInput, ViewStyle } from "react-native";

type InputTextProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export default function InputTextButton({
  value,
  onChangeText,
  placeholder,
}: InputTextProps) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      keyboardType="numeric"
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    display: "flex",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 18,
  },
});

/*
1- criar nova tela de navegação -- do
2- criar componente de input --
3- criar botão que sera clicado para gerar os numeros
4- criar função que ira gerar os numeros com a quantidade de numeros definido pelo usuario
5- criar função que ira exibir os numeros gerados
6- criar função que ira colocar os numeros em ordem crescente
7- criar função que ira validar os numeros, validar se os numeros são iguais, validar se os numeros estão entre 1 e 60
8- colocar esses numeros em uma bolinha igual a bola da mega sena
9- Desejavel: Criar uma função que ira validar se o usuario digitou um numero valido
*/
