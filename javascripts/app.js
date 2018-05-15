'use strict';

/**
 * @ngdoc overview
 * @name maderiseApp
 * @description
 * # maderiseApp
 *
 * Main module of the application.
 */

var app = angular.module('maderiseApp', ['ngRoute','ngDialog']);

app.config(['ngDialogProvider', function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default',
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        appendTo: false,
        preCloseCallback: function () {
            console.log('default pre-close callback');
        }
    });
}]);

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
    .when('/newProjet', {
      templateUrl: 'views/partials/newProjet.html',
      controller: 'NewProjetCtrl'
    })
    .when('/listModule/:id_pr', {
      templateUrl: 'views/partials/listModule.html',
      controller: 'ListModuleCtrl'
    })
    .when('/conception', {
      templateUrl: 'views/partials/conception.html',
      controller: 'ConceptionCtrl'
    })
    .when('/listDevis/:id_pr', {
      templateUrl: 'views/partials/listDevis.html',
      controller: 'ListDevisCtrl'
    })
    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
