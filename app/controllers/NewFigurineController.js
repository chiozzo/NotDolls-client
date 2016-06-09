"use strict";

NotDolls.controller('NewFigurineController', [
	'$http',
	'$scope',
	'AuthFactory',
	function ($http, $scope, authFactory) {

		$scope.figurine = {};

		$scope.createFigurine = function () {
			$scope.figurine.geekId = authFactory.getUser().GeekId;
			$scope.figurine.createdDate = new Date();
			$http({
				url:'http://localhost:5000/api/Inventory',
				method: 'POST',
				data: JSON.stringify($scope.figurine)
			})
			.success(newFigurine => console.log('201 Created', newFigurine))
		};
	}
]);
