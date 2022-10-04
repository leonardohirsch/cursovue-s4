// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let directores =  array.map(film=> film.director);
  console.log("EXERCICE 1 ->", directores);
  return directores;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let directores =  array.filter(film=> film.director==director);
  console.log("EXERCICE 2 ->", directores);
  return directores;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let filmsDirector=getMoviesFromDirector(array, director);
  let promedio =  Number((filmsDirector.reduce((suma, film) => suma + film.score,0)/filmsDirector.length).toFixed(2));
  console.log("EXERCICE 3 ->", promedio);
  return promedio;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titles =  array.map(film=> film.title);
  let first20Titles=titles.sort().slice(0,20);
  console.log("EXERCICE 4 ->", first20Titles);
  return first20Titles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let filmsByYear =  array.map(film=> film).sort((a, b) => a.year - b.year || a.title.localeCompare(b.title) );
  console.log("EXERCICE 5 ->", filmsByYear);
  return filmsByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let filmsByGenre =  array.filter(film => film.genre.includes(genre) && film.score!="");
  let promedio =  Number((filmsByGenre.reduce((suma, film) => suma + film.score,0)/filmsByGenre.length).toFixed(2));
  console.log("EXERCICE 6 ->", promedio);
  return promedio;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let filmsToMinutes=array.map(film=> {
    let hourtToMinutes=parseInt(film.duration.charAt(0))*60;
    let minutes;
    if (film.duration.length>2){
      minutes=parseInt(film.duration.substr(-5, 2));
    } else{
      minutes=0;
    }
    let totalMinutes=hourtToMinutes+minutes;
    return {...film, duration: totalMinutes};
  })
  console.log("EXERCICE 7 ->", filmsToMinutes);
  return filmsToMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let filmsOfYear =  array.filter(film=> film.year==year);
  let bestFilm= filmsOfYear.sort((a, b) => b.score - a.score).slice(0, 1);
  console.log("EXERCICE 8 ->", bestFilm);
  return bestFilm;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
