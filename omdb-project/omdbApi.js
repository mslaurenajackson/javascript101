"use strict";
document.addEventListener("DOMContentLoaded", async () => {

  // This gets the form so we can later add a submit event listener 
  const form = document.getElementById("movieForm");

  const API_KEY = "6c4c1907";

  // This gets the title of the movie that the user inputs from the form to pass in as a query parameter to the api endpoint url
  const movieTitle = document.getElementById("movieInfo");

  // Added an event listener to listen for the form submit
  form.addEventListener("submit", async (event) => {

    // Prevents the page from reloading
    event.preventDefault();

    const url = `http://www.omdbapi.com/?t=${movieTitle.value}&apikey=${API_KEY}`; //base url for the api

    const movie2 = fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data) {
          return (data);
        }
        return null;
      });

    // Added an await to pause the code until the promise finishes
    const movieData = await movie2;
    
    // This is the div where the content will be populated
    const generateMovie = document.getElementById("output");

    // For loop to iterate through keys and values and display content
    for (let i in movieData) {

      const movieHeader = document.createElement("h2");
      const movieContent = document.createElement("p");
      const moviePosterImage = document.createElement("img");
      const value = movieData[i];

      
      if (i == "Title") {
        let title = value;
        movieHeader.textContent = title;
      }
      else if (i == "Poster") {
        moviePosterImage.src = value;
      }
      else {
        movieContent.textContent = `${i}: ${value}`;
      }

      generateMovie.appendChild(movieHeader);
      generateMovie.appendChild(movieContent);
      generateMovie.appendChild(moviePosterImage);
    }
  });
});