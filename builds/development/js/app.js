var timeVaultApp = angular.module('timeVaultApp', ['ngRoute', 'firebase', 'appControllers']);

var appControllers = angular.module('appControllers', ['firebase']);

timeVaultApp

	.config(['$routeProvider', function($routeProvider){		
			
		$routeProvider
			.when('/add-project', {
				templateUrl: 'views/add-project.html',
				controller: 'ProjectController'
			})
			.when('/home', {
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			})
			.otherwise({
				redirectTo: '/home'
			});

	}])
	
	.factory('fctry_allProjects', function($firebase){
		
		var ref = new Firebase('https://timevaultapp.firebaseio.com/projects');
		var allProjects = $firebase(ref);
		
		return allProjects;
	});