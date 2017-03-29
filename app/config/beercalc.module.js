(function() {

    var EndpointApi = {
        BASE: 'http://localhost:8080/',
        API: 'api/'
    };

    angular.module('beercalc', ['ngMaterial', 'ui.router', 'ngAnimate', 'auth0.lock', 'angular-jwt']).constant('EndpointApi', EndpointApi);
})();
