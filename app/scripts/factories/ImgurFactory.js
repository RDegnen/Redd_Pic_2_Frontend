'use strict';
angular.module('ReddPicApp').factory('ImgurFactory', ['$http', 'ServerUrl', function($http, ServerUrl){

  var images = [];

  var getImages = function(options){
    // // options are going to look something like an object:
    // { }
    // if(options){
    //   for(var param in options){
    //     // append url with options[params]
    //   }
    //   http://localhost:3000/imgurs?subreddit=nakedladytees
    // }
    return $http.get(ServerUrl + '/imgurs')
    .success(function(response){
      angular.copy(response.data, images);
    })
    .error(function(data, status){
      console.log(data, status);
    });
  };

  return {
    images: images,
    getImages: getImages
  };

}]);
