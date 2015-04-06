'use strict';
angular.module('MainController').controller('ImageController', imageController);

imageController.$inject = ['ImgurFactory', '$routeParams'];

function imageController(ImgurFactory, $routeParams){
  var vm = this;
  vm.images = ImgurFactory.requestedImages;

  vm.currentRoute = {
    name: $routeParams.subredditName,
    sort: $routeParams.sort,
    window: $routeParams.window
  };

  vm.queryRoute = function(){
    ImgurFactory.currentRoute(vm.currentRoute);
  };

  vm.queryRoute();
}
