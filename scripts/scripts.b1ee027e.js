"use strict";function homeController(a){var b=this;b.images=a.homeImages}function navbarController(a,b){var c=this;c.subreddit={name:"",sort:"",window:""},c.query=function(){b.path("/subreddits/"+c.subreddit.name+"/"+c.subreddit.sort+"/"+c.subreddit.window),a.requestImages(c.subreddit),console.log(c.subreddit)}}function imageController(a,b){var c=this;c.images=a.requestedImages,c.currentRoute={name:b.subredditName,sort:b.sort,window:b.window,page:0},c.queryRoute=function(){a.currentRoute(c.currentRoute)},c.nextPage=function(){c.images.length<1||(c.currentRoute.page+=1,a.nextPage(c.currentRoute))},c.queryRoute()}function modalController(a,b,c){a.open=function(d){var e=b.open({templateUrl:"views/modal.html",controller:"ModalInstanceController",scope:a,resolve:{image:function(){return d}}});e.result.then(function(b){a.selected=b},function(){c.info("Modal dismissed at: "+new Date)})}}function modalinstanceController(a,b,c){a.image=c}angular.module("ReddPicApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","infinite-scroll","MainController","MainDirective"]).run(["ImgurFactory",function(a){a.indexImages()}]),angular.module("ReddPicApp").config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeController",controllerAs:"homeController"}).when("/subreddits/:subredditName/:sort/:window",{templateUrl:"views/images.html",controller:"ImageController",controllerAs:"imageController"}).otherwise({redirectTo:"/"})}]),angular.module("ReddPicApp").constant("ServerUrl","https://infinite-temple-9102.herokuapp.com"),angular.module("ReddPicApp").factory("ImgurFactory",["$http","ServerUrl",function(a,b){var c=[],d=[],e=function(){return a.get(b+"/imgur/index").success(function(a){angular.copy(a.data,c)}).error(function(a,b){console.log(a,b)})},f=function(c){return a.post(b+"/imgur/gallery",c).success(function(a){console.log(a),angular.copy(a.data,d)})},g=function(c){return a.post(b+"/imgur/gallery",c).success(function(a){angular.copy(a.data,d)})},h=function(c){return a.post(b+"/imgur/gallery",c).success(function(a){for(var b=a.data,c=0;c<b.length;c++)d.push(b[c])})};return{homeImages:c,requestedImages:d,indexImages:e,requestImages:f,currentRoute:g,nextPage:h}}]),angular.module("MainController",[]),angular.module("MainController").controller("HomeController",homeController),homeController.$inject=["ImgurFactory"],angular.module("MainController").controller("NavbarController",navbarController),navbarController.$inject=["ImgurFactory","$location"],angular.module("MainController").controller("ImageController",imageController),imageController.$inject=["ImgurFactory","$routeParams"],angular.module("MainController").controller("ModalController",modalController),modalController.$inject=["$scope","$modal","$log"],angular.module("MainController").controller("ModalInstanceController",modalinstanceController),modalinstanceController.$inject=["$scope","$modalInstance","image"],angular.module("MainDirective",[]),angular.module("MainDirective").directive("rdNavbar",[function(){return{restrict:"E",templateUrl:"views/navbar.html",controller:"NavbarController",controllerAs:"navbarController",bindToController:!0,scope:{}}}]);