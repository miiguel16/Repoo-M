function esPasswordValido(password) {

    if (password.replace(/\s/g, '').length < 8) {
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        return false;
    }

    if (!/\d/.test(password)) {
        return false;
    }

    return true;
}
function inicio() {
    let password=esPasswordValido("abcd123A")
    console.log(password);
}
inicio();
