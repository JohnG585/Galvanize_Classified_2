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
      this.editPost = function(id) {
        return $http.get(`/api/index/`).then((result) => {
        return result.data}).then((result) => {
          return result.find((post) => post.id == id)
        })
      }
      this.deletePost = function(id) {
        return $http.delete(`api/index/${id}`).then((result) => {
          return result.data
        })
      }


    }
})()
