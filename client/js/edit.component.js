(function() {
  'use strict';

  angular.module('app')
    .component('edit', {
      controller: editComponent,
      templateUrl: './templates/edit.html'
    })

    editComponent.$inject = ['postService', '$state', '$stateParams']

    function editComponent(postService, $state, $stateParams) {
      const vm = this;
      vm.post = {}

      vm.$onInit = function() {
        const postid = $stateParams.id
        postService.editPost(postid).then((result) => {
          vm.post = result
        })
      }
    }
})
