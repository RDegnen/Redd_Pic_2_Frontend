'use strict';
angular.module('MainController').controller('NavbarController', navbarController);

navbarController.$inject = ['ImgurFactory', '$location'];

function navbarController(ImgurFactory, $location){
  var vm = this;

  vm.subreddit = {
    name: '',
    sort: '',
    window: ''
  };

  vm.query = function(){
    $location.path('/subreddits/' + vm.subreddit.name + '/' + vm.subreddit.sort + '/' + vm.subreddit.window);
    ImgurFactory.requestImages(vm.subreddit);
    console.log(vm.subreddit);
  };


}
