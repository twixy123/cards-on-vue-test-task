let showCard = document.querySelectorAll('.showCard')

showCard.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle('down')
        let divs = e.parentElement.querySelectorAll('.showElement')
        divs.forEach(div => {
            div.classList.toggle('active')
        })
    })
})