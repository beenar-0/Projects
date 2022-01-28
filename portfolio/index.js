// Burger-menu

const burgerIcon = document.querySelector(".menu-icon")
const menuBody = document.querySelector(".menu__body")
const menuLinks = document.querySelectorAll('.nav-item')


burgerIcon.addEventListener('click', () => {
    menuBody.classList.toggle("_active")
    burgerIcon.classList.toggle("_active")
    document.body.classList.toggle("_lock")
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

// "Send" button

const sendButton = document.querySelector(".send-button")
const sent = document.querySelector(".sent")

sendButton.addEventListener('click', () => {
    sent.classList.add('_active')
    setTimeout(() => {
        sent.classList.remove("_active")
    }, 3000)
})

// Changing languages


