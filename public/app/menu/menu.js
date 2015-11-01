angular.module('menu', [])
  .controller('menuController', [
    '$scope',
    'booksService',
    'listsService',
    function($scope, booksService, listsService) {
      $scope.items = [];
      $scope.$on('booksUpdated', function() {
        $scope.items = booksService.getTitles().concat(listsService.getTitles());
      });
      $scope.$on('listsUpdated', function() {
        $scope.items = booksService.getTitles().concat(listsService.getTitles());
      })
    }
  ])
  .directive('menu', function() {
    return {
      templateUrl: './app/menu/menu.html'
    };
  });