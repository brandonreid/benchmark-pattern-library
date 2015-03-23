angular.module('benchmark', [
    'ui.router',
    'angulartics',
    'angulartics.segment.io',
    'templates',
    'controllers',
    'ngSanitize',
    'uiGmapgoogle-maps',
    'ui.select',
    'angularMoment',
    'c3',
    'truncate',
])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
              url: '',
              templateUrl: 'templates/home.html',
              controller: 'HomeCtrl'
            })
            .state('framework', {
              url: '/framework',
              templateUrl: 'templates/framework.html',
              controller: 'FrameworkCtrl'
            })
            .state('icons', {
              url: '/icons',
              templateUrl: 'templates/icons.html',
              controller: 'IconsCtrl'
            });

        $urlRouterProvider.otherwise('');
    }]);