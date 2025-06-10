'use strict'
document.addEventListener('DOMContentLoaded', function () {requ
    movieForm.addEventListener("submit", function (e) {
        movieForm.appendChild(errorText);
});
async function fetchMovieData(movieTitle) {
const API_KEY = '6c4c1907';
const url = `http://www.omdbapi.com/?apikey=6c4c1907&t=${title}&plot=full`; //base url for the api
const movie2 = fetch (url)
.then(function (response) {
    return response.json();
})
.then(function(data) {
    console.log("Black Panther", data);
    if (data) {
        return generateMovie(data);
    }
    return null;
});

console.log("Black Panther", movie2);

const movie = await fetch(url).then(response) => response.json(); //awaits all the promises to resolve before proceeding
  


  //'use strict'
//const API_KEY = '6c4c1907';
//const BASE_URL = 'http://www.omdbapi.com/';

//async function fetchMovieData(movieTitle) {
    //const url = `${BASE_URL}?t=${encodeURIComponent(movieTitle)}&apikey=${API_KEY}`;
    //try {
      //const response = await fetch(url);
     // if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    //  const data = await fetch(url).then(response => response.json()); //awaits all the promises to resolve before proceeding
    //  return data;
  //  } catch (error) {
    //  console.error('Error fetching movie data:', error);
    //  return null;
  //  }
  //};
  
  
  //?t=Black+Panther&apikey=6c4c1907
  
  
  //  const url = `${BASE_URL}?t=${encodeURIComponent(movieTitle)}&apikey=${API_KEY}`;
  //try {
   // const response = await fetch(BASE_URL + `?t=${encodeURIComponent(movieTitle)}&apikey=${API_KEY}`);
    //if (!response.ok) {
    //  throw new Error(`HTTP error! status: ${response.status}`);
   // }
  //  const data = await response.json();
  //  return data;
 // } catch (error) {
   // console.error('Error fetching movie data:', error);
   // return null;
  //}
//};
//document.addEventListener('DOMContentLoaded', function() { //event listener for form
    //const movieTitle = 'Black Panther';
  //  const movieYear = '2018'; 
 //   const movieRated = 'PG-13';
 //   const movieReleased = '16 Feb 2018';
  //  const movieRuntime = '134 min';
  //  const movieGenre = 'Action, Adventure, Sci-Fi';
    //const movieDirector = 'Ryan Coogler';
//document.addEventListener('click', function () {
   // document.querySelector('movie-info').innerHTML = movieInfo;
  //});






//api link from class http://www.omdbapi.com/?tt38=Black+panther96198&apikey=6c4c1907
//const data = fetchMovieData('Black Panther');
//const displayMovieData = (data) => {
  //if (!data || data.Response === 'False') {
    //console.error('Movie not found or error in response:', data);
   // return;
 // }

