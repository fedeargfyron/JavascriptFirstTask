//Ejercicio 1
var random = Math.random();
var result = random > .5 ? 'Greater than 0,5' : 'Lower than 0,5';
alert(result);

//Ejercicio 2
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