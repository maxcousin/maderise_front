/***
Controlleur permettant la conception
View: projet.html
***/
'use strict';
 app.controller('ProjetCtrl', ['$http','$scope','ngDialog', function ($http,$scope,ngDialog) {

    listProjet();
    listGammes();
    /* Fonction listant les projets */
    function listProjet() {
        $http({
    		url: 'http://localhost:3000/projet/getProjets',
    		method: 'GET',
    		datatype: 'json',
    		contentType: 'text/plain',
    		headers: {'Content-Type': 'application/json'}
    	}).then(function successCallback(res) {
            $scope.projets = res.data.projets;
            console.log(res);
            return;
        }, function errorCallback(err) {
            console.log("Impossible d'accéder à la liste des projets.\n" + err.toString());
        });
    }

    /* Fonction listant les gammes */
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

    $scope.editDevis = () => {
	}

    $scope.setProjet = () => {
	}

    $scope.delProjet = () => {
	}


}]);
