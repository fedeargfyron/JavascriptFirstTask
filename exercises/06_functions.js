// 1- Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
// guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
// 2- A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un 
// número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como 
// resultado.
// 3- A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso 
// que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).


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