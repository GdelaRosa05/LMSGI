const themeBtn = document.getElementById('theme')
const box = document.getElementById('box')
const personal = document.getElementById('personal')
const experiencia = document.getElementById('experiencia')
const estudios = document.getElementById('estudios')
let themeStatus = false

themeBtn.addEventListener('click', function(){
    if (themeStatus === false){
        themeStatus = true
        box.classList.remove('box')
        box.classList.add('box-light')
        personal.classList.remove('personal')
        personal.classList.add('personal-light')
        experiencia.classList.remove('experiencia')
        experiencia.classList.add('experiencia-light')
        estudios.classList.remove('estudios')
        estudios.classList.add('estudios-light')
    } else if(themeStatus === true){
        themeStatus = false
        box.classList.remove('box-light')
        box.classList.add('box')
        personal.classList.remove('personal-light')
        personal.classList.add('personal')
        experiencia.classList.remove('experiencia-light')
        experiencia.classList.add('experiencia')
        estudios.classList.remove('estudios-light')
        estudios.classList.add('estudios')
    }

    
})