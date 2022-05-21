var arr = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];

// Ejercicio 1 Crear un array que contenga 5 palabras y recorrer dicho array utilizando 
// un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
};

// Ejercicio 2 Al array anterior convertir la primera letra de cada palabra en mayúscula 
// y mostrar una alerta por cada palabra modificada.
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    alert(arr[i]);
};

// Ejercicio 3 Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array
// con el número de la repetición, es decir que al final de la ejecución del bucle for debería
// haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola 
// del navegador el array final (utilizar console.log).

var emptyArr = [];
for (let i = 0; i < 10; i++) {
    emptyArr.push(i);
}

console.log(emptyArr);
