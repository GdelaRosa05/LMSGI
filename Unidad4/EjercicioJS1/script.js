// Se pide que crees un vector de 100 números y devuelvas el sumatorio de todos los números.

// Declaramos variables y arrays
let numeros = []
let sumatorio = 0
let result = document.getElementById('result')

// Creamos un bucle donde vaya introduciendo los 100 números
for(let i = 1; i <= 100; i++){
    numeros.push(i)
}

// Creamos un segundo bucle que sume todos los números
for(let j = 0; j < numeros.length; j++){
    sumatorio += numeros[j]
}

result.textContent = sumatorio