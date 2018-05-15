app.controller('NewModuleCtrl', ['$http', '$scope', '$rootScope', '$window', 'ngDialog', function($http, $scope, $rootScope, $window, ngDialog) {
	var id_pr = $window.location.href.substr($window.location.href.length - 1);
    /* Ajout d'un client */
	$scope.addModule = (form) => {
		console.log($scope);
		if (form.$valid){
	        $http({
	    		url: 'http://localhost:3000/projet/addModule',
	    		method: 'POST',
	    		datatype: 'json',
	            data: {	id_pr: id_pr,
						id_mo: $scope.M.id_mo,
						modele_mo: $scope.modele_mo,
						long_mo: $scope.long_mo,
						larg_mo: $scope.larg_mo,
				        epai_mo: $scope.epai_mo
	            },
	    		contentType: 'text/plain',
	    		headers: {'Content-Type': 'application/json'}
	    	}).then(function successCallback(res) {
				ngDialog.close({});
	            return;
	        }, function errorCallback(err) {
	            console.log("Impossible d'ajouter le module.\n" + err.toString());
	        });
		} else {
			ngDialog.open({
				template: 'notValidDialog',
				showClose: false,
				className: 'ngdialog-theme-default'
			});
		}
	}

	/* Fonction listant les modules du projets */
	function listModules() {
		$http({
			url: 'http://localhost:3000/module/getModules/',
			method: 'GET',
			datatype: 'json',
			contentType: 'text/plain',
			headers: {'Content-Type': 'application/json'}
		}).then(function successCallback(res) {
			$scope.modules = res.data.modules;
			console.log(res);
			return;
		}, function errorCallback(err) {
			console.log("Impossible d'accéder à la liste des modules.\n" + err.toString());
		});
	}

	listModules();

/* Méthode permettant de revenir à la page précedente */
	$scope.retour = () => {
		ngDialog.close({});
	}
}]);
