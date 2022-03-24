(function() {

	var module =module('PlayerApp');

	module.controller('HomeController', function($scope, $routeParams) {
		$scope.id = $routeParams.id;
	});

})();
