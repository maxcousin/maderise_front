app.controller('NewProjetCtrl', ['$http', '$scope', '$rootScope', '$window', '$location', 'ngDialog', function($http,$scope, $rootScope, $window, $location, ngDialog) {
    console.log("a");
    listProjet();
    listClient();//dans rootcontroller
    //$scope.clients = $rootScope.clients;
    // $rootScope.$on('refreshClients', function(){
    //     listClient();
    // })

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
            $scope.clients = res.data.clients;
            //$rootScope.clients = res.data.clients;
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
			overlay: false,
            preCloseCallback:function(){listClient();}
		});
	};

    /* Ajout du projet */
	$scope.addProjet = () => {
        $http({
    		url: 'http://localhost:3000/projet/addProjet',
    		method: 'POST',
    		datatype: 'json',
            data: {	'ref_pr': $scope.ref_pr,
              'type_pr': $scope.type_pr,
              'id_cl': $scope.id_cl
            },
    		contentType: 'text/plain',
    		headers: {'Content-Type': 'application/json'}
    	}).then(function successCallback(res) {
            console.log(res);
            $location.path('/projet');//REDIRIGER PLUTOT VERS LA CONCEPTION DU NOUVEAU PROJET CREE
            //return;
        }, function errorCallback(err) {
            console.log("Impossible d'ajouter le projet.\n" + err.toString());
        });
	}

}]);
