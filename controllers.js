var MovieApp;
(function (MovieApp) {
    var Controllers;
    (function (Controllers) {
        var MovieController = (function () {
            function MovieController() {
            }
            MovieController.prototype.pickColor = function () {
                console.log(this.color);
            };
            return MovieController;
        }());
        Controllers.MovieController = MovieController;
        angular.module("app").controller("MovieController", MovieController);
    })(Controllers = MovieApp.Controllers || (MovieApp.Controllers = {}));
})(MovieApp || (MovieApp = {}));
