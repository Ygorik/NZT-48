const seconSlider = document.querySelector(".second-slider .slides")
const secondSlidesInSlider = document.querySelectorAll(".second-slider .slide")
const secondButtonNext = document.querySelector(".second-slider .right-arrow")
const secondButtonPrev = document.querySelector(".second-slider .left-arrow")
let currentSlide = 0

// Автоматическая размера слайдера
seconSlider.style.width = 60 * secondSlidesInSlider.length + "vw"
seconSlider.style.left = 0

// Функция отображения текщего слайда
function secondShowSlide(n){
    secondSlidesInSlider[currentSlide].classList.remove('active');
    currentSlide = (n + secondSlidesInSlider.length) % secondSlidesInSlider.length;
    secondSlidesInSlider[currentSlide].classList.add('active');
    seconSlider.style.left = -50 * n + 'vw'
}

// Переключение на следующий слайд
secondButtonNext.addEventListener('click', () => {
    if (currentSlide < (secondSlidesInSlider.length - 1)) secondShowSlide(currentSlide + 1)
})

// Переключение на предыдущий слайд
secondButtonPrev.addEventListener('click', () => {
    if (currentSlide > 0) secondShowSlide(currentSlide - 1)
})
