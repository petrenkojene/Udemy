"use strict";

let numberOfFilms;

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    while (
      numberOfFilms == " " ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
  },
  remember: function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Один из последних просмотренных фильмов?");
      let b = prompt("На сколько оцените его?");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log(personalMovieDB);
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function showMyDB(item) {
    if (!item) {
      console.log(item);
    }
  },
  writeYourGenres: function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
      personalMovieDB.genres[i] = genre;
      if (genre == "" || genre == null) {
        i--;
        console.log("error");
      } else {
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1}- это ${item} `);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }

    console.log(personalMovieDB.private);
  },
};
personalMovieDB.start();

personalMovieDB.remember();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB(personalMovieDB.private);

personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB);
