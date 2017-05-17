(function() {
  'use strict';

  angular.module('app')
    .component('posts', {
      controller: postController,
      templateUrl: './templates/posts.html'
    })

    postController.$inject = ['postService']
    function postController(postService) {
      const vm = this;
      vm.$onInit = function() {

        postService.getPosts()
          .then((posts) => {
            vm.posts = posts
          })
      }

    }
})();
