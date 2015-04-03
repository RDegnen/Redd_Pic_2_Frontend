'use strict';
angular.module('MainController').controller('NavbarController', navbarController);

navbarController.$inject = ['ImgurFactory', '$routeParams'];

function navbarController(ImgurFactory, $routeParams){
  var vm = this;

  vm.subreddit = {
    name: '',
    sort: '',
    window: ''
  };


  vm.query = function(){
    debugger
    $routeParams.subredditName = vm.subreddit.name;
    ImgurFactory.requestImages(vm.subreddit);
    console.log(vm.subreddit);
  };


}
