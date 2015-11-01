angular.module('books', [])
  .controller('booksController', ['$http', '$scope', 'booksService', function($http, $scope, booksService) {
    $scope.books = [];
    $scope.$watch('books', function() {
      booksService.setBooks($scope.books);
      booksService.booksUpdated();
    });
    $http.get('./data/books.json')
      .then(function(res) {
        $scope.books = res.data;
      });
  }])
  .factory('booksService', ['$rootScope', function($rootScope) {
    var books = [];
    return {
      booksUpdated: function() {
        $rootScope.$broadcast('booksUpdated');
      },
      getTitles: function() {
        return books.map(function(book) {
          return book.title;
        });
      },
      setBooks: function(newBooks) {
        books = newBooks;
      }
    };
  }])
  .directive('books', function() {
    return {
      templateUrl: './app/books/books.html'
    };
  });