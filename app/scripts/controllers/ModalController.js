'use strict';
angular.module('MainController').controller('ModalController', modalController);

modalController.$inject = ['$scope', '$modal', '$log'];

function modalController($scope, $modal, $log){

  $scope.open = function(size){
    debugger
    var modalInstance = $modal.open({
      templateUrl: 'modal.html',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {}
    });

    modalInstance.result.then(function(selectedItem){
      $scope.selected = selectedItem;
    }, function(){
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
}
