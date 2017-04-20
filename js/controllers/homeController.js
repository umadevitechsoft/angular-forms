angular.module("ranjith").controller("homeController", homeControllerModel);
//homeControllerModel.$inject = ['$scope'];

function homeControllerModel($scope, $state, $log) {
    var x = 10; // local scope
    $scope.x = 10;
    $scope.ar = [60, 50, 60];
    $scope.name = "srinivas";
    $scope.changeUrl = function() {
        $state.go("aboutstate");
    }
    $scope.createAccount = function() {
        var username = $scope.username;
        var password = $scope.password;
        $log.log(username, password);
    }
}