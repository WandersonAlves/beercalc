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

    OptionsController.$inject = [
        '$scope',
        '$state',
        'CurrentStateObserver'
    ];

    function OptionsController($scope, $state, CurrentStateObserver) {
        var vm = this;

        var init = function() {
            CurrentStateObserver.setCurrentState('Configurações');
        }();
    }
})();
