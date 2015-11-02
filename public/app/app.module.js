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
  .directive('menuicon', function() {
    return {
      templateUrl: './assets/images/icons/ic_menu_24px.svg'
    };
  })
  .directive('closeicon', function() {
    return {
      templateUrl: './assets/images/icons/ic_close_24px.svg'
    };
  });