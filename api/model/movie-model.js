const loki = require('lokijs');
const db = new loki('Spark');
const movieCollection = db.addCollection("movies");
var id = 1;

var collection = {
    getMovies: function () {
        return new Promise((resolve, reject) => {
            let movies = movieCollection.find();
            resolve(movies);
        });
    },

    getMovie: function (id) {
        return new Promise((resolve, reject) => {
            let movie = movieCollection.find({'id':id});
            resolve(movie);
        });
    },

    deleteMovie: function (id) {
        return new Promise((resolve, reject) => {
            let movie = movieCollection.chain().find({'id':id}).remove();
            resolve(movie);
        });
    },

    addMovie: function (movie) {
        return new Promise((resolve, reject) => {
            movie.id = id++;
            const movies = movieCollection.insert(movie);
            resolve(movies);
        });
    }
}
module.exports = collection;
