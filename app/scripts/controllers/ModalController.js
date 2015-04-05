'use strict';
angular.module('MainController').controller('ModalController', modalController);

modalController.$inject = ['$scope', '$modal', '$log'];

function modalController($scope, $modal, $log){

  $scope.open = function(image){

    var modalInstance = $modal.open({
      templateUrl: 'views/modal.html',
      controller: 'ModalInstanceController',
      scope: $scope,
      resolve: {
        image: function(){
        return image;
        }
      }
    });

    modalInstance.result.then(function(selectedItem){
      $scope.selected = selectedItem;
    }, function(){
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
}
