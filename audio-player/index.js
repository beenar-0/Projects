let isPlay = false
const playBtn = document.querySelector('.play-btn')
const prevBtn = document.querySelector('.prev-btn')
const stopBtn = document.querySelector('.stop-btn')
const nextBtn = document.querySelector('.next-btn')
const wheels = document.querySelectorAll('.wheel')
const playWrapper = document.querySelector('.pl')
const prevWrapper = document.querySelector('.pr')
const stopWrapper = document.querySelector('.st')
const nextWrapper = document.querySelector('.n')
const audio = new Audio()

// play/pause
playBtn.addEventListener('click', playAudio)

function playAudio() {
    if (isPlay === false) {
        audio.src = './assets/music/hypa.mp3';
        audio.play();
        isPlay = true
        console.log('play')
        wheels.forEach((item)=>{
            item.classList.add('_active')
        })
        playWrapper.classList.add('_active')
        playBtn.classList.add('_active')
    } else {
        audio.pause()
        isPlay = false
        console.log('pause')
        wheels.forEach((item)=>{
            item.classList.remove('_active')
        })
        playWrapper.classList.remove('_active')
        playBtn.classList.remove('_active')
    }

}
// buttons.forEach((item)=>{
//     item.addEventListener('click', ()=>{
//         event.target.classList.add('FFF')
//         console.log(event.target)
//     })
// })


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
}


//
function clickSound() {
    audio.src = './assets/music/btn.mp3'
    audio.play()
}

