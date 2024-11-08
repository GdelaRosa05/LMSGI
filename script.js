const notchItem = document.querySelectorAll('.notch-item')

notchItem.forEach(item => {
    item.addEventListener('click', function(event){
        event.preventDefault()
        notchItem.forEach(i => i.classList.remove('active'))
        this.classList.add('active')
    })
});