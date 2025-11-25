export function validarFormulario(form: any) {
  const errors: any = {};

  if (!form.nome?.trim()) {
    errors.nome = "Nome obrigatório";
  }

  if (!form.email?.trim()) {
    errors.email = "Email obrigatório";
  }

  if (!form.senha?.trim()) {
    errors.senha = "Senha obrigatória";
  }
  if (form.senha.length < 6) {
    errors.senha = "Senha deve ter pelo menos 6 caracteres";
  }
  return errors;
}
