angular.module('lists', [])
  .controller('listsController', function($http, $scope) {
    $http.get('./data/lists.json')
      .then(function(res) {
        $scope.lists = res.data;
      });
  })
  .directive('lists', function() {
    return {
      templateUrl: './app/lists/lists.html'
    };
  });