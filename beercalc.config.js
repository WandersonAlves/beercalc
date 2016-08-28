(function() {
    angular
        .module('beercalc')
        .config(config);

    config.$inject = ['$mdThemingProvider'];

    function config($mdThemingProvider) {
        $mdThemingProvider.theme('default').primaryPalette('deep-orange').dark();
    }
})();
