angular.module('msamentorshipApp').controller("welcomeController", function ($scope, $http) {

	$scope.firstnames = [];

    setInterval(function(){ 
    	$http.get('/allfirstnames', $scope.person)
    	.then(function (response) {
    		$scope.firstnames = angular.fromJson(response.data);
    	});
    }, 1000);
    
});
