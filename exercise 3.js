function operation() {
    let divicion = division(12, 5);
    console.log(divicion);
}

function division(dividendo, divisor) {
   
    if (divisor === 0) {
        return "No es posible dividir por cero";
    }

    let cociente = 0;
    let residuo = dividendo;

  
    while (residuo >= divisor) {
        residuo -= divisor;
        cociente++;
    }

    if (residuo === 0) {
        return cociente; 
    } else {
        return { cociente, residuo }; 
    }
}

operation();
