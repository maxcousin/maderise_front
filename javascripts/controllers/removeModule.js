app.controller('RemoveModuleCtrl', ['$http', '$scope', '$rootScope', '$window', '$location', 'ngDialog', function($http,$scope, $rootScope, $window, $location, ngDialog) {
    //id_pr = $scope.id_pr;
    //id_pr = $scope.ngDialogData.id_pr;
    //id_mo = $scope.ngDialogData.id_mo;
    id_pm = parseInt($scope.ngDialogData.id_pm);
    $scope.id_pm = id_pm;
    //console.log(id_pm);
    /* Fonction listant les projets */
    $scope.removeModule = (id_pm) => {
        $http({
            url: 'http://localhost:3000/projet/removeModule',
            method: 'POST',
            datatype: 'json',
            data: {	'id_pm': id_pm },
            contentType: 'text/plain',
            headers: {'Content-Type': 'application/json'}
        }).then(function successCallback(res) {
            ngDialog.close({});
            return;
        }, function errorCallback(err) {
            console.log("Impossible d'enlever le module.\n" + err.toString());
        });
    }

    /* Méthode permettant de revenir à la page précedente */
    $scope.retour = () => {
          ngDialog.close({});
      }

}]);
