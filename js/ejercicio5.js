const numeros = [15, 42, 3, 18, 90, 67, 29];

const numerosOrdenados = numeros.sort((a, b) => b - a);
const segundoMasGrande = numerosOrdenados[1];

console.log(`El segundo número más grande del array es: ${segundoMasGrande}`);