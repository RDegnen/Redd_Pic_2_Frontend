'use strict';
angular.module('ReddPicApp').factory('ImgurFactory', ['$http', 'ServerUrl', function($http, ServerUrl){

  var images = [];

  var getImages = function(){
    return $http.get(ServerUrl + '/imgurs')
    .success(function(response){
      angular.copy(response.data, images);
    })
    .error(function(data, status){
      console.log(data, status);
    });
  };

  var requestImages = function(options){

    for(var param in options){
      var query = ServerUrl + '/imgers/' + options[param];
    }

    return $http.post(ServerUrl + '/imgurs', options)
    .success(function(response){
      console.log(response);
    });
  };

  return {
    images: images,
    getImages: getImages,
    requestImages: requestImages
  };

}]);
