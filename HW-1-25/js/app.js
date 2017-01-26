
const app = angular.module('MovieApp', []);

app.controller('UserController', function ($scope, MovieService) {
    $scope.name = 'User';
    $scope.adjective = 'GOAT';
});

app.controller('MovieListController', function ($scope, MovieService) {
    $scope.movieTitles = MovieService.getMovies();

    $scope.newTitle = () => {
        const wholeMovie = {
            title: $scope.movieName,
            release: $scope.movieRelease,
            genre: $scope.movieGenre,
            rating: null,
        };

        MovieService.addMovie(wholeMovie);
        $scope.movieName = '';
        $scope.movieRelease = '';
        $scope.movieGenre = '';
    };

    $scope.remove = (id) => {
        $scope.movieTitles.splice(id, 1);
        console.log('GOODBYE CRUEL WORLD!!');
    };

    $scope.thumbsUp = (goodies) => {
        console.log('I dig it')
        // MovieService.addPet($scope.petName);
    };

    $scope.thumbsDown = (baddies) => {
        console.log('Save your money')
    };
});

app.factory('MovieService', () => {
    const movieTitles = [];

    return {
        addMovie(name) {
            movieTitles.push(name);
        },
        getMovies() {
            return movieTitles;
        },
        thumbsUp(goodies) {
            goodies.rating = true;
        },
        thumbsDown(baddies) {
            baddies.rating = true;
        },
    };
});