export function ordenarNumeros(numeros: number[]): number[] {
  return [...numeros].sort((a, b) => a - b);
}
