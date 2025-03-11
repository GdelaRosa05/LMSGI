// Seleccionamos todos los párrafos del HTML y los guardamos
// en la variable parrafosPares y parrafosImpares.
const parrafosPares = $("p:odd")
const parrafosImpares = $("p:even")

// Seleccionamos cada botón de la página llamándolos con sus
// respesctivas clases y los guardamos en variables.
const ocultarPares = $(".ocultar-pares")
const mostrarPares = $(".mostrar-pares")
const ocultarImpares = $(".ocultar-impares")
const mostrarImpares = $(".mostrar-impares")

// Cuando haya cargado el documento, cada vez que pulsemos un 
// botón, con el evento .click llamaremos a los efectos
// hide() para ocultar los parrafos pares o impares, o
// show() para mostrar los parrafos pares o impares. 
$(document).ready(function(){
    ocultarPares.click(function(){
        parrafosPares.hide()
    })
    mostrarPares.click(function(){
        parrafosPares.show()
    })
    ocultarImpares.click(function(){
        parrafosImpares.hide()
    })
    mostrarImpares.click(function(){
        parrafosImpares.show()
    })
})