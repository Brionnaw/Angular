
    namespace MovieApp {
      angular.module ("app" , ['ui.router']).config((
        $stateProvider: ng.ui.IStateProvider,
        $locationProvider: ng.ILocationProvider,
        $urlrRouterProvider: ng.ui.IUrlRouterProvider
      ) => {
        $stateProvider.state('page1', {
          url: '/page1',
          templateUrl:'page1.html',
          controller: MovieApp.Controllers.MovieController,
          controllerAs: 'vm'
       }).state('page2', {
         url: '/page2',
         templateUrl:'page2.html',
         controller: MovieApp.Controllers.MovieController,
         controllerAs: 'vm'
      })
      $urlrRouterProvider.otherwise('/page1');
      // $locationProvider.html5Mode(true);
    })
  }
