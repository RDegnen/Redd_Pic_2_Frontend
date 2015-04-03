'use strict';
angular.module('ReddPicApp').factory('ImgurFactory', ['$http', 'ServerUrl', function($http, ServerUrl){

  var homeImages = [];
  var requestedImages = [];

  var indexImages = function(){
    return $http.get(ServerUrl + '/imgurs')
    .success(function(response){
      angular.copy(response.data, homeImages);
    })
    .error(function(data, status){
      console.log(data, status);
    });
  };

  var requestImages = function(options){
    return $http.post(ServerUrl + '/imgurs', options)
    .success(function(response){
      console.log(response);
      angular.copy(response.data, requestedImages);
    });
  };

  return {
    homeImages: homeImages,
    requestedImages: requestedImages,
    indexImages: indexImages,
    requestImages: requestImages
  };

}]);
