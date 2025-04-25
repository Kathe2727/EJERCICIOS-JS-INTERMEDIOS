const frase = prompt("Introduce una frase:");

const palabras = frase.trim().split(/\s+/);

console.log(`La frase tiene ${palabras.length} palabra(s).`);