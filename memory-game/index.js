const menu = document.querySelector('.menu')


// flip cards
const cards = document.querySelectorAll('.card')

cards.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('_flip')
    })
})


// buttons sound
const buttons = document.querySelectorAll('.menu-item')
const buttonsSound = new Audio('./assets/sounds/button.mp3')
buttonsSound.volume = 0.3
buttons.forEach((item) => {
    item.addEventListener('click', () => {
        buttonsSound.play()
    })

})


// preload
function preloadImages() {
    for (let i = 1; i < 4; i++) {
        const img = new Image();
        img.src = `./assets/img/gif${i}.gif`;
    }
}

preloadImages()


// win
const menuWin = document.querySelector('.menu-win')
const scoreCard = document.querySelector('.score-table')
const winSound = new Audio('./assets/sounds/win sound.mp3')
winSound.volume = 0.1

scoreCard.addEventListener('click', () => {
    setTimeout(() => {
        mainSound.pause()
        mainSound.currentTime = 0
        menuWin.classList.toggle('_active')
        cardContainer.classList.toggle('_active')
        winSound.play()
    }, 300)
})


//  game
const startBtn = document.querySelector('.new-game-btn')
const cardContainer = document.querySelector('.cards__container')

startBtn.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.add('_active')
        cardContainer.classList.add('_active')
    }, 300)
})


// troglodyte
const yearBtn = document.querySelector('.year-btn')
yearBtn.addEventListener('click', () => {
    document.querySelector('.troglodyte').classList.add('_active')
    setTimeout(() => {
        document.querySelector('.troglodyte').classList.remove('_active')
    }, 5000)
})


// main music
const wrapper = document.querySelector('.wrapper')
const duckBtn = document.querySelectorAll('.duck')
const duckSound = new Audio('./assets/sounds/duck-sound.mp3')
const mainSound = new Audio('./assets/sounds/menu.mp3')
const soundToggle = document.querySelector('.toggle-sound')
const soundPlus = document.querySelector('.sound-plus')
const soundMinus = document.querySelector('.sound-minus')
const soundToggleIcon = document.querySelector('.toggle-sound-icon')
const soundBtn = document.querySelector('.sound-btn')
const menuSound = document.querySelector('.menu-sound')
let isMainSoundPlay = false

mainSound.volume = 0.1
duckSound.volume = 0.1

wrapper.addEventListener('click', () => {
    if (!isMainSoundPlay) {
        mainSound.play()
        isMainSoundPlay = true
    }

    mainSound.onended = () => {
        mainSound.play()
    }
})


// menu-music
soundBtn.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.toggle('_active')
        menuSound.classList.toggle('_active')
    }, 300)
})


soundToggle.addEventListener('click', () => {
    mainSound.muted = !mainSound.muted
    winSound.muted = !winSound.muted
    soundToggleIcon.classList.toggle('muted')
})


soundPlus.addEventListener('click', () => {
    if ((mainSound.volume + 0.1) < 1) {
        mainSound.volume = mainSound.volume + 0.1
        winSound.volume = winSound.volume + 0.1
    }
    if (mainSound.volume > 0) {
        soundToggleIcon.classList.remove('muted')
        mainSound.muted = false
        winSound.muted = false
    }
})

soundMinus.addEventListener('click', () => {
    if ((mainSound.volume - 0.1) <= 0) {
        mainSound.volume = 0
        winSound.volume = 0
        soundToggleIcon.classList.add('muted')
    } else {
        mainSound.volume = mainSound.volume - 0.1
        winSound.volume = winSound.volume - 0.1
    }
    if (mainSound.volume < 0.01) soundToggleIcon.classList.add('muted')
})


duckBtn.forEach((item) => {
    item.addEventListener('click', () => {
        duckSound.play()
    })
})


// about-menu
const aboutBtn = document.querySelector('.about-btn')
const menuAbout = document.querySelector('.menu-about')

aboutBtn.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.toggle('_active')
        menuAbout.classList.toggle('_active')
    }, 300)
})


// score-menu
const scoreBtn = document.querySelector('.score-btn')
const menuScore = document.querySelector('.menu-score')

scoreBtn.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.toggle('_active')
        menuScore.classList.toggle('_active')
    }, 300)
})


// return to main menu
const backBtn = document.querySelectorAll('.back-btn')

backBtn.forEach((item) => {
    item.addEventListener('click', () => {
        setTimeout(() => {
            if (menuWin.classList.contains('_active')) mainSound.play()
            menu.classList.remove('_active')
            menuAbout.classList.remove('_active')
            menuScore.classList.remove('_active')
            cardContainer.classList.remove('_active')
            menuSound.classList.remove('_active')
            menuWin.classList.remove('_active')
        }, 300)
    })
})

