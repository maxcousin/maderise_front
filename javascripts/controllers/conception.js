/***
Controlleur permettant la conception
View: conception.html
***/
'use strict';
 app.controller('ConceptionCtrl', ['$http','$scope', function ($http,$scope) {

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

    /* Fonction listant les natures de modules */
    function listNatures() {
        $http({
    		url: 'http://localhost:3000/module/getAllNatures',
    		method: 'GET',
    		datatype: 'json',
    		contentType: 'text/plain',
    		headers: {'Content-Type': 'application/json'}
    	}).then(function successCallback(res) {
            $scope.natures = res.data.natures;
            return;
        }, function errorCallback(err) {
            console.log("Impossible d'accéder à la liste des natures de module.\n" + err.toString());
        });
    }

    listGammes();
    listNatures();

    $scope.upload = (file, user, type) => {
		Upload.upload({
					url: '/document/uploadFile/' + type,
					method: 'PUT',
					data:{file: file, infos: infos}
			}).then(resp => {
					if (resp.data.error_code === 0) {
							$scope.msgInfos = {'msg':"Votre document a bien été enregistré", 'class':'mdp-green'};
		} else {
							$scope.msgInfos = {'msg':"Impossible de modifier votre document", 'class':'mdp-red'};
					}
			}, err => {
					$scope.msgInfos = {'msg':"Impossible de modifier votre document.\n" + err.toString(), 'class':'mdp-red'};
			}, evt => {
					$scope.progress = parseInt(100.0 * evt.loaded / evt.total);
			});
	};
}]);
