const burgerIcon = document.querySelector(".menu-icon")
const menuBody = document.querySelector(".menu__body")
const menuLinks = document.querySelectorAll('.nav-item')

burgerIcon.addEventListener('click', () => {
   menuBody.classList.toggle("_active")
   burgerIcon.classList.toggle("_active")
   document.body.classList.toggle("_lock")
})

menuLinks.forEach((link) => {
   link.addEventListener('click', () => {
      if (burgerIcon.classList.contains('_active')) {
      menuBody.classList.remove("_active")
      burgerIcon.classList.remove("_active")
      document.body.classList.remove("_lock")
      }
   })
})





