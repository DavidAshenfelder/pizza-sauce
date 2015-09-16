(function () {
  'use strict';
  angular
    .module('home', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/#', {
        templateUrl: 'home/views/home.html',
        controller: 'homeController'
      })
    });
})();
