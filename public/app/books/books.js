angular.module('books', [])
  .controller('booksController', ['$http', '$scope', 'booksService', function($http, $scope, booksService) {
    $scope.library = [];
    $scope.$watch('library', function() {
      booksService.setBooks($scope.library);
      booksService.booksUpdated();
    });
    $scope.$on('bookAdded', function() {
      $scope.library = booksService.getBooks();
      booksService.booksUpdated();
    });
    $http.get('./assets/data/books.json')
      .then(function(res) {
        $scope.library = res.data;
      });
  }])
  .factory('booksService', ['$rootScope', function($rootScope) {
    var books = [];
    return {
      addBook: function(newBook) {
        // called by other controllers
        books.push(newBook);
        $rootScope.$broadcast('bookAdded');
      },
      booksUpdated: function() {
        $rootScope.$broadcast('booksUpdated');
      },
      getBooks: function() {
        return books;
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