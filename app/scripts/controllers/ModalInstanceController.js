'use strict';
angular.module('MainController').controller('ModalInstanceController', modalinstanceController);

function modalinstanceController($scope, $modalInstance, image){
  debugger
  $scope.image = image;
}
