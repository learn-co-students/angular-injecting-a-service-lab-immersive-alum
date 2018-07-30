function ContactController($scope, $timeout) {
	$scope.name = 'Jon';
	$timeout(() => {
		$scope.name = 'Bobby'
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
