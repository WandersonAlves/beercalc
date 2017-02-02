(function() {

    var EndpointApi = {
        BASE: 'http://localhost:8080/',
        API: 'api/'
    };
		
    angular.module('beercalc', ['ngMaterial', 'ui.router', 'ngAnimate']).constant('EndpointApi', EndpointApi);
})();
