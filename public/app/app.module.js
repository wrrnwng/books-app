angular.module('BooksApp', ['menu', 'welcome', 'books', 'lists'])
  .controller('mainController', ['$scope', function($scope) {
    $scope.layout = window.innerWidth < 480 ? 'column' : 'row';
    $scope.header = 'My books';
  }])
  .directive('main', function() {
    return {
      templateUrl: './app/main.html'
    };
  })