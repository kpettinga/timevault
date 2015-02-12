timeVaultApp.controller('HomeController', ['$scope','$location', 'fctry_allProjects',

	function($scope, $location, fctry_allProjects){
		
		$scope.allProjects = fctry_allProjects.$asObject();
		
		$scope.deleteProject = function(key){
			allProjects.$remove(key);
		};
		
		$scope.addProject = function(){
			allProjects.$push({
				title: $scope.project.title,
				description: $scope.project.desc || '—',
				hours: $scope.project.hours || 0
			});
			$location.path('/home');
		};
		
	}

]);