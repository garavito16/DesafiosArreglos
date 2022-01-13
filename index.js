function siempreHambriento(arr) {
    let cant = 0;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === "comida") {
            cant++;
            console.log("delicioso");
        }
    }
    if(cant === 0) console.log("Tengo hambre");
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > cutoff) {
            filteredArr.push(arr[index]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]



function betterThanAverage(arr) {
    let sum = 0;
    let promedio = 0;
    for (let index = 0; index < arr.length; index++) {
        sum+=arr[index];
    }
    promedio = sum/arr.length;
    var count = 0
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > promedio) {
            count++;
        }
    }
    return count;
}
var result2 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result2); // esperamos 4 de vuelta



function reverse(arr) {
    let arreglo = [];
    for (let index = arr.length - 1; index >= 0; index--) {
        arreglo.push(arr[index]);
    }
    return arreglo;
}

var result3 = reverse(["a", "b", "c", "d", "e"]);
console.log(result3); // esperamos de vuelta ["e", "d", "c", "b", "a"]




function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    let tamanio = 2;
    for (let index = 1; index <= n - 2; index++) {
        fibArr.push(fibArr[tamanio-1]+fibArr[tamanio-2]);
        tamanio++;
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]