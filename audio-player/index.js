let isPlay = false
const playBtn = document.querySelector('.play-btn')
const prevBtn = document.querySelector('.prev-btn')
const stopBtn = document.querySelector('.stop-btn')
const nextBtn = document.querySelector('.next-btn')
const wheels = document.querySelectorAll('.wheel')
const playWrapper = document.querySelector('.pl')
const audio = new Audio()

// play/pause
playBtn.addEventListener('click', clickSound)
playBtn.addEventListener('click', btnClick)

function btnClick() {
    if (isPlay === false) {
        isPlay = true
        wheels.forEach((item)=>{
            item.classList.add('_active')
        })
        playWrapper.classList.add('_active')
        playBtn.classList.add('_active')
        setTimeout(playAudio, 400)
    } else {
        isPlay = false
        wheels.forEach((item)=>{
            item.classList.remove('_active')
        })
        playWrapper.classList.remove('_active')
        playBtn.classList.remove('_active')
    }

}

function clickSound() {
    audio.src = './assets/music/btn.mp3'
    audio.play()
}

function playAudio() {
        audio.src = './assets/music/wgtm.mp3';
        audio.play();
}

function pauseAudio() {
       audio.pause()
}

// stop
stopBtn.addEventListener("click", stopSound)

function stopSound() {
    isPlay = false
    audio.pause()
    audio.currentTime = 0
    wheels.forEach((item)=>{
        item.classList.remove('_active')
    })
    playWrapper.classList.remove('_active')
    playBtn.classList.remove('_active')
    clickSound()
}


//


