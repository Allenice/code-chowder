/*
* angular inherit
* */


var app = angular.module('app', []);


app.controller('MainController', ['$scope', function($scope) {
  $scope.timeOfDay = 'morning';
  $scope.name = 'Nikki';

  $scope.obj = {
    p1: 'p1',
    p2: 'p2'
  };
}]);

app.controller('ChildController', ['$scope', function($scope) {
  $scope.name = 'Mattie';

  $scope.obj.p1 = 'modify p1';
}]);

app.controller('GrandChildController', ['$scope', function($scope) {
  $scope.timeOfDay = 'evening';
  $scope.name = 'Gingerbread Baby';
}]);