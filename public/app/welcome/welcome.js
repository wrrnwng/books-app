angular.module('welcome', [])
  .controller('welcomeController', ['$scope', 'booksService', function($scope, booksService) {
    $scope.showWelcome = true;
    $scope.showAddBook = false;

    $scope.title = '';
    $scope.author = '';
    $scope.titleExists = false;

    $scope.clickNo = function() {
      $scope.showWelcome = false;
    };
    $scope.clickYes = function() {
      $scope.showWelcome = false;
      $scope.showAddBook = true;
    };
    $scope.clickCancel = function() {
      $scope.showAddBook = false;
    };
    $scope.clickAdd = function() {
      if (!$scope.titleExists) {
        booksService.addBook({
          title: $scope.title,
          author: $scope.author
        });
        $scope.showAddBook = false;        
      }
    };
    $scope.findTitle = function(newTitle) {
      var titles = booksService.getTitles();
      for (var i = 0; i < titles.length; i++) {
        if (titles[i] === newTitle) {
          return $scope.titleExists = true;
        }
      }
      return $scope.titleExists = false;
    };
  }])
  .directive('welcome', function() {
    return {
      templateUrl: './app/welcome/welcome.html'
    }
  })
  .directive('addbook', function() {
    return {
      templateUrl: './app/welcome/addbook.html'
    };
  });