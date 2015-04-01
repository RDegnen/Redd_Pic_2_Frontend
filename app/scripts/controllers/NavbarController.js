'use strict';
angular.module('MainController').controller('NavbarController', navbarController);

function navbarController(){
  var vm = this;

  vm.subreddit = {
    name: ''
  };

  vm.query = function(){
    console.log(vm.subreddit.name);
  };
// function that captures a form input and parses the form data and passes that form data to the imgur factory
  // vm.query : { subreddit: "whatever the input was"}
}
