# Spark coding exercise

## How to install

npm install

## How to run

node index.js

## How to use

To add a new movie, use:
POST localhost:3000/movies
{
    "title": "The Shawshank Redemption",
    "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "releaseDate": "1994-10-14",
        "actors": [
        "Tim Robbins",
        "Morgan Freeman",
        "Bob Gunton",
        "William Sadler"
    ],
    "duration": 142,
    "poster":
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "rating": "PG"
}

To get all movies, use:
GET localhost:3000/movies

To get a single movie by id, use:
GET localhost:3000/movies/:id
e.g. localhost:3000/movies/3

To delete a movie by id, use:
DELETE localhost:3000/movies/:id
e.g. localhost:3000/movies/2
