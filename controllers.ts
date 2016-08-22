
    namespace MovieApp.Controllers {

      export class MovieController { // scope variable
        public color:string;
      public pickColor () {
        console.log(this.color);
          }
      }

      angular.module("app").controller("MovieController" , MovieController); //register controller/ link to parent module
    }
