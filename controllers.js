var MovieApp;
(function (MovieApp) {
    var Controllers;
    (function (Controllers) {
        var MovieController = (function () {
            function MovieController() {
                this.movies = [
                    { title: "fast n furious" },
                    { title: "die hard" },
                    { title: "snow white" }
                ];
            }
            return MovieController;
        }());
        Controllers.MovieController = MovieController;
        angular.module("app").controller("MovieController", MovieController);
    })(Controllers = MovieApp.Controllers || (MovieApp.Controllers = {}));
})(MovieApp || (MovieApp = {}));
