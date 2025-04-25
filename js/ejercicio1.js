let numeros = [10, 20, 30, 40, 50, 60, 63, 79, 81, 95];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
let promedio = suma / numeros.length;
console.log(promedio);