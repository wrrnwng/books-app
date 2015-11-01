angular.module('BooksApp', ['books', 'lists'])
  .controller('mainController', function($scope) {
    $scope.header = 'My books';
  })
  .directive('main', function() {
    return {
      templateUrl: './app/main.html'
    };
  })