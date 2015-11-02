angular.module('BooksApp', ['menu', 'welcome', 'books', 'lists'])
  .controller('mainController', ['$scope', '$window', function($scope, $window) {
    $scope.header = 'My books';
    if ($window.innerWidth < 600) {
      $scope.isMobile = true;
    } else {
      $scope.isMobile = false;
    }
    $scope.menuOpened = false;
    $scope.menuToggle = function() {
      $scope.menuOpened = !$scope.menuOpened;
    };
  }])
  .directive('main', function() {
    return {
      templateUrl: './app/main.html'
    };
  })