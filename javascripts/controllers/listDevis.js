/***
Controlleur permettant la conception
View: listDevis.html
***/
'use strict';
app.controller('ListDevisCtrl', ['$http','$scope', '$window', '$location', 'ngDialog', '$timeout', function ($http,$scope,$window,$location,ngDialog,$timeout) {

    var id_pr = $window.location.href.substr($window.location.href.length - 1);
    $scope.id_pr = id_pr;
    listDevis();

    /* Fonction listant les devis */
    function listDevis(id_pr) {
        $http({
            url: 'http://localhost:3000/devis/getDevis/' + id_pr,
            method: 'GET',
            datatype: 'json',
            contentType: 'text/plain',
            headers: { 'Content-Type': 'application/json' }
        }).then(function successCallback(res) {
            $scope.devis = res.data.devis;
            console.log(res);
            return;
        }, function errorCallback(err) {
            console.log("Impossible d'accéder à la liste des devis.\n" + err.toString());
        });
    }

    /* Fonction listant les devis */
    function getMontant(id_pr) {
        $http({
            url: 'http://localhost:3000/projet/getMontant/' + id_pr,
            method: 'GET',
            datatype: 'json',
            contentType: 'text/plain',
            headers: { 'Content-Type': 'application/json' }
        }).then(function successCallback(res) {
            $scope.montant = res.data.montant;
            console.log(res);
            return;
        }, function errorCallback(err) {
            console.log("Impossible de calculer le montant du devis.\n" + err.toString());
        });
    }

    /* Fonction créant le devis */
    function addDevis(id_pr,montant) {
    $http({
        url: 'http://localhost:3000/devis/addDevis',
        method: 'POST',
        datatype: 'json',
        data: {	'montant': montant,
                'id_pr': id_pr
        },
        contentType: 'text/plain',
        headers: {'Content-Type': 'application/json'}
    }).then(function successCallback(res) {
        return;
    }, function errorCallback(err) {
        console.log("Impossible de créer le devis.\n" + err.toString());
    })};

    $scope.generateDevis = () => {
        id_pr = $scope.id_pr;
        console.log(id_pr);
        getMontant(id_pr);

        $timeout(function() {
            var montant = $scope.montant;
            console.log(montant);
            addDevis(id_pr,montant);
        }, 2000);


    }

    $scope.setDevis = () => {
    }

    $scope.delDevis = () => {
    }
}]);
