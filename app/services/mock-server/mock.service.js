(function() {
    angular
        .module('beercalc')
        .service('MockService', MockService);

    MockService.$inject = ['$http', 'EndpointApi'];

    function MockService($http, EndpointApi) {

        var apiUrl = EndpointApi.BASE + EndpointApi.API;
        return {
          sampleService: function () {
            return $http.get(apiUrl);
          }
        }
    }
})();
