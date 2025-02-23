let addBtn = document.getElementById('add-btn')
let addNumInput = document.getElementById('add-num-input')
let countWords = document.getElementById('count-words')
let reloadBtn = document.getElementById('reload-btn')
let peer = document.getElementById('peer')
let odd = document.getElementById('odd')
let peerText = document.getElementById('peer-text')
let oddText = document.getElementById('odd-text')
let result = document.getElementById('result')
let numbersList = document.getElementById('numbers-list')
let numeros = []

addBtn.addEventListener('click', function(){
    if (addNumInput.value === ""){
        addNumInput.placeholder = "Introduce un número"
        addNumInput.classList.add("errorPlaceholder")
    }

    if (addNumInput.value !== ""){
        addNumInput.placeholder = "Example: 34"
        addNumInput.classList.remove("errorPlaceholder")
        addNumInput.classList.add("formatPlaceholder")
        countWords.textContent = parseInt(countWords.textContent) + 1
        numeros.push(parseInt(addNumInput.value))
        añadirNum()
        addNumInput.value = ""
    }
    contarParesImpares()
})

function añadirNum(){
    numbersList.textContent += `${parseInt(addNumInput.value)} `
}

function contarParesImpares(){
    let peerCount = 0
    let oddCount = 0

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            peerCount++
        } else {
            oddCount++
        }
    }

    if (peerCount > oddCount){
        result.classList.remove("oddWin")
        result.classList.add("peerWin")
    } else if (oddCount > peerCount){
        result.classList.remove("peerWin")
        result.classList.add("oddWin")
    } else{
        result.classList.remove("oddWin")
        result.classList.remove("peerWin")
    }    

    peer.textContent = peerCount
    odd.textContent = oddCount
}

reloadBtn.addEventListener('click', function(){
    numeros = []
    countWords.textContent = 0
    peer.textContent = 0
    odd.textContent = 0
    result.classList.remove("oddWin")
    result.classList.remove("peerWin")
    numbersList.textContent = ""
})