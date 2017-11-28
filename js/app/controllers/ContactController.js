function ContactController($scope, $timeout) {
    $scope.name = 'Adames';
    $timeout(function () {
        $scope.name = "not Adames"
    }, 5000);
}

angular
    .module('app')
    .controller('ContactController', ContactController);