function esBisiesto(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "es un ano bisiesto" ; 
    } else {
        return "no es un ano bisiesto";
    }
}

function year() {
    let year = esBisiesto(Math.floor(Math.random() * 3000));
    console.log(year);

}

year();