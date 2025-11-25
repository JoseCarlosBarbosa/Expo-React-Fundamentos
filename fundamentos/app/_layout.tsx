import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Fundamentos" }} />
      <Stack.Screen name="primeiro" options={{ title: "Primeiro" }} />
      <Stack.Screen name="segundo" options={{ title: "Segundo" }} />
      <Stack.Screen name="modelo" options={{ title: "Modelo" }} />
      <Stack.Screen name="component" options={{ title: "Component" }} />
      <Stack.Screen name="propriedade" options={{ title: "Propriedade" }} />
      <Stack.Screen name="parImpar" options={{ title: "ParImpar" }} />
      <Stack.Screen name="lista" options={{ title: "Lista" }} />
      <Stack.Screen name="filhos" options={{ title: "filhos" }} />
      <Stack.Screen name="contador" options={{ title: "Contador" }} />
      <Stack.Screen name="formulario" options={{ title: "Formulario" }} />
      <Stack.Screen name="megaSena" options={{ title: "MegaSena" }} />
      <Stack.Screen
        name="tarefas"
        options={{
          title: " Projeto Tarefas",
          headerStyle: { backgroundColor: "Blue" },
          headerTintColor: "white",
          headerTitleStyle: { color: "white" },
          headerBackTitle: "Voltar",
        }}
      />
    </Stack>
  );
}
