var arr = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];

//Ejercicio 1

for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
};

//Ejercicio 2
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    alert(arr[i]);
};

//Ejercicio 3

var emptyArr = [];
for (let i = 0; i < 10; i++) {
    emptyArr.push(i);
}

console.log(emptyArr);
