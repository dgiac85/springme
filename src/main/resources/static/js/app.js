angular.module('Controllers', []);

angular.module('hello', [ 'ngRoute','Controllers' ])
.config(function($routeProvider, $httpProvider) {

	$routeProvider.when('/', {
		templateUrl : '/views/home.html',
		controller : 'home'
	}).when('/login', {
		templateUrl : '/views/login.html',
		controller : 'main'
	}).otherwise('/');

  $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

})


