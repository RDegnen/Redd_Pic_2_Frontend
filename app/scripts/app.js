'use strict';

/**
 * @ngdoc overview
 * @name reddPicFrontendApp
 * @description
 * # reddPicFrontendApp
 *
 * Main module of the application.
 */
angular.module('ReddPicApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap',
  'infinite-scroll',
  'MainController',
  'MainDirective'
]).run(function(ImgurFactory){
  ImgurFactory.indexImages();
});

