const fechaNacimiento = prompt("Introduce tu fecha de nacimiento (en formato YYYY-MM-DD):");

const fechaNacimientoDate = new Date(fechaNacimiento);
const fechaActual = new Date();
const diferenciaMilisegundos = fechaActual - fechaNacimientoDate;
const edadEnDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
console.log(`Tu edad en días es: ${edadEnDias} días.`);