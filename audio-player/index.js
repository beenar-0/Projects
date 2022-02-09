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
const currentProgress = document.querySelector(".current-progress")
const timeline = document.querySelector(".progress-bar")
const songDuration = document.querySelector('.max-time')
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

audio.addEventListener('loadeddata', getAudioDuration)



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


// stop
stopBtn.addEventListener("click", stopSound)

function stopSound() {
    currentProgress.style.width = 0
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
    currentProgress.style.width = 0
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
    currentProgress.style.width = 0
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

// progress bar

function getAudioDuration() {
    songDuration.textContent = getTime(audio.duration)
}

window.addEventListener('load', getAudioDuration)

//click on timeline to change current time

timeline.addEventListener("click", x => {
    const progressWidth = window.getComputedStyle(timeline).width
    const currentTime = x.offsetX / parseInt(progressWidth) * audio.duration
    console.log(currentTime)
    audio.currentTime = currentTime
});

//update progress
setInterval(() => {
    currentProgress.style.width = (audio.currentTime / audio.duration * 100) + "%"
    document.querySelector(".current-time").textContent = getTime(
        audio.currentTime
    )
    if (audio.currentTime === audio.duration) {playNext()}
}, 100);

// set time to normal value
function getTime(num) {
    let sec = parseInt(num)
    let min = parseInt(sec / 60)
    sec -= min * 60
    const hours = parseInt(min / 60)
    min -= hours * 60
    if (hours === 0) return `${min  }:${String(sec % 60).padStart(2, 0)}`
}

//volume
audio.volume = 0.5
const currentVolume = document.querySelector(".current-volume")
currentVolume.style.height = '50%'

const volumeBar = document.querySelector(".volume-bar")
volumeBar.addEventListener('click', y => {
    const barHeight = window.getComputedStyle(volumeBar).height
    const newVolume = y.offsetY / parseInt(barHeight)
    audio.volume = newVolume
    currentVolume.style.height = newVolume * 100 + '%'
}, false)

const volumeButton = document.querySelector(".volume-icon")
volumeButton.addEventListener("click", () => {
    audio.muted = !audio.muted
    volumeButton.classList.toggle('muted')
});

