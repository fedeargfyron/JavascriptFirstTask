//Variables
var string1 =  'Holass SOY Fede 2';

// Ejercicio 1
var substring = string1.substring(0, 5);
console.log(substring);

// Ejercicio 2
var subLetter = string1.substring(0, 1);
var subPhrase = string1.substring(1);
var result = subLetter.toUpperCase() + subPhrase.toLowerCase();
console.log(result);

//Ejercicio 3
var FirstwhiteSpace = string1.indexOf(' ');
console.log(FirstwhiteSpace);