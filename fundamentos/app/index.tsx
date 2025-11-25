import { Link } from "expo-router";
import { Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.conatinerMain}>
      <View style={styles.container}>
        <Text style={styles.capitulo}>Fundamentos do React Native</Text>
        <Link href="/primeiro">
          <Text>Primeiro</Text>
        </Link>
        <Link href="/evento-1">
          <Text>Eventos #1</Text>
        </Link>
        <Link href="/condicional">
          <Text>Renderização condicional</Text>
        </Link>
        <Link href="/filhos">
          <Text>Componentes Filhos</Text>
        </Link>
        <Link href="/primeiro">
          <Text>Clique Aqui</Text>
        </Link>
        <Link href="/modelo">
          <Text>Comp Modelo</Text>
        </Link>
        <Link href="/segundo">
          <Text>Segundo tallwind</Text>
        </Link>
        <Link href="/component">
          <Text>Utilizando Components</Text>
        </Link>
        <Link href="/propriedade">
          <Text>Passando props por parametro</Text>
        </Link>
        <Link href="/lista">
          <Text>Ir para Lista</Text>
        </Link>
        <Link href="/parImpar">
          <Text>Vai pra Par/Impar</Text>
        </Link>
      </View>
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <Text style={styles.capitulo}>Gerenciamento de Estados</Text>
        <Link href="/tarefas">
          <Text style={{ fontSize: 18 }}>Tarefas</Text>
        </Link>
      </View>
      <View style={styles.container}>
        <Text style={styles.capitulo}>Gerenciamento de Estados</Text>
        <Link href="/contador">
          <Text>Contador</Text>
        </Link>
        <Link href="/formulario">
          <Text>Formulario</Text>
        </Link>
        <Link href="/megaSena">
          <Text>Mega Sena</Text>
        </Link>
      </View>
    </View>
  );
}
