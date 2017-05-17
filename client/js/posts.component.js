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
      vm.createPost = function() {
        vm.post = {
          title: vm.post.title,
          description: vm.post.description,
          item_image: vm.post.image,
          price: vm.post.price,
          created_at: new Date()
        }
        postService.addPost(vm.post).then((result) => {
          vm.posts.push(result)
          delete vm.post;
        })
      }


    }
})();
