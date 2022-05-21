//Variables
var arr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//Ejercicio 1
console.log(arr[5], arr[11]);

//Ejercicio 2
console.log(arr.sort());

//Ejercicio 3
arr.push('Mes inventado final');
arr.unshift('Mes inventado inicio')
console.log(arr);

//Ejercicio 4

arr.pop();
arr.shift();
console.log(arr);

//Ejercicio 5
arr.reverse();
console.log(arr);

//Ejercicio 6
console.log(arr.join("-"));

//Ejercicio 7 (Genero un nuevo array para que tenga sentido el ejercicio)
var arr2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var indexMay = arr2.indexOf('Mayo');
var indexNov = arr2.indexOf('Noviembre');
console.log(arr2.slice(indexMay, indexNov + 1));