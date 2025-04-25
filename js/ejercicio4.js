const numero = parseInt(prompt("Introduce un número entero:"));

let resultado = 1;

for (let i = 1; i <= numero; i++) {
  resultado *= i;
}

console.log(`La multiplicación de todos los números desde 1 hasta ${numero} es: ${resultado}`);