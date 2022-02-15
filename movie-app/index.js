const container = document.querySelector('.movies__container')

async function getData(req) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=aaa9fb0e895ccbbb2c96e6632244adfd&query=${req}`);
    const data = await res.json();
    const results = data['results']
    let count = 0
    results.forEach((item) => {
        buildNewCard(item['original_title'], item['poster_path'], item['overview'], item['vote_average'])
    })
    console.log(results);
}

getData('action');

function buildNewCard(title, cover, overview, score) {
    // console.log(title)
    // console.log(cover)
    // console.log(overview)
    // console.log(score)
    const newCard = document.createElement('div')
    newCard.classList.add('movies-item')
    container.appendChild(newCard)
    const newOverview = document.createElement('div')
    newOverview.classList.add('overview')
    newOverview.innerText = overview
    newCard.appendChild(newOverview)
    const newCover = document.createElement('img')
    newCover.classList.add('movie-cover')
     newCover.src = 'https://image.tmdb.org/t/p/w500'+cover
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


// data['results']   results[{movieNumber}]['original_title']   title
// data['results']   results[{movieNumber}]['backdrop_path']    cover
// data['results']   results[{movieNumber}]['overview']         overview
// data['results']   results[{movieNumber}]['vote_average']     score
