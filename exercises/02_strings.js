//Variables
var string1 =  'Holass SOY Fede 2';

// Ejercicio 1 Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var substring = string1.substring(0, 5);
console.log(substring);

// Ejercicio 2 Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
// (utilizar substring, toUpperCase, toLowerCase y el operador +).
var subLetter = string1.substring(0, 1);
var subPhrase = string1.substring(1);
var result = subLetter.toUpperCase() + subPhrase.toLowerCase();
console.log(result);

// Ejercicio 3 Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var FirstwhiteSpace = string1.indexOf(' ');
console.log(FirstwhiteSpace);