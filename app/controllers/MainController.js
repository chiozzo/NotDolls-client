NotDolls.controller('MainController', [
  '$http',
  '$scope',
  function($http, $scope) {

    $scope.figurines = {};

    $http
      .get('http://localhost:5000/api/Inventory')
      .success(inv => $scope.figurines = inv);

    $scope.deleteFigurine = function (InventoryId) {
      $http.delete(`http://localhost:5000/api/Inventory/${InventoryId}`)
        .then(
          response => console.log("resolve", response),
          response => console.log("reject", response)
        )}
}]);
