function greeting() {
    let name1 = "Edwin";
    let name = validateName(name1);
    if (name) {
        console.log("¡Hola " + name + ", bienvenido a mi programa!");
    } else {
        console.log("El nombre ingresado no es válido.");
    }
}

function validateName(name) {
    if (name.length < 2) {
        return null;
    }
    if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
        return null;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        return null;
    }
    return name;
}

greeting();
