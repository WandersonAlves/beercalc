// TODO Complex documentation
(function() {
    /**
     * @ngdoc controller
     * @name beercalc.controller:SocialController
     * @description
     * Controller that controlls social state
     *
     */
    angular
        .module('beercalc')
        .controller('SocialController', SocialController);

    function SocialController($scope, $state, CurrentStateObserver) {
        var vm = this;
    }
})();
