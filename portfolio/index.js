// Burger-menu

const switchThemeIcon = document.querySelector(".switch-theme")
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


// Switching theme

switchThemeIcon.addEventListener('click', () => {
    switchThemeIcon.classList.toggle("_light")
    changeTheme()
})

function changeTheme() {
    if (switchThemeIcon.classList.contains("_light")) {
        document.documentElement.style.setProperty('--text-color', '#000')
        document.documentElement.style.setProperty('--body-color', '#FFF')
        document.documentElement.style.setProperty('--link-color', '#000')
        document.documentElement.style.setProperty('--link-hover-color', '#BDAE82')
        document.documentElement.style.setProperty('--contact-bg', 'rgba(255, 255, 255, 0.5)')
        document.documentElement.style.setProperty('--bg-head', 'url(./assets/img/head-light.jpg)')
        document.documentElement.style.setProperty('--bg-bottom', 'url(./assets/img/bottom-light.jpg)')
        document.documentElement.style.setProperty('--filter', 'invert(86%) sepia(10%) saturate(1028%) hue-rotate(7deg) brightness(84%) contrast(77%)')
        document.documentElement.style.setProperty('--facebook-icon', 'url(./assets/svg/footer-facebook-light.svg)')
        document.documentElement.style.setProperty('--insta-icon', 'url(./assets/svg/footer-insta-light.svg)')
        document.documentElement.style.setProperty('--twitter-icon', 'url(./assets/svg/footer-twitter-light.svg)')
        document.documentElement.style.setProperty('--printest-icon', 'url(./assets/svg/footer-printest-light.svg)')
        document.documentElement.style.setProperty('--camera-logo', 'url(./assets/svg/camera-header-light.svg)')
        document.documentElement.style.setProperty('--title-color', '#000')
        document.documentElement.style.setProperty('--hero-contact__button-bg', '#FFF')
        document.documentElement.style.setProperty('--hero-contact__button-text', '#000')
        document.documentElement.style.setProperty('--hero-contact__button-bg-hover', '#000')
        document.documentElement.style.setProperty('--hero-contact__button-text-hover', '#BDAE82')
        document.documentElement.style.setProperty('--btn-bg', '#BDAE82')
        document.documentElement.style.setProperty('--btn-text', '#000')
        document.documentElement.style.setProperty('--btn-bg-hover', '#000')
        document.documentElement.style.setProperty('--btn-text-hover', '#BDAE82')
        document.documentElement.style.setProperty('--slider-btn-text', '#000')
        document.documentElement.style.setProperty('--slider-btn-bg', '#BDAE82')
        document.documentElement.style.setProperty('--slider-btn-text-hover', '#BDAE82')
        document.documentElement.style.setProperty('--slider-btn-bg-hover', '#000')
        document.documentElement.style.setProperty('--slider-btn-border', '#BDAE82')
        document.documentElement.style.setProperty('--slider-btn-text-active', '#BDAE82')
        document.documentElement.style.setProperty('--slider-btn-bg-active', '#1C1C1C')
        document.documentElement.style.setProperty('--slider-btn-text-hover-active', '#FFF')
        document.documentElement.style.setProperty('--slider-btn-bg-hover-active', '#000')
        document.documentElement.style.setProperty('--nav-link-hover', '#FFF')
        document.documentElement.style.setProperty('--sent-btn-text-color', '#BDAE82')
        document.documentElement.style.setProperty('--switch-lang-active', '#FFF')
        document.documentElement.style.setProperty('--bg-head-tablet', 'url(./assets/img/head-light-tablet.jpg)')
        document.documentElement.style.setProperty('--contacts-bg-tablet', 'url(./assets/img/bottom-tablet-light.jpg)')
        document.documentElement.style.setProperty('--burger-link-color', '#000')
        document.documentElement.style.setProperty('--burger-link-color-hover', '#BDAE82')
        document.documentElement.style.setProperty('--theme-icon-hover', 'invert(99%) sepia(0%) saturate(5135%) hue-rotate(201deg) brightness(115%) contrast(100%)')
    } else {
        document.documentElement.style.setProperty('--text-color', '#FFF')
        document.documentElement.style.setProperty('--body-color', '#000')
        document.documentElement.style.setProperty('--link-color', '#FFF')
        document.documentElement.style.setProperty('--link-hover-color', '#BDAE82')
        document.documentElement.style.setProperty('--contact-bg', 'rgba(0, 0, 0, 0.5)')
        document.documentElement.style.setProperty('--bg-head', 'url(./assets/img/head.jpg)')
        document.documentElement.style.setProperty('--bg-bottom', 'url(./assets/img/bottom.jpg)')
        document.documentElement.style.setProperty('--filter', 'invert(14%) sepia(10%) saturate(1028%) hue-rotate(7deg) brightness(84%) contrast(77%)')
        document.documentElement.style.setProperty('--facebook-icon', 'url(./assets/svg/footer-facebook.svg)')
        document.documentElement.style.setProperty('--insta-icon', 'url(./assets/svg/footer-insta.svg)')
        document.documentElement.style.setProperty('--twitter-icon', 'url(./assets/svg/footer-twitter.svg)')
        document.documentElement.style.setProperty('--printest-icon:', 'url(./assets/svg/footer-printest.svg)')
        document.documentElement.style.setProperty('--camera-logo', 'url(./assets/svg/camera-header.svg)')
        document.documentElement.style.setProperty('--title-color:', '#BDAE82')
        document.documentElement.style.setProperty('--hero-contact__button-bg', '#BDAE82')
        document.documentElement.style.setProperty('--hero-contact__button-text', '#000')
        document.documentElement.style.setProperty('--hero-contact__button-bg-hover', '#BDAE82')
        document.documentElement.style.setProperty('--hero-contact__button-text-hover', '#FFF')
        document.documentElement.style.setProperty('--btn-bg', '#BDAE82')
        document.documentElement.style.setProperty('--btn-text', '#000')
        document.documentElement.style.setProperty('--btn-bg-hover', '#BDAE82')
        document.documentElement.style.setProperty('--btn-text-hover', '#FFF')
        document.documentElement.style.setProperty('--slider-btn-text', '#BDAE82')
        document.documentElement.style.setProperty('--slider-btn-bg', '#000')
        document.documentElement.style.setProperty('--slider-btn-text-hover', '#FFF')
        document.documentElement.style.setProperty('--slider-btn-bg-hover', '#000')
        document.documentElement.style.setProperty('--slider-btn-border', '#BDAE82')
        document.documentElement.style.setProperty('--slider-btn-text-active', '#000')
        document.documentElement.style.setProperty('--slider-btn-bg-active', '#BDAE82')
        document.documentElement.style.setProperty('--slider-btn-text-hover-active', '#FFF')
        document.documentElement.style.setProperty('--slider-btn-bg-hover-active', '#BDAE82')
        document.documentElement.style.setProperty('--nav-link-hover', '#BDAE82')
        document.documentElement.style.setProperty('--sent-btn-text-color', '#000')
        document.documentElement.style.setProperty('--switch-lang-active', '#BDAE82')
        document.documentElement.style.setProperty('--bg-head-tablet', 'url(./assets/img/tablet-head.jpg')
        document.documentElement.style.setProperty('--contacts-bg-tablet', 'url(./assets/img/tablet-contacts.jpg)')
        document.documentElement.style.setProperty('--burger-link-color', '#BDAE82')
        document.documentElement.style.setProperty('--burger-link-color-hover', '#FFF')
        document.documentElement.style.setProperty('--theme-icon-hover', 'invert(14%) sepia(10%) saturate(1028%) hue-rotate(7deg) brightness(84%) contrast(77%)')
    }
}

