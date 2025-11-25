import { Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import Formulario from "@/components/state/form";
import { useState } from "react";
import { validarFormulario } from "@/components/services/ValidateFormUser";

export default function TelaFormulario() {
  const [error, setError] = useState<any>({});
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  function handleChange() {
    const erros = validarFormulario(form);
    if (Object.keys(erros).length > 0) {
      setError(erros);
      return;
    }
    console.log({ nome: form.nome, email: form.email, senha: form.senha });
    setForm({ nome: "", email: "", senha: "" });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textBlack}> Formulario</Text>1
      <Formulario
        placeholder="Digite seu nome"
        label="Nome"
        value={form.nome}
        onChangeText={(nome) => setForm({ ...form, nome })}
        erro={error.nome}
      />
      <Formulario
        placeholder="Digite seu email"
        label="Email"
        value={form.email}
        onChangeText={(email) => setForm({ ...form, email })}
        erro={error.email}
      />
      <Formulario
        placeholder="Digite sua senha"
        label="Senha"
        value={form.senha}
        onChangeText={(senha) => setForm({ ...form, senha })}
        erro={error.senha}
      />
      <Pressable style={styles.sendButton} onPress={handleChange}>
        <Text style={styles.textWhite}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}
