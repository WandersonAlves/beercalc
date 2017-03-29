// TODO Complex documentation
(function() {
    /**
     * @ngdoc controller
     * @name beercalc.controller:OptionsController
     * @description
     * Controller that controlls configuration state
     *
     */
    angular
        .module('beercalc')
        .controller('OptionsController', OptionsController);

    function OptionsController(AuthService) {
        var vm = this;
        vm.logoutAuth0 = logoutAuth0;

        function logoutAuth0() {
          AuthService.logout();
        }
    }
})();
