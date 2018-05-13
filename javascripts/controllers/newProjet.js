app.controller('NewProjetCtrl', ['$http', '$scope', '$rootScope', '$window', '$location', 'ngDialog', function($http,$scope, $rootScope, $window, $location, ngDialog) {

    listProjet();
    listClient();

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
            return;
        }, function errorCallback(err) {
            console.log("Impossible d'accéder à la liste des projets.\n" + err.toString());
        });
    }

    /* Fonction listant les projets */
    function listClient() {
        $http({
            url: 'http://localhost:3000/client/getClients',
            method: 'GET',
            datatype: 'json',
            contentType: 'text/plain',
            headers: {'Content-Type': 'application/json'}
        }).then(function successCallback(res) {
            $scope.clients = res.data;
            console.log(res);
            return;
        }, function errorCallback(err) {
            console.log("Impossible d'accéder à la liste des clients.\n" + err.toString());
        });
    }


    /* Fonction popup formulaire d'ajout postulant */
	$scope.addClient = () => {
		ngDialog.open({
			template: 'views/partials/pop-up/newClient.html',
			overlay: false
		});
	};
}]);
