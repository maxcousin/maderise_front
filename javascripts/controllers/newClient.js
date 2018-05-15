app.controller('NewClientCtrl', ['$http', '$scope', '$rootScope', '$window', 'ngDialog', '$location', function($http, $scope, $rootScope, $window, ngDialog, $location) {

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
			//$rootscope.clients = res.data.clients;//
			console.log(res);
			return;
		}, function errorCallback(err) {
			console.log("Impossible d'accéder à la liste des clients.\n" + err.toString());
		});
	}

    /* Ajout d'un client */
	$scope.addClient = (form) => {
		if (form.$valid){
	        $http({
	    		url: 'http://localhost:3000/client/addClient',
	    		method: 'POST',
	    		datatype: 'json',
	            data: {	'nom_cl': $scope.nom_cl,
	              'prenom_cl': $scope.prenom_cl,
	              'tel_cl': $scope.tel_cl,
	              'mail_cl': $scope.mail_cl
	            },
	    		contentType: 'text/plain',
	    		headers: {'Content-Type': 'application/json'}
	    	}).then(function successCallback(res) {
				//listClient();
				//$rootScope.$broadcast('refresh');
				//$location.path('/newProjet');
				//$rootScope.$broadcast('refreshClients');
				ngDialog.close({});
	            return;
	        }, function errorCallback(err) {
	            console.log("Impossible d'ajouter le client.\n" + err.toString());
	        });
		} else {
			ngDialog.open({
				template: 'notValidDialog',
				showClose: false,
				className: 'ngdialog-theme-default'
			});
		}
	}

  /* Méthode permettant de revenir à la page précedente */
  $scope.retour = () => {
		ngDialog.close({});
	}
}]);
