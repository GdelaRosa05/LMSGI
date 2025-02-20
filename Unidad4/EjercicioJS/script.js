let addBtn = document.getElementById('add-btn')
let addNumInput = document.getElementById('add-num-input')
let countWords = document.getElementById('count-words')
let errorActive = false
let numeros = []

addBtn.addEventListener('click', function(){
    if (addNumInput.value === ""){
        addNumInput.placeholder = "Introduce un número"
        addNumInput.classList.add("errorPlaceholder")
    }

    if (addNumInput.value !== ""){
        errorActive = false
        addNumInput.placeholder = "Example: 34"
        addNumInput.classList.remove("errorPlaceholder")
        addNumInput.classList.add("formatPlaceholder")
        countWords.textContent = parseInt(countWords.textContent) + 1
        numeros.push(countWords.textContent)
        addNumInput.value = ""
        for (let i = 0; i < numeros.length; i++) {
            console.log(`Índice ${i}: ${numeros[i]}`);
        }
        
    }  
})