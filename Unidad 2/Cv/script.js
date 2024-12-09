const themeBtn = document.getElementById('theme')
const body = document.getElementById('body')
const box = document.getElementById('box')
const curriculum = document.getElementById('curriculum')
const box1 = document.getElementById('box1')
const personal = document.getElementById('personal')
const experiencia = document.getElementById('experiencia')
const estudios = document.getElementById('estudios')
const data = document.querySelectorAll('.data')
const box2Data = document.querySelectorAll('.box2-data')
const box2Data2Title = document.querySelectorAll('.box2-data2-title')
const box2Data2 = document.querySelectorAll('.box2-data2')
const headData = document.querySelectorAll('.head-data')
const box2Img = document.querySelectorAll('.box2-img')
const button = document.querySelectorAll('.button')
const github = document.getElementById('github')
const sun = document.getElementById('sun')
const download = document.getElementById('download')
const downloadBtn = document.getElementById('download-btn')

let themeStatus = false

downloadBtn.addEventListener('click', function(){
    window.location.href = 'Curriculum vitae - Gonzalo de la Rosa.pdf'
})

themeBtn.addEventListener('click', function(){
    if (themeStatus === false){
        themeStatus = true
        body.classList.remove('body')
        body.classList.add('body-light')
        box.classList.remove('box')
        box.classList.add('box-light')
        curriculum.classList.remove('curriculum')
        curriculum.classList.add('curriculum-light')
        box1.classList.remove('box1')
        box1.classList.add('box1-light')
        personal.classList.remove('personal')
        personal.classList.add('personal-light')
        experiencia.classList.remove('experiencia')
        experiencia.classList.add('experiencia-light')
        estudios.classList.remove('estudios')
        estudios.classList.add('estudios-light')

        data.forEach(function(item){
            item.classList.remove('data')
            item.classList.add('data-light')
        })

        box2Data.forEach(function(i){
            i.classList.remove('box2-data')
            i.classList.add('box2-data-light')
        })

        box2Data2Title.forEach(function(j){
            j.classList.remove('box2-data2-title')
            j.classList.add('box2-data2-title-light')
        })

        box2Data2.forEach(function(x){
            x.classList.remove('box2-data2')
            x.classList.add('box2-data2-light')
        })

        headData.forEach(function(y){
            y.classList.remove('head-data')
            y.classList.add('head-data-light')
        })

        box2Img.forEach(function(z){
            z.classList.remove('box2-img')
            z.classList.add('box2-img-light')
        })

        button.forEach(function(a){
            a.classList.remove('button')
            a.classList.add('button-light')
        })

        github.src = 'img/github-light.png'
        sun.src = 'img/moon.png'
        download.src = 'img/download-light.png'
    } else if(themeStatus === true){
        themeStatus = false
        body.classList.remove('body-light')
        body.classList.add('body')
        box.classList.remove('box-light')
        box.classList.add('box')
        box1.classList.remove('box1-light')
        box1.classList.add('box1')
        personal.classList.remove('personal-light')
        personal.classList.add('personal')
        experiencia.classList.remove('experiencia-light')
        experiencia.classList.add('experiencia')
        estudios.classList.remove('estudios-light')
        estudios.classList.add('estudios')
        data.forEach(function(item){
            item.classList.remove('data-light')
            item.classList.add('data')
        })

        box2Data.forEach(function(i){
            i.classList.remove('box2-data-light')
            i.classList.add('box2-data')
        })

        box2Data2Title.forEach(function(j){
            j.classList.remove('box2-data2-title-light')
            j.classList.add('box2-data2-title')
        })

        box2Data2.forEach(function(x){
            x.classList.remove('box2-data2-light')
            x.classList.add('box2-data2')
        })

        headData.forEach(function(y){
            y.classList.remove('head-data-light')
            y.classList.add('head-data')
        })

        box2Img.forEach(function(z){
            z.classList.remove('box2-img-light')
            z.classList.add('box2-img')
        })

        button.forEach(function(a){
            a.classList.remove('button-light')
            a.classList.add('button')
        })

        github.src = 'img/github.png'
        sun.src = 'img/sun.png'
        download.src = 'img/download.png'
    }
})