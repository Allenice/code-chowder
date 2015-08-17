angular.module('app', [])
  .controller('MyController', ['$scope', function($scope) {
    $scope.username = 'World';

    $scope.test = function() {
      // console.log('fff');
      return $scope.username;
    }

    $scope.users = [
      {username: 'user1', age: 1},
      {username: 'user2', age: 2},
      {username: 'user3', age: 3}
    ];
    
    $scope.$watch('users', function() {
      console.log('watch reference');
    });

    $scope.$watchCollection('users', function() {
      console.log('watch collection');
    });

    $scope.$watch('users', function() {
      console.log('watch value');
    },true);

    setTimeout(function() {
      $scope.users.push({username: 'user4', age: 4});
      $scope.users[0].age = 45;
      $scope.users = [];
    }, 1000);


    $scope.sayHello = function() {
      console.log(this);
      $scope.greeting = 'Hello ' + $scope.username + '!';
    };
  }]);