let isPlay = false
const playBtn = document.querySelector('.play-btn')
const prevBtn = document.querySelector('.prev-btn')
const stopBtn = document.querySelector('.stop-btn')
const nextBtn = document.querySelector('.next-btn')
const wheels = document.querySelectorAll('.wheel')
const playWrapper = document.querySelector('.pl')
const cover = document.querySelector('.screen-body.cover')
const songName = document.querySelector('.song')
const bandName = document.querySelector('.band')
let playNum = 0
const songs = [
    {
        'link': './assets/music/wgtm.mp3',
        'name': 'We got the moves',
        'band': 'Eskimo callboy',
        'cover': './assets/img/wgtm.jpg'
    },
    {
        'link': './assets/music/hypa.mp3',
        'name': 'Hypa Hypa',
        'band': 'Eskimo callboy',
        'cover': './assets/img/hypa.jpg'
    },
    {
        'link': './assets/music/pump-it.mp3',
        'name': 'Pump it',
        'band': 'Eskimo callboy',
        'cover': './assets/img/pump-it.jpg'
    }
]
let audio = new Audio(songs[playNum]["link"])
const clickSound = new Audio('./assets/music/btn.mp3')


// play/pause
playBtn.addEventListener('click', btnClick)

function btnClick() {
    clickSound.play()
    if (isPlay === false) {
        isPlay = true
        wheels.forEach((item) => {
            item.classList.add('_active')
        })
        playWrapper.classList.add('_active')
        playBtn.classList.add('_active')
        setTimeout(playAudio, 400)
    } else {
        audio.pause()
        isPlay = false
        wheels.forEach((item) => {
            item.classList.remove('_active')
        })
        playWrapper.classList.remove('_active')
        playBtn.classList.remove('_active')
    }

}

function playAudio() {
    // audio.src = songs[playNum]["link"]
    audio.play()
}

function pauseAudio() {
    audio.pause()
}


// buttons click sound
// function clickSound() {
//     // audio.src = './assets/music/btn.mp3'
//     clickSound.play()
// }


// stop
stopBtn.addEventListener("click", stopSound)

function stopSound() {
    isPlay = false
    audio.pause()
    audio.currentTime = 0
    wheels.forEach((item) => {
        item.classList.remove('_active')
    })
    playWrapper.classList.remove('_active')
    playBtn.classList.remove('_active')
    clickSound.play()
}

//change cover
function changeCover() {
    cover.style.backgroundImage = `url(${songs[playNum]['cover']})`
}


// change song name
function changeSong() {
    songName.innerText = songs[playNum]["name"]
    bandName.innerText = songs[playNum]["band"]
}


// next btn
nextBtn.addEventListener('click', playNext)

function playNext() {
    clickSound.play()

    if  (playNum === songs.length - 1) {
        playNum = 0
    } else {
        playNum += 1
    }
    audio.src = songs[playNum]["link"]
    console.log(playNum)
    stopSound()
    changeCover()
    changeSong()
}


// prev btn
prevBtn.addEventListener('click', playPrev)

function playPrev() {
    clickSound.play()

    if (playNum === 0) {
        playNum = songs.length - 1
    }  else {
        playNum -= 1
    }
    audio.src = songs[playNum]["link"]
    console.log(playNum)
    stopSound()
    changeCover()
    changeSong()
}


