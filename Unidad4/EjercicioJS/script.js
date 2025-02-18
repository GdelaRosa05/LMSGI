//APARTADO 1
//En este caso se pide que crees un vector de 100 números y devuelvas el sumatorio de todos los números.
let listaNum = []

for(let j = 0; j <= 100; j++){
    listaNum.push(j)
}

let sumaNum = 0

for(let i = 0; i < listaNum.length; i++){
    sumaNum += listaNum[i]
}

document.write("La suma de todos los números del array es: " + sumaNum)

// APARTADO 2
//Diseña un script que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares. La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.

//Por ejemplo si tecleo: 3,5,4,6,7,8, 11 el script me dirá que el array de entrada es [3,5,4,6,7,8, 11] y que hay 3 pares y 4 impares.
const numeros = [];
let pares = 0;
let impares = 0;

while (true) {
    let input = prompt("Introduce un número (0 para salir):");

    if (input === null || isNaN(input) || input.trim() === "" || Number(input) === 0) {
        break;
    }

    let numero = Number(input);
    numeros.push(numero);

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Array de entrada: [${numeros.join(", ")}]`);
console.log(`Números pares: ${pares}`);
console.log(`Números impares: ${impares}`);
