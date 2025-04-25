function verificarDivisibilidad() {
    let numeroTexto = prompt("Ingresa un número entero:");
    let numero = parseInt(numeroTexto);
    
    if (isNaN(numero)) {
        alert("Error: Debes ingresar un número entero válido.");
        return;
    }
    
    let divisores = [];
    
    if (numero % 2 === 0) {
        divisores.push(2);
    }
    
    if (numero % 3 === 0) {
        divisores.push(3);
    }
    
    if (numero % 5 === 0) {
        divisores.push(5);
    }
    
    if (numero % 7 === 0) {
        divisores.push(7);
    }
    
    if (divisores.length > 0) {
        alert(`El número ${numero} es divisible por: ${divisores.join(', ')}`);
    } else {
        alert(`El número ${numero} no es divisible por 2, 3, 5 ni 7.`);
    }
}

verificarDivisibilidad();