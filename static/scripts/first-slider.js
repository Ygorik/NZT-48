const slides = document.querySelector('.first-slider .slides')
const slidesInSlider = document.querySelectorAll('.first-slider .slide')
const buttonNext = document.querySelector('.first-slider .right-arrow')
const buttonPrev = document.querySelector('.first-slider .left-arrow')
let slideNum = 0
let maxWidth = window.innerWidth - 100

// Автоматическая установка размеров слайдов
slidesInSlider.forEach(slide => slide.style.minWidth = maxWidth + 'px')
slidesInSlider.forEach(slide => slide.style.maxWidth = maxWidth + 'px')

// Автоматическая размера слайдера
slides.style.width = slidesInSlider.length * 110 + '%'

// Отслеживание изменения размера окна и изменение размера слайда у первого слайдера
window.addEventListener('resize', () => {
    maxWidth = window.innerWidth - 100

    slidesInSlider.forEach(slide => slide.style.minWidth = maxWidth + 'px')
    slidesInSlider.forEach(slide => slide.style.maxWidth = maxWidth + 'px')
    slides.style.width = slidesInSlider.length * 110 + '%'
}, true)

// Функция отображения текщего слайда
function showSlide(n) {
    slidesInSlider[n].classList.add('active')
    const slideWidth = slidesInSlider[0].clientWidth
    slides.style.transform = `translateX(${-n * slideWidth - (n * 100)}px)`
    slidesInSlider[slideNum].classList.remove('active')
    slideNum = n
}

// Переключение на следующий слайд
buttonNext.addEventListener('click', () => {
    if (slideNum === slidesInSlider.length - 1) {
        showSlide(0)
    } else {
        showSlide(slideNum + 1)
    }
})

// Переключение на предыдущий слайд
buttonPrev.addEventListener('click', () => {
    if (slideNum === 0) {
        showSlide(slidesInSlider.length - 1)
    } else {
        showSlide(slideNum - 1)
    }
})
