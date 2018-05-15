/***
Controlleur permettant le listing des modules d'un projet
View: listModule.html
***/
'use strict';
 app.controller('ListModuleCtrl', ['$http','$scope', '$window', '$location', 'ngDialog', function ($http,$scope,$window,$location,ngDialog) {

    //Récupération de l'id projet
    var id_pr = $window.location.href.substr($window.location.href.length - 1);
    $scope.id_pr = id_pr;
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
    function listModules(id_pr) {
        $http({
    		url: 'http://localhost:3000/module/getModulesByProjet/' + id_pr,
    		method: 'GET',
    		datatype: 'json',
    		contentType: 'text/plain',
            //data: {	'id_pr': id_pr },
    		headers: {'Content-Type': 'application/json'}
    	}).then(function successCallback(res) {
            $scope.modules = res.data.modules;
            console.log(res.data.modules);
            return;
        }, function errorCallback(err) {
            console.log("Impossible d'accéder à la liste des modules du projet.\n" + err.toString());
        });
    }

    /* Fonction popup formulaire d'ajout postulant */
    $scope.addModule = (id_pr) => {
        ngDialog.open({
            template: 'views/partials/pop-up/newModule.html',
            overlay: false,
            data: $scope.id_pr,
            preCloseCallback:function(){listModules($scope.id_pr);}
        });
    };

    $scope.editModule = () => {

    }

    $scope.setModule = (id_pr) => {
        //$location.path('/listModule/' + id_pr);
    }

    $scope.delModule = (id_pm) => {
        $scope.id_pm = id_pm;
        ngDialog.open({
            template: 'views/partials/pop-up/removeModule.html',
            data: $scope,
            overlay: false,
            preCloseCallback:function(){listModules($scope.id_pr);}
        });
    }

    listGammes();
    listModules(id_pr);

}]);
