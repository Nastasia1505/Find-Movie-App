const searchInput = document.querySelector('.search__input');
const movieList = document.querySelector('.movies-list');
let page = 1;
let arr = [];

searchInput.addEventListener('keyup', () => {
    let movieName = searchInput.value;
    if (movieName) {
        // page = 1;
        getMovie(movieName);
    }
    searchInput = '';
    // resultText(movieName);
})

const API_URL = "https://www.omdbapi.com/";
const API_KEY = "3ef4ab9e";

function getMovie(movieName) {
    // showPage(page);
    fetch(`${API_URL}?apiKey=${API_KEY}&s=${movieName}&page=${page}`)
        .then((response) => {
            return response.json()
        })
        .then((response) => {

            showMovie(response);
        })
    
}

function showMovie(response) {
    
    let movie = response.Search;
    console.log(response.Search);
    
    movie.forEach((item) => {
        const element = document.createElement("div");
        element.classList.add("movie");
        element.innerHTML = `
        <img class = "movie-img" src="${item.Poster}" >
        <div class = "movie-title">${item.Title}</div >
        `;
        movieList.appendChild(element);
    });
    
}

// function resultText (movieName){
//     console.log('Work')
// let result = document.querySelector('.wrapper');
// result.innerHTML = `<h1> Results for ${movieName}</h1>`;
// }