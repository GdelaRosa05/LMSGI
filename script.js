const notchItem = document.querySelectorAll('.notch-item')

notchItem.forEach(item => {
    item.addEventListener('click', function(event){
        notchItem.forEach(i => i.classList.remove('active'))
        this.classList.add('active')
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('a[href^="#"]')

    function onScroll() {
        let currentAnchor = null

        anchors.forEach(anchor => {
            const section = document.querySelector(anchor.getAttribute('href'))

            if (section.getBoundingClientRect().top <= 0) {
                currentAnchor = anchor
            }
        })

        anchors.forEach(anchor => {
            anchor.classList.remove('active')
        })

        if (currentAnchor) {
            currentAnchor.classList.add('active')
        }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
})