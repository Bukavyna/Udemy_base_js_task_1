"use strict"

const numberOffFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
	count: numberOffFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один з останніх переглянутих фільмів?', ''),
			b = prompt('Поставте йому оцінку.', ''),
			c = prompt('Один з останніх переглянутих фільмів?', ''),
			d = prompt('Поставте йому оцінку.', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
