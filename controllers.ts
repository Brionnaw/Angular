
    namespace MovieApp.Controllers {

      export class MovieController { // scope variable
      public movies;
      constructor(){
        this.movies = [
          {title: new Date ()}
        ];
        }
      }

      angular.module("app").controller("MovieController" , MovieController); //register controller/ link to parent module
    }
