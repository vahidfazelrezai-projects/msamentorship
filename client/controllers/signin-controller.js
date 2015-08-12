angular.module('msamentorshipApp').controller("signinController", function ($scope, $http) {

    $scope.firstname = '';
    resetPerson();

    function resetPerson() {
        $scope.person = {
            firstname: null,
            lastname: null,
            email: null,
            phone: null,
            school: null
        };
    }

    $scope.submit = function () {
        $http.post('/newperson', $scope.person);
        $scope.firstname = $scope.person.firstname
        resetPerson();
    }

});
