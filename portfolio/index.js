const burgerIcon = document.querySelector(".menu-icon")
const menuBody = document.querySelector(".menu__body")
const link1 = document.querySelector(".link1")
const link2 = document.querySelector(".link2")
const link3 = document.querySelector(".link3")
const link4 = document.querySelector(".link4")
const link5 = document.querySelector(".link5")

burgerIcon.addEventListener('click', function (a) {
   menuBody.classList.toggle("_active")
   burgerIcon.classList.toggle("_active")
   document.body.classList.toggle("_lock")
})

link1.addEventListener("click", function (b) {
   if (burgerIcon.classList.contains("_active")) {
   menuBody.classList.remove("_active")
   burgerIcon.classList.remove("_active")
   document.body.classList.remove("_lock")
}
})

link2.addEventListener("click", function (c) {
   if (burgerIcon.classList.contains("_active")) {
   menuBody.classList.remove("_active")
   burgerIcon.classList.remove("_active")
   document.body.classList.remove("_lock")
}
})

link3.addEventListener("click", function (d) {
   if (burgerIcon.classList.contains("_active")) {
   menuBody.classList.remove("_active")
   burgerIcon.classList.remove("_active")
   document.body.classList.remove("_lock")
}
})

link4.addEventListener("click", function (e) {
   if (burgerIcon.classList.contains("_active")) {
   menuBody.classList.remove("_active")
   burgerIcon.classList.remove("_active")
   document.body.classList.remove("_lock")
}
})

link5.addEventListener("click", function (f) {
   if (burgerIcon.classList.contains("_active")) {
   menuBody.classList.remove("_active")
   burgerIcon.classList.remove("_active")
   document.body.classList.remove("_lock")
}
})

console.log("75")