angular.module('controllers', [])
    .controller('HomeCtrl', ['$scope', function($scope) {

    }])
    .controller('HeaderCtrl', ['$scope', function($scope) {
    	
    }])
    .controller('SideCtrl', ['$scope', '$state', function($scope, $state) {
        $scope.state = $state;
    }])
    .controller('IconsCtrl', ['$scope', '$state', function($scope, $state) {

    }]);
