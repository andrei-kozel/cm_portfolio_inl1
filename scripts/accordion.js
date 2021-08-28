const accordion = document.querySelectorAll('.accordion')
accordion.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('accordion-active')
    const panel = item.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
}) 
