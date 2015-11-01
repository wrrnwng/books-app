angular.module('books', [])
  .controller('booksController', function($http, $scope) {
    $http.get('./data/books.json')
      .then(function(res) {
        $scope.books = res.data;
      });
  })
  .directive('books', function() {
    return {
      templateUrl: './app/books/books.html'
    };
  });