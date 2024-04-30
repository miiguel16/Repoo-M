function contarCaracteres(cadena) {
    // Inicializamos contadores
    let letras = 0;
    let numeros = 0;
    let espacios = 0;

    // Recorremos la cadena
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];

        // Verificamos si es una letra
        if (/[a-zA-Z]/.test(caracter)) {
            letras++;
        }
        // Verificamos si es un número
        else if (/\d/.test(caracter)) {
            numeros++;
        }
        // Verificamos si es un espacio
        else if (caracter === ' ') {
            espacios++;
        }
    }

    return {
        letras: letras,
        numeros: numeros,
        espacios: espacios
    };
}


function words() {
    let word=contarCaracteres("Hola mundo 123")
    console.log("Cantidad de letras:", word.letras); // Devuelve 9
    console.log("Cantidad de números:", word.numeros); // Devuelve 3
    console.log("Cantidad de espacios:", word.espacios); // Devuelve 1
}

words();