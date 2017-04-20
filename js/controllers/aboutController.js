angular.module("ranjith").controller("aboutController", aboutControllerModel);

function aboutControllerModel($scope, $state) {

    var x = 10; // local scope
    $scope.x = 10;
    $scope.ar = [60, 50, 60];
    $scope.name = "srinivas";
    $scope.changeUrl = function() {
        $state.go("homestate");
    }
}