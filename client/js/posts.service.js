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
      this.addPost = function(addPost) {
        return $http.post('/api/index', addPost).then((result) => {
          return result.data
        })
      }


    }
})()
