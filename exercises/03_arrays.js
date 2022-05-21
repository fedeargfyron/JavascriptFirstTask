// Variables
var arr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Ejercicio 1 Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
// "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
console.log(arr[5], arr[11]);

// Ejercicio 2 Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(arr.sort());

// Ejercicio 3 Agregar un elemento al principio y al final del array (utilizar unshift y push).
arr.push('Mes inventado final');
arr.unshift('Mes inventado inicio')
console.log(arr);

// Ejercicio 4 Quitar un elemento del principio y del final del array (utilizar shift y pop).

arr.pop();
arr.shift();
console.log(arr);

// Ejercicio 5 Invertir el orden del array (utilizar reverse).
arr.reverse();
console.log(arr);

// Ejercicio 6 Unir todos los elementos del array en un único string donde cada mes este separado
// por un guión - (utilizar join).
console.log(arr.join("-"));

// Ejercicio 7 Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
// Aclaración: Genero un nuevo array para que tenga sentido el ejercicio
var arr2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var indexMay = arr2.indexOf('Mayo');
var indexNov = arr2.indexOf('Noviembre');
console.log(arr2.slice(indexMay, indexNov + 1));