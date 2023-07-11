const header = document.querySelector('header')
const logo = document.querySelector('.logo')

header.addEventListener('mouseover', () => {
    header.classList.add('light-header')
    logo.src = 'static/imgs/Logo-blue.svg'
})

header.addEventListener('mouseout', () => {
    if (window.scrollY === 0) {
        header.classList.remove('light-header')
        logo.src = 'static/imgs/Logo-white.svg'
    }
})

window.addEventListener('scroll', (e) => {
    if (window.scrollY === 0) {
        header.classList.remove('light-header')
        logo.src = 'static/imgs/Logo-white.svg'
    }
    else{
        header.classList.add('light-header')
        logo.src = 'static/imgs/Logo-blue.svg'
    } 
})

