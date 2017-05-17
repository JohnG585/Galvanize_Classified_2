(function() {
  'use strict';

  angular.module('app')
    .service('postService', service)

    service.$inject = ['$http']

    function service($http) {
      this.getPosts = function() {
        return $http.get('/api/index').then((results) => {
          return results.data
        })
      }


    }
})()
