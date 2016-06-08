"use strict";

let NotDolls = angular.module('NotDolls', [
	'ngRoute'
]);

NotDolls.config(['$routeProvider',
  function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'MainController'
		})
		.when('/create', {
			templateUrl: 'partials/NewFigurine.html',
			controller: 'NewFigurineController'
		})
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		})
		.otherwise('/');
  }
]);
