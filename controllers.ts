
    namespace MovieApp.Controllers {

      export class MovieController { // scope variable
      public movies;
      constructor(){
        this.movies = [
          {title:"fast n furious"},
          {title:"die hard"},
          {title: "snow white"}
        ];
        }
      }

      angular.module("app").controller("MovieController" , MovieController); //register controller/ link to parent module
    }
