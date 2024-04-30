 function operation() {
    let num1 = 2;
    let num2 = 4;
    const sum = suma(num1,num2);
    const res = resta(num1,num2);
    const mul = multiplicacion(num1,num2);
    const div = division(num1,num2);
    console.log("suma: "+sum)
    console.log("resta: "+res)
    console.log("multiplicacion: "+mul)
    console.log("divicion: "+div)
}

function suma(num1, num2) {
    let suma = "";
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
       console.log('Los valores deben ser números');
    } else{
        suma = num1 + num2;
    }
    
    return suma;
}

function resta(num1, num2) {
    let result = "";
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Los valores deben ser números');
    } else {
        result = num1 - num2;
    }
    return result;
}

function multiplicacion(num1, num2) {
    let result = "";
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Los valores deben ser números');
    } else {
        result = num1 * num2;
    }
    return result;
}

function division(num1, num2) {
    let result = "";
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Los valores deben ser números');
    } else {
        if (num2 === 0) {
            console.log('No se puede dividir por cero');
        } else {
            result = num1 / num2;
        }
    }
    return result;
}

operation();