timeVaultApp.controller('ProjectController', ['$scope', '$location', 'allProjects', function($scope, $location, allProjects){
	
	$scope.addProject = function(){
		allProjects.push({
			title: $scope.project.title,
			description: $scope.project.desc || '—',
			hours: $scope.project.hours || 0
		});
		$location.path('/home');
	};
	
}]);