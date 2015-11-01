angular.module('BooksApp', ['menu', 'books', 'lists'])
  .controller('mainController', function() {
    this.header = 'My books';
  })
  .directive('main', function() {
    return {
      templateUrl: './app/main.html'
    };
  })