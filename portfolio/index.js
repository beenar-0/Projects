// Switching theme

let theme
const switchThemeIcon = document.querySelector(".switch-theme")

switchThemeIcon.addEventListener('click', () => {
    switchThemeIcon.classList.toggle("_light")
    if (switchThemeIcon.classList.contains("_light")) {
        theme = 'light'
        changeTheme(theme)
    } else {
        theme = 'dark'
        changeTheme(theme)
    }
})


function changeTheme(theme) {
    if (theme === 'light') {
        document.documentElement.style.setProperty('--white-black', '#000')
        document.documentElement.style.setProperty('--black-white', '#FFF')
        document.documentElement.style.setProperty('--gold-black', '#000')
        document.documentElement.style.setProperty('--black-gold', '#BDAE82')
        document.documentElement.style.setProperty('--gold-white', '#FFF')
        document.documentElement.style.setProperty('--white-gold', '#BDAE82')
        document.documentElement.style.setProperty('--gold-gray', '#1C1C1C')
        document.documentElement.style.setProperty('--contact-bg', 'rgba(255, 255, 255, 0.5)')
        document.documentElement.style.setProperty('--bg-head', 'url(./assets/img/head-light.jpg)')
        document.documentElement.style.setProperty('--bg-bottom', 'url(./assets/img/bottom-light.jpg)')
        document.documentElement.style.setProperty('--filter', 'invert(86%) sepia(10%) saturate(1028%) hue-rotate(7deg) brightness(84%) contrast(77%)')
        document.documentElement.style.setProperty('--facebook-icon', 'url(./assets/svg/footer-facebook-light.svg)')
        document.documentElement.style.setProperty('--insta-icon', 'url(./assets/svg/footer-insta-light.svg)')
        document.documentElement.style.setProperty('--twitter-icon', 'url(./assets/svg/footer-twitter-light.svg)')
        document.documentElement.style.setProperty('--printest-icon', 'url(./assets/svg/footer-printest-light.svg)')
        document.documentElement.style.setProperty('--camera-logo', 'url(./assets/svg/camera-header-light.svg)')
        document.documentElement.style.setProperty('--bg-head-tablet', 'url(./assets/img/head-light-tablet.jpg)')
        document.documentElement.style.setProperty('--contacts-bg-tablet', 'url(./assets/img/bottom-tablet-light.jpg)')
    } else if (theme === 'dark') {
        document.documentElement.style.setProperty('--white-black', '#FFF')
        document.documentElement.style.setProperty('--black-white', '#000')
        document.documentElement.style.setProperty('--gold-black', '#BDAE82')
        document.documentElement.style.setProperty('--black-gold', '#000')
        document.documentElement.style.setProperty('--gold-white', '#BDAE82')
        document.documentElement.style.setProperty('--white-gold', '#FFF')
        document.documentElement.style.setProperty('--gold-gray', '#BDAE82')
        document.documentElement.style.setProperty('--contact-bg', 'rgba(0, 0, 0, 0.5)')
        document.documentElement.style.setProperty('--bg-head', 'url(./assets/img/head.jpg)')
        document.documentElement.style.setProperty('--bg-bottom', 'url(./assets/img/bottom.jpg)')
        document.documentElement.style.setProperty('--filter', 'invert(14%) sepia(10%) saturate(1028%) hue-rotate(7deg) brightness(84%) contrast(77%)')
        document.documentElement.style.setProperty('--facebook-icon', 'url(./assets/svg/footer-facebook.svg)')
        document.documentElement.style.setProperty('--insta-icon', 'url(./assets/svg/footer-insta.svg)')
        document.documentElement.style.setProperty('--twitter-icon', 'url(./assets/svg/footer-twitter.svg)')
        document.documentElement.style.setProperty('--printest-icon', 'url(./assets/svg/footer-printest.svg)')
        document.documentElement.style.setProperty('--camera-logo', 'url(./assets/svg/camera-header.svg)')
        document.documentElement.style.setProperty('--bg-head-tablet', 'url(./assets/img/tablet-head.jpg')
        document.documentElement.style.setProperty('--contacts-bg-tablet', 'url(./assets/img/tablet-contacts.jpg)')

    }
}


// Changing portfolio images

const portfolioItems = document.querySelectorAll(".portfolio-item")
const portfolioButtons = document.querySelectorAll(".slider-btn")

portfolioButtons.forEach((button, buttonIndex) => {
    button.addEventListener('click', () => {
        portfolioItems.forEach((img, imgIndex) => {
            switch (buttonIndex) {
                case 0:
                    img.src = `./assets/img/winter/${imgIndex + 1}.jpg`
                    changeButtonStyle()
                    break
                case 1:
                    img.src = `./assets/img/spring/${imgIndex + 1}.jpg`
                    changeButtonStyle()
                    break
                case 2:
                    img.src = `./assets/img/summer/${imgIndex + 1}.jpg`
                    changeButtonStyle()
                    break
                case 3:
                    img.src = `./assets/img/autumn/${imgIndex + 1}.jpg`
                    changeButtonStyle()
                    break
            }
        })
    })
})

function changeButtonStyle() {
    portfolioButtons.forEach((button) => {
        button.classList.remove("_active-button")
        event.target.classList.add("_active-button")
    })
}


// Preload images

const timesOfYear = ['winter', 'spring', 'summer', 'autumn']

function preloadImages() {
    timesOfYear.forEach((timeOfYear) => {
        for (let i = 0; i < 6; i++) {
            const img = new Image()
            img.src = `./assets/img/${timeOfYear}/${i + 1}.jpg`
        }
    })

}

preloadImages()


// "Send" button

const sendButton = document.querySelector(".send-button")
const sent = document.querySelector(".sent")

sendButton.addEventListener('click', () => {
    sent.classList.add('_active')
    setTimeout(() => {
        sent.classList.remove("_active")
    }, 3000)
})


// Burger-menu

const burgerIcon = document.querySelector(".menu-icon")
const menuBody = document.querySelector(".menu__body")
const menuLinks = document.querySelectorAll('.nav-item')


burgerIcon.addEventListener('click', () => {
    menuBody.classList.toggle("_active")
    burgerIcon.classList.toggle("_active")
    document.body.classList.toggle("_lock")
    switchThemeIcon.classList.toggle("_hide")
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


// Translate

import i18Obj from "./translate.js";

let lang
const ruButton = document.querySelector('.ru')
const enButton = document.querySelector('.en')


enButton.addEventListener('click', () => {
    if (ruButton.classList.contains('_active')) {
        enButton.classList.toggle('_active')
        ruButton.classList.toggle('_active')
        lang = 'en'
        console.log(lang)
        getTranslate(lang)
    }
})

ruButton.addEventListener('click', () => {
    if (enButton.classList.contains('_active')) {
        ruButton.classList.toggle('_active')
        enButton.classList.toggle('_active')
        lang = 'ru'
        console.log(lang)
        getTranslate(lang)
    }
})


function getTranslate(lang) {
    const pageText = document.querySelectorAll('[data-it18]')
    if (lang === 'ru') {
        pageText.forEach((currentElement) => {
            currentElement.textContent = `${i18Obj["ru"][currentElement.dataset.it18]}`
        })
    } else if (lang === 'en') {
        pageText.forEach((currentElement) => {
            currentElement.textContent = `${i18Obj["en"][currentElement.dataset.it18]}`
        })
    }
}


// Save and load from local storage

function setLocalStorage() {
    localStorage.setItem('theme', theme);
    localStorage.setItem('lang', lang)
}

window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')
        changeTheme(theme);
        if (theme === 'light') {
            switchThemeIcon.classList.toggle("_light")
        }
    }
    if (localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang')
        getTranslate(lang)
        if (lang === 'ru') {
            enButton.classList.toggle('_active')
            ruButton.classList.toggle('_active')
        }
    }
}

window.addEventListener('load', getLocalStorage)