
const app = angular.module('MovieApp', []);

// app.controller('NewMovieController', ($scope, MovieService) => {

// });

app.controller('ShowMoviesController', ($scope, MovieService) => {
    $scope.movies = MovieService.getMovies();

    $scope.favoriteMovie = (target) => {
        console.log(`${target.title} is LIT`);
        MovieService.markAsFavorite(target);
    };
});

app.factory('MovieService', () => {
    const movies = [];

    return {
        addMovie(name) {
            movies.push(name);
        },
        getMovies() {
            return movies;
        },
        markAsFavorite(goodie) {

        },
    };
});