timeVaultApp.controller('HomeController', ['$scope','$location', 'fctry_allProjects',

	function($scope, $location, fctry_allProjects){
		
		$scope.allProjects = fctry_allProjects.$asObject();
		
		$scope.deleteProject = function(key){
			fctry_allProjects.$remove(key);
		};
		
		$scope.addProject = function(){
			fctry_allProjects.$push({
				title: $scope.project.title,
				description: $scope.project.desc || '—',
				hours: $scope.project.hours || 0
			});
			
			$scope.project.title = '';
			$scope.project.desc = '';
			$scope.project.hours = '';
			
			$location.path('/home');
		};
		
	}

]);