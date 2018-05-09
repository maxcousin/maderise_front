'use strict';

/**
 * @ngdoc overview
 * @name maderiseApp
 * @description
 * # maderiseApp
 *
 * Main module of the application.
 */

var app = angular.module('maderiseApp', ['ngRoute']);

app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/index',{redirectTo: '/'})
    .when('/login', {
      templateUrl: 'views/partials/login.html',
      controller: 'LoginCtrl'
    })
    .when('/projet', {
      templateUrl: 'views/partials/projet.html',
      controller: 'ProjetCtrl'
    })
    .when('/listModule', {
      templateUrl: 'views/partials/listModule.html',
      controller: 'ListModuleCtrl'
    })
    .when('/conception', {
      templateUrl: 'views/partials/conception.html',
      controller: 'ConceptionCtrl'
    })
    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
