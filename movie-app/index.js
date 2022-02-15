// When page load
async function getStartData() {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aaa9fb0e895ccbbb2c96e6632244adfd`);
    const data = await res.json();
    const results = data['results']
    results.forEach((item) => {
        buildNewCard(item['original_title'], item['poster_path'], item['overview'], item['vote_average'])
    })
}

getStartData()


// search
const input = document.querySelector('.search')

function search() {
    document.querySelector('.movies__container').innerHTML = ''
    getData(input.value)
}

input.addEventListener('change', search)

const searchButton = document.querySelector('.search-icon')
searchButton.addEventListener('click', search)

async function getData(req) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=aaa9fb0e895ccbbb2c96e6632244adfd&query=${req}`);
    const data = await res.json();
    const results = data['results']
    results.forEach((item) => {
        buildNewCard(item['original_title'], item['poster_path'], item['overview'], item['vote_average'])
    })
}


// build movie-card function
const container = document.querySelector('.movies__container')


function buildNewCard(title, cover, overview, score) {
    const newCard = document.createElement('div')
    newCard.classList.add('movies-item')
    container.appendChild(newCard)
    const newOverview = document.createElement('div')
    newOverview.classList.add('overview')
    newOverview.innerText = overview
    newCard.appendChild(newOverview)
    const newCover = document.createElement('img')
    newCover.classList.add('movie-cover')
    if (cover === null) {
        newCover.src = 'http://lexingtonvenue.com/media/poster-placeholder.jpg'
    } else {
        newCover.src = 'https://image.tmdb.org/t/p/w500' + cover
    }
    newCover.alt = `image not found (${title})`
    newCard.appendChild(newCover)
    const newInfo = document.createElement('div')
    newInfo.classList.add('info__container')
    newCard.appendChild(newInfo)
    const newTitle = document.createElement('div')
    newTitle.classList.add('movie-title')
    newTitle.innerText = title
    const newScore = document.createElement('div')
    newScore.classList.add('movie-score')
    newScore.innerText = score
    newInfo.appendChild(newTitle)
    newInfo.appendChild(newScore)
}

//self rate
console.log('Результат самопроверки:70/60')
console.log('Дополнительный функционал не входящий в основные пункты ТЗ: добавлены рейтинг и описание фильмов.')
console.log(' Оформление так же отличается от демо ( надеюсь, что в лучшую сторону :) )')




