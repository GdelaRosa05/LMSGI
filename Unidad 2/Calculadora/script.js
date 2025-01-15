const container = document.getElementById('container')
const off = document.getElementById('off-btn')
const bar = document.getElementById('bar')
const items = document.querySelectorAll('.item')
const result = document.getElementById('result')

let statusActive = true
let itemsList = []

items.forEach(function(item){
    itemsList.push(item.textContent)

    item.addEventListener('click', function(){
        if(result.textContent === "0"){
            result.textContent = ""
        }
        result.textContent += item.textContent
    })
})

off.addEventListener('click', function(){
    result.textContent = "0"
})

if (statusActive == true){
    statusActive = false

    bar.addEventListener('click', function(){
        result.style.display = "none"
    
        items.forEach(function(item) {
            item.style.display = "none"
        })
    })
} else if (statusActive == false){
    statusActive = true

    bar.addEventListener('click', function(){
        result.style.display = "block"
    
        items.forEach(function(item) {
            item.style.display = "block"
        })
    })
}



