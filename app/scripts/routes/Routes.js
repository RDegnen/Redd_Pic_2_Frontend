'use strict';
angular.module('ReddPicApp').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'views/home.html',
      controller: 'HomeController',
      controllerAs: 'homeController'
    })
    .when('/:subredditName',{
      templateUrl: 'views/images.html',
      controller: 'ImageController',
      controllerAs: 'imageController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
