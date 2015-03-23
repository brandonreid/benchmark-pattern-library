angular.module('controllers', [])
    .controller('MainCtrl', ['$scope', function($scope) {
        $scope.toggleMenu = function() {
            $scope.menuOpen = !$scope.menuOpen;
        }
        $scope.closeMenu = function() {
            if ($scope.menuOpen) {
                $scope.menuOpen = !$scope.menuOpen;
            }
        }
    }])
    .controller('HeaderCtrl', ['$scope', function($scope) {

    }])
    .controller('HomeCtrl', ['$scope', function($scope) {

    }])
    .controller('SideCtrl', ['$scope', '$state', function($scope, $state) {
        $scope.state = $state;
    }])
    .controller('FrameworkCtrl', ['$scope', '$state', function($scope, $state) {

    }])
    .controller('IconsCtrl', ['$scope', '$state', function($scope, $state) {

    }]);
