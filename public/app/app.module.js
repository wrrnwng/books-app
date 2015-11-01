angular.module('BooksApp', ['menu', 'welcome', 'books', 'lists'])
  .controller('mainController', ['$scope', function($scope) {
    $scope.header = 'My books';
  }])
  .directive('main', function() {
    return {
      templateUrl: './app/main.html'
    };
  })