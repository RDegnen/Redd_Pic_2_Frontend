'use strict';
angular.module('MainController').controller('HomeController', homeController);

homeController.$inject = ['ImgurFactory'];

function homeController(ImgurFactory){
  var vm = this;
  vm.images = ImgurFactory.homeImages;

}
