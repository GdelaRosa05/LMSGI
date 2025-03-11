// Declaramos las variables, empezamos guardando los
// input en variables.
const input1 = $(".input1")
const input2 = $(".input2")
// Ahora declaramos las variables de los botones
const sumar = $(".sumar")
const restar = $(".restar")
const dividir = $(".dividir")
const multiplicar = $(".multiplicar")
// Y por último la variable del resultado
const resultado = $(".result")

// Vamos a darle funcionabilidad a los botones
// Para ello empezamos iniciando las funciones si
// la página está cargada
$(document).ready(function(){
    // Suma
    sumar.click(function(){
        // Guardamos el valor numérico de los inputs en variables
        let num1 = Number(input1.val())
        let num2 = Number(input2.val())

        resultado.text(num1 + num2)
    })

    // Resta
    restar.click(function(){
        // Guardamos el valor numérico de los inputs en variables
        let num1 = Number(input1.val())
        let num2 = Number(input2.val())

        resultado.text(num1 - num2)
    })

    // División
    dividir.click(function(){
        // Guardamos el valor numérico de los inputs en variables
        let num1 = Number(input1.val())
        let num2 = Number(input2.val())

        resultado.text(num1 / num2)
    })

    // Multiplicación
    multiplicar.click(function(){
        // Guardamos el valor numérico de los inputs en variables
        let num1 = Number(input1.val())
        let num2 = Number(input2.val())

        resultado.text(num1 * num2)
    })
})