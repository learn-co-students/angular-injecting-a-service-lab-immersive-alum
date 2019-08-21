function ContactController($scope, $timeout) {
	$scope.name = 'Matt Talbot';

	$timeout(function(){
		$scope.name = "Definitely Not Natt Talbot"
	}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);