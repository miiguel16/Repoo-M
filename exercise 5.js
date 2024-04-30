function factorial(numero) {
    
    if (numero < 0) {
        return "No se puede calcular el factorial de un número negativo";
    }
    
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let resultado = 1;

    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function factors() {
    let factores = factorial(5)
    console.log(factores);
}

factors();
