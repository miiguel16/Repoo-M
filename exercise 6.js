function esPrimo(numero) {
    if (numero <= 1) {
        return "It is not a prime number"; 
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return "It is not a prime number"; 
        }
    }
    
    return "It is a prime number"; 
}

function PrimeNumbers() {
    let numeroAleatorio = Math.floor(Math.random() * 20);
    let prime=esPrimo(numeroAleatorio);
    console.log(prime);
}

PrimeNumbers();
