angular.module('lists', [])
  .controller('listsController', ['$http', '$scope', 'listsService', function($http, $scope, listsService) {
    $scope.lists = [];
    $scope.$watch('lists', function() {
      listsService.setLists($scope.lists);
      listsService.listsUpdated();
    });
    $http.get('./assets/data/lists.json')
      .then(function(res) {
        $scope.lists = res.data;
      });
  }])
  .factory('listsService', ['$rootScope', function($rootScope) {
    var lists = [];
    return {
      getTitles: function() {
        return lists.map(function(list) {
          return list.title;
        });
      },
      listsUpdated: function() {
        $rootScope.$broadcast('listsUpdated');
      },
      setLists: function(newLists) {
        lists = newLists;
      }
    };
  }])
  .directive('lists', function() {
    return {
      templateUrl: './app/lists/lists.html'
    };
  });