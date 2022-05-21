// Ejercicio 1 Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
// si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” 
// y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert()]
var random = Math.random();
var result = random > .5 ? 'Greater than 0,5' : 'Lower than 0,5';
alert(result);

// Ejercicio 2 Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre
// los siguientes mensajes de alerta:
// “Menor” si la edad es menor a 18
// “Mayor” si la edad es mayor o igual a 18 Y menor que 65
// “Jubilado” si la edad es mayor o igual que 65.
var age = '70'

if(age < 18){
    alert('Menor');
}
else if(age >= 65){
    alert('Jubilado');
}
else{
    alert('Mayor');
}