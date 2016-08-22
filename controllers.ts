
    namespace MovieApp.Controllers {

      export class MovieController { // scope variable
        public movie:string;
        constructor() {
          this.movie = "Harry Potter";
        }
      }
      
      angular.module("app").controller("MovieController" , MovieController); //register controller/ link to parent module
    }
