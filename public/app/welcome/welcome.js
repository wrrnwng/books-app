angular.module('welcome', [])
  .controller('welcomeController', [function() {

  }])
  .directive('welcome', function() {
    return {
      templateUrl: './app/welcome/welcome.html'
    }
  });