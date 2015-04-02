'use strict';
angular.module('MainController').controller('NavbarController', navbarController);

navbarController.$inject = ['ImgurFactory'];

function navbarController(ImgurFactory){
  var vm = this;

  vm.subreddit = {
    name: ''
  };

  vm.query = function(){
    ImgurFactory.requestImages(vm.subreddit);
    console.log(vm.subreddit);
  };

}
