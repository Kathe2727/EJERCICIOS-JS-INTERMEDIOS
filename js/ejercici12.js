const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
let intentos = 0;
const maxIntentos = 5;

while (intentos < maxIntentos) {
  const adivinanza = parseInt(prompt("Adivina el número entre 1 y 50:"));

  if (adivinanza === numeroAleatorio) {
    alert("¡Felicidades! Adivinaste el número.");
    break;
  } else if (adivinanza < numeroAleatorio) {
    alert("Más alto.");
  } else {
    alert("Más bajo.");
  }

  intentos++;

  if (intentos === maxIntentos) {
    alert(`Lo siento, no adivinaste el número. El número era ${numeroAleatorio}.`);
  }
}