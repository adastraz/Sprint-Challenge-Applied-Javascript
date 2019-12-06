// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleGet(Times){
    const cardDiv = document.createElement('div')
    const headLine = document.createElement('div')
    const author = document.createElement('div')
    const imgCont = document.createElement('div')
    const authImg = document.createElement('img')
    const authName = document.createElement('span')

    cardDiv.classList.add('card')
    headLine.classList.add('headline')
    headLine.textContent = Times.headline
    author.classList.add('author')
    imgCont.classList.add('img-container')
    authImg.src = Times.authorPhoto
    authName.textContent = Times.authorName

    cardDiv.appendChild(headLine)
    cardDiv.appendChild(author)
    author.appendChild(imgCont)
    imgCont.appendChild(authImg)
    author.appendChild(authName)

    return cardDiv
}
const entryP = document.querySelector('.cards-container')
const thisArray = ['bootstrap', 'javascript', 'jquery', 'node', 'technology']



axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(resp => {
    resp.data.articles.bootstrap.forEach(i => {
        const cardboot = articleGet(i)
        entryP.appendChild(cardboot)
    })
})

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(resp2 => {
    resp2.data.articles.javascript.forEach(ijs => {
        const cardjs = articleGet(ijs)
        entryP.appendChild(cardjs)
    })
})

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(resp3 => {
    resp3.data.articles.jquery.forEach(ijq => {
        const cardjq = articleGet(ijq)
        entryP.appendChild(cardjq)
    })
})

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(resp4 => {
    resp4.data.articles.node.forEach(ino => {
        const cardn = articleGet(ino)
        entryP.appendChild(cardn)
    })
})

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(resp5 => {
    resp5.data.articles.node.forEach(ite => {
        const cardte = articleGet(ite)
        entryP.appendChild(cardte)
    })
})
