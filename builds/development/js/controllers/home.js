timeVaultApp.controller('HomeController', function($scope, $firebase, $location, fctry_allProjects){
	
	$scope.allProjects = allProjects.$asObject();
	
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
	
});