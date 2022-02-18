const menu = document.querySelector('.menu')
const startBtn = document.querySelector('.new-game-btn')
const aboutBtn = document.querySelector('.about-btn')
const cardContainer = document.querySelector('.cards__container')
const menuAbout = document.querySelector('.menu-about')
const backBtn = document.querySelectorAll('.back-btn')
const scoreBtn = document.querySelector('.score-btn')
const menuScore = document.querySelector('.menu-score')
const duckBtn = document.querySelectorAll('.duck')
const duckSound = new Audio('./assets/sounds/duck-sound.mp3')
const mainSound = new Audio('./assets/sounds/menu.mp3')
const soundToggle = document.querySelector('.toggle-sound')
const soundPlus = document.querySelector('.sound-plus')
const soundMinus = document.querySelector('.sound-minus')
const soundToggleIcon = document.querySelector('.toggle-sound-icon')
const soundBtn = document.querySelector('.sound-btn')
const menuSound = document.querySelector('.menu-sound')
const yearBtn = document.querySelector('.year-btn')
// const buttons = document.querySelectorAll('.menu-item')
// const buttonsSound = new Audio('./assets/sounds/btn.mp3')
// buttonsSound.volume = 0.1
mainSound.volume = 0.05
duckSound.volume = 0.1


yearBtn.addEventListener('click', ()=>{
    document.querySelector('.troglodyte').classList.add('_active')
    setTimeout(()=>{
        document.querySelector('.troglodyte').classList.remove('_active')
    },5000)
})
// buttons.forEach((item)=>{
//     item.addEventListener('click', ()=>{
//         buttonsSound.play()
//     })
//
// })


const wrapper = document.querySelector('.wrapper')
wrapper.addEventListener('click', () => {
    mainSound.play()
    mainSound.onended = () => {
        mainSound.play()
    }
})


soundPlus.addEventListener('click', () => {
    if ((mainSound.volume + 0.05) < 1) mainSound.volume = mainSound.volume + 0.05
    if (mainSound.volume > 0) {
        soundToggleIcon.classList.remove('muted')
        mainSound.muted = false
    }
})

soundMinus.addEventListener('click', () => {
    if ((mainSound.volume - 0.05) <= 0) {
        mainSound.volume = 0
        soundToggleIcon.classList.add('muted')
    } else mainSound.volume = mainSound.volume - 0.05
    if (mainSound.volume < 0.01) soundToggleIcon.classList.add('muted')
})

soundToggle.addEventListener('click', () => {
    mainSound.muted = !mainSound.muted
    soundToggleIcon.classList.toggle('muted')
})


startBtn.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.toggle('_active')
        cardContainer.classList.toggle('_active')
    }, 300)
})

duckBtn.forEach((item) => {
    item.addEventListener('click', () => {
        duckSound.play()
    })
})

aboutBtn.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.toggle('_active')
        menuAbout.classList.toggle('_active')
    }, 300)
})

soundBtn.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.toggle('_active')
        menuSound.classList.toggle('_active')
    }, 300)
})

scoreBtn.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.toggle('_active')
        menuScore.classList.toggle('_active')
    }, 300)
})

backBtn.forEach((item) => {
    item.addEventListener('click', () => {
        setTimeout(() => {
            menu.classList.toggle('_active')
            menuAbout.classList.remove('_active')
            menuScore.classList.remove('_active')
            cardContainer.classList.remove('_active')
            menuSound.classList.remove('_active')
        }, 300)
    })
})

