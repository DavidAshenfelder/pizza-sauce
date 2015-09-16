(function() {
  'use strict';

  angular
  .module('Porzios', [
    'ngRoute',
    'home',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/views/home.html',
        controller: 'homeController'
      })
      .when('/404', {
        template: '<h1>Sorry, Page not found!<h6>'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
}());
