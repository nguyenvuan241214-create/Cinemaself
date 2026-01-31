const TMDB_API_KEY = "dbbaa5f1980d9ed78b340fa5d2446ddd";

//Lấy id phim từ URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

// console.log(movieId);

const fetchMovieDetails = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`);
    const data = await res.json();
    console.log(data);
    return data;
}

displayMovieDetails = (movie) => {
    document.querySelector("#preview-img").src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    document.querySelector("#movie-title").innerText = movie.title;
    document.querySelector("#movie-description").innerText = movie.overview;
    document.querySelector("#watch-now-btn").href = `https://www.youtube.com/results?search_query=${movie.title}+trailer`;
    }


fetchMovieDetails().then(displayMovieDetails)