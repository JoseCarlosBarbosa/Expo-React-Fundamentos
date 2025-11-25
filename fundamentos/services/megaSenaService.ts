export default function gerarNumerosMega(quantidade: number): number[] {
  if (quantidade < 6 || quantidade > 20) {
    throw new Error("Quantidade inválida, insira um número entre 6 e 20");
  }
  const numeros: number[] = [];
  while (numeros.length < quantidade) {
    const numero = Math.floor(Math.random() * 60) + 1;
    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }
  return numeros;
}
