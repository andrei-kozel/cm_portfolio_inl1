const slides = document.querySelectorAll('.carousel-slide')
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')
let index = 1

nextButton.addEventListener('click', () => {
  index++
  showSlide(index)
})

prevButton.addEventListener('click', () => {
  index-- 
  showSlide(index)
})

const showSlide = (ind) => {
  if (ind > slides.length) {
    index = 1
  }
  if (ind < 1) {
    index = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
    slides[index - 1].style.maxHeight = 0 + 'px'
  }
  slides[index - 1].style.display = 'block'
  slides[index - 1].style.maxHeight = slides[index - 1].scrollHeight + 'px'
}

showSlide(index)
