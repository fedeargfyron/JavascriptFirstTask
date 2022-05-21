const obtenerEntero = (num) => {
    if(num - Math.floor(num) !== 0){
        alert(`El número ${num} no es entero`);
        num = Math.round(num);
    }

    return num;
}

const sumar = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)){
        alert('Parametros equivocados');
        return NaN;
    }

    return obtenerEntero(num1) + obtenerEntero(num2);
}

var suma = sumar(1.5, 5.2);
console.log(suma);