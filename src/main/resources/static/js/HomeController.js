//CONTROLLER HOME

angular.module('Controllers').controller('home', ['$scope', '$http', function($scope, $http) {
  $http.get('/resource/').success(function(data) {
    $scope.greeting = data;
  })
}])