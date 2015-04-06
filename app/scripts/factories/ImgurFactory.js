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

  var currentRoute = function(options){
    return $http.post(ServerUrl + '/imgurs', options)
    .success(function(response){
      angular.copy(response.data, requestedImages);
    });
  };

  var nextPage = function(options){
    return $http.post(ServerUrl + '/imgurs', options)
    .success(function(response){
      var data = response.data;
      for(var i = 0; i < data.length; i++){
        requestedImages.push(data[i]);
      }
    });
  };

  return {
    homeImages: homeImages,
    requestedImages: requestedImages,
    indexImages: indexImages,
    requestImages: requestImages,
    currentRoute: currentRoute,
    nextPage: nextPage
  };

}]);
