const menu = document.querySelector('.menu')
const startBtn = document.querySelector('.new-game-btn')
const aboutBtn = document.querySelector('.about-btn')
const cardContainer = document.querySelector('.cards__container')
const menuAbout = document.querySelector('.menu-about')
const backBtn = document.querySelectorAll('.back-btn')

startBtn.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.toggle('_active')
        cardContainer.classList.toggle('_active')
    }, 300)
})

// cardContainer.addEventListener('click', () => {
//     menu.classList.toggle('_active')
//     cardContainer.classList.toggle('_active')
// })

aboutBtn.addEventListener('click', ()=>{
    setTimeout(() => {
        menu.classList.toggle('_active')
        menuAbout.classList.toggle('_active')
    }, 300)
})

backBtn.forEach((item)=>{
    item.addEventListener('click', ()=>{
        setTimeout(() => {
            menu.classList.toggle('_active')
            menuAbout.classList.remove('_active')
            cardContainer.classList.remove('_active')
        }, 300)
    })
})

