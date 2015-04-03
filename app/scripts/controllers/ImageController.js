'use strict';
angular.module('MainController').controller('ImageController', imageController);

imageController.$inject = ['ImgurFactory'];

function imageController(ImgurFactory){
  var vm = this;
  vm.images = ImgurFactory.requestedImages;
}
