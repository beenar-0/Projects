const menu = document.querySelector('.menu')
const menuWin = document.querySelector('.menu-win')
const battleSound = new Audio("./assets/sounds/fight/fight2.mp3")
const winSound = new Audio('./assets/sounds/win-sound.mp3')
winSound.volume = 0.1
battleSound.volume = 0.1
let scoreArr = []
let temp = {}

// score-menu
const scoreBtn = document.querySelector('.score-btn')
const menuScore = document.querySelector('.menu-score')
const scoreList = document.querySelectorAll('.score-amount')
const stepsList = document.querySelectorAll('.steps-amount')
const timeList = document.querySelectorAll('.time-amount')

scoreBtn.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.toggle('_active')
        menuScore.classList.toggle('_active')
    }, 300)
})

function fillScoreTable(arr) {
    arr.sort((a, b) => {
        return b['score'] - a['score']
    })
    if (arr.length > 10) arr.length = 10
    arr.forEach((item, index) => {
        scoreList[index].innerText = `  Points: ${item['score']}  `
        stepsList[index].innerText = `  Steps: ${item['steps']}  `
        timeList[index].innerText = `  Time: ${item['timer']}  `
    })
    localStorage.setItem('scoreList', JSON.stringify(arr))
}

//localStorage

if (localStorage.getItem('scoreList')) {
    scoreArr = JSON.parse(localStorage.getItem('scoreList'))
    fillScoreTable(scoreArr)
}

// time
let tick = 0
let minutes = 0
let seconds = 0
let timer
const time = document.querySelector('.time')

function ticker() {
    tick += 1
    seconds = tick % 60
    minutes = Math.trunc(tick / 60)
    time.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}


// record results
function recordResult(timer, steps) {
    temp.timer = timer
    temp.score = 100 - steps
    temp.steps = steps
    scoreArr.push(temp)
    temp = {}
}

// game logic
const score = document.querySelector('.score-count')
const cards = document.querySelectorAll('.card')
const stepsTable = document.querySelector('.steps')
let gameEnd = 0
let stepsCount = 0
let isFlipped = false
let firstCard, secondCard
let lock = false
let isBattle = false

cards.forEach((item) => {
    item.addEventListener('click', flipCard)
    item.addEventListener('click', () => {
        if (!isBattle) {
            mainSound.pause()
            mainSound.currentTime = 0
            battleSound.play()
            timer = setInterval(ticker, 1000)
        }
        isBattle = true

    })
})

function flipCard() {
    if (lock) return
    this.classList.add('_flip')
    if (!isFlipped) {
        isFlipped = true
        firstCard = this
    } else {
        if (this === firstCard) return;
        secondCard = this
        isFlipped = false
        stepsCount += 1
        stepsTable.innerText = stepsCount.toString().padStart(2, '0')
        score.innerText = `${100 - stepsCount}`
        checkMatch()
    }
}

function checkMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        gameEnd += 1
        if (gameEnd === 9) {
            setTimeout(() => {
                mainSound.pause()
                mainSound.currentTime = 0
                menuWin.classList.toggle('_active')
                cardContainer.classList.toggle('_active')
                recordResult(time.innerText, stepsCount)
                fillScoreTable(scoreArr)
                resetBoard()
                winSound.play()
            }, 1000)
        }
        disable()
    } else {
        unflipCards()
    }
}

function disable() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    lock = false
    isFlipped = false
    firstCard = null
    secondCard = null
}

function unflipCards() {
    lock = true
    setTimeout(() => {
        firstCard.classList.remove('_flip')
        secondCard.classList.remove('_flip')
        isFlipped = false
        firstCard = null
        secondCard = null
        lock = false

    }, 1300)
}


// shuffle cards
function shuffleCards() {
    let randomOrder = new Set
    let temp = []
    while (randomOrder.size < 18) {
        randomOrder.add(random())
    }
    randomOrder.forEach((item) => {
        temp.push(item)
    })
    cards.forEach((item, index) => {
        item.style.order = temp[index]
    })
}

shuffleCards()

function random() {
    return Math.ceil(Math.random() * 18)
}

// reset board
function resetBoard() {
    battleSound.pause()
    battleSound.currentTime = 0
    cards.forEach((item) => {
        item.classList.remove('_flip')
        shuffleCards()
        tick = 0
        minutes = 0
        seconds = 0
        gameEnd = 0
        clearInterval(timer)
        time.innerText = '00:00'
        stepsTable.innerText = '00'
        isBattle = false
        cards.forEach((item) => {
            item.addEventListener('click', flipCard)
        })
    })
}


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
    for (let i = 0; i < 4; i++) {
        const img = new Image();
        img.src = `./assets/img/gif${i}.gif`;
    }
}

preloadImages()

const wrapper = document.querySelector('.wrapper')
const loadIcon = document.querySelector('.load-icon')


window.addEventListener('load', () => {
    wrapper.classList.remove('_loading')
    loadIcon.classList.remove('_loading')
    wrapper.addEventListener('click', () => {
        if (!isMainSoundPlay) {
            mainSound.play()
            isMainSoundPlay = true
        }
        mainSound.onended = () => {
            mainSound.play()
        }
    })

})


//  game
const startBtn = document.querySelector('.new-game-btn')
const cardContainer = document.querySelector('.cards__container')

startBtn.addEventListener('click', () => {
    setTimeout(() => {
        stepsCount = 0
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
const mainSound = new Audio('./assets/sounds/menu.mp3')
const soundToggle = document.querySelector('.toggle-sound')
const soundPlus = document.querySelector('.sound-plus')
const soundMinus = document.querySelector('.sound-minus')
const soundToggleIcon = document.querySelector('.toggle-sound-icon')
const soundBtn = document.querySelector('.sound-btn')
const menuSound = document.querySelector('.menu-sound')
let isMainSoundPlay = false

mainSound.volume = 0.1


// menu-music
soundBtn.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.toggle('_active')
        menuSound.classList.toggle('_active')
    }, 300)
})


soundToggle.addEventListener('click', () => {
    mainSound.muted = !mainSound.muted
    battleSound.muted = !battleSound.muted
    winSound.muted = !winSound.muted
    soundToggleIcon.classList.toggle('muted')
})


soundPlus.addEventListener('click', () => {
    if ((mainSound.volume + 0.1) < 1) {
        mainSound.volume = mainSound.volume + 0.1
        winSound.volume = winSound.volume + 0.1
        battleSound.volume = battleSound.volume + 0.1
    }
    if (mainSound.volume > 0) {
        soundToggleIcon.classList.remove('muted')
        mainSound.muted = false
        winSound.muted = false
        battleSound.muted = false
    }
})

soundMinus.addEventListener('click', () => {
    if ((mainSound.volume - 0.1) <= 0) {
        mainSound.volume = 0
        winSound.volume = 0
        battleSound.volume = 0
        soundToggleIcon.classList.add('muted')
    } else {
        mainSound.volume = mainSound.volume - 0.1
        winSound.volume = winSound.volume - 0.1
        battleSound.volume = battleSound.volume - 0.1
    }
    if (mainSound.volume < 0.01) soundToggleIcon.classList.add('muted')
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
            battleSound.pause()
            battleSound.currentTime = 0
        }, 500)
        setTimeout(() => {
            mainSound.play()
        }, 2000)
        setTimeout(resetBoard, 2000)

    })
})

