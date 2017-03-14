// TODO Complex documentation
(function() {
    /**
     * @ngdoc controller
     * @name beercalc.controller:OptionsController
     * @description
     * Controller that controlls social state
     *
     */
    angular
        .module('beercalc')
        .controller('OptionsController', OptionsController);

    function OptionsController($scope, $state, CurrentStateObserver, CurrentUserObserver, AuthService) {
        var vm = this;
        vm.logoutAuth0 = logoutAuth0;        

        function logoutAuth0() {
          AuthService.logout();
        }

        var init = function() {
            CurrentStateObserver.setCurrentState('Configurações');
        }();
    }
})();
