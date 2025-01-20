const container = document.getElementById('container')
const off = document.getElementById('off-btn')
const bar = document.getElementById('bar')
const items = document.querySelectorAll('.item')
const result = document.getElementById('result')

let statusActive = true
let currentExpression = "" // Para almacenar la expresión actual

// Manejo de los botones de la calculadora
items.forEach(function(item) {
    item.addEventListener('click', function() {
        const value = item.textContent

        if (value === "=") {
            // Realiza el cálculo
            try {
                currentExpression = eval(currentExpression.replace('x', '*').replace(',', '.'))
                result.textContent = currentExpression
            } catch (e) {
                result.textContent = "Error"
            }
        } else if (value === "√") {
            // Calcula la raíz cuadrada
            try {
                currentExpression = Math.sqrt(eval(currentExpression))
                result.textContent = currentExpression
            } catch (e) {
                result.textContent = "Error"
            }
        } else {
            // Construye la expresión
            if (result.textContent === "0") result.textContent = ""
            currentExpression += value
            result.textContent = currentExpression
        }
    })
})

// Botón OFF para resetear
off.addEventListener('click', function() {
    currentExpression = ""
    result.textContent = "0"
})
