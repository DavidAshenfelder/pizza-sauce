(function() {
  'use strict';
  angular
  .module('home')
  .factory('HomeService', function ($http,$rootScope) {
    var url = 'blah';
    var getLikes = function () {
      return $http.get(url);
    };

    return {
      getLikes:getLikes
    };
  });
}());
