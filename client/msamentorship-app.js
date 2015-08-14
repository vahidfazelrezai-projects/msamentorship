angular.module('msamentorshipApp', ['ngRoute'])

// routing definitions
.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
	    $routeProvider
		.when('/', {
			templateUrl: '/views/splash.html',
			controller: 'splashController'
		})
		.when('/signin', {
        	templateUrl: '/views/signin.html',
        	controller: 'signinController'
    	})
		.when('/welcome', {
        	templateUrl: '/views/welcome.html',
        	controller: 'welcomeController'
    	})
	    .otherwise({
	        redirectTo: '/'
	    });

	    // remove # from URL
	    $locationProvider.html5Mode({
	        enabled: true,
	        requireBase: false
		});
	}
])
