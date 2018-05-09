/***
Controlleur permettant le listing des modules d'un projet
View: listModule.html
***/
'use strict';
 app.controller('ListModuleCtrl', ['$http','$scope', function ($http,$scope) {

    /* Fonction listant les projets */
    function listGammes() {
        $http({
    		url: 'http://localhost:3000/gamme/getGammes',
    		method: 'GET',
    		datatype: 'json',
    		contentType: 'text/plain',
    		headers: {'Content-Type': 'application/json'}
    	}).then(function successCallback(res) {
            $scope.gammes = res.data.gammes;
            return;
        }, function errorCallback(err) {
            console.log("Impossible d'accéder à la liste des gammes.\n" + err.toString());
        });
    }

    /* Fonction listant les modules du projets */
    function listModules() {
        $http({
    		url: 'http://localhost:3000/module/getModulesByProjet',
    		method: 'GET',
    		datatype: 'json',
    		contentType: 'text/plain',
    		headers: {'Content-Type': 'application/json'}
    	}).then(function successCallback(res) {
            $scope.modules = res.data.modules;
            return;
        }, function errorCallback(err) {
            console.log("Impossible d'accéder à la liste des modules du projet.\n" + err.toString());
        });
    }


    listGammes();
    listModules();
}]);
