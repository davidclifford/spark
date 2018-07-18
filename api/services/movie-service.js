'use strict';
const movies = require('../model/movie-model.js');

const service = {
    getMovies: async function () {
        return new Promise((resolve, reject) => {
          movies.getMovies()
          .then(data => {
            resolve(data);
          })
          .catch(err => {
            console.error(err);
            reject(err);
          });
        });
    },

    getMovie: async function (id) {
        return new Promise((resolve, reject) => {
          movies.getMovie(Number(id))
          .then(data => {
            resolve(data);
          })
          .catch(err => {
            console.error(err);
            reject(err);
          });
        });
    },

    deleteMovie: async function (id) {
        return new Promise((resolve, reject) => {
          movies.deleteMovie(Number(id))
          .then(data => {
            resolve(data);
          })
          .catch(err => {
            console.error(err);
            reject(err);
          });
        });
    },

    addMovie: async function addMovie(movie) {
        return new Promise((resolve, reject) => {
          movies.addMovie(movie)
          .then(data => {
            resolve(data);
          })
          .catch(err => {
            console.error(err);
            reject(err);
          });
        });
    }
}

module.exports = service;
