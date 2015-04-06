'use strict';
angular.module('MainController').controller('ImageController', imageController);

imageController.$inject = ['ImgurFactory', '$routeParams'];

function imageController(ImgurFactory, $routeParams){
  var vm = this;
  vm.images = ImgurFactory.requestedImages;

  vm.currentRoute = {
    name: $routeParams.subredditName,
    sort: $routeParams.sort,
    window: $routeParams.window,
    page: 0
  };

  vm.queryRoute = function(){
    ImgurFactory.currentRoute(vm.currentRoute);
  };

  vm.nextPage = function(){
    if (vm.images.length < 1) return;
    vm.currentRoute.page += 1;
    ImgurFactory.nextPage(vm.currentRoute);
  };

  vm.queryRoute();
}
