// TODO Complex documentation
(function() {
    /**
     * @ngdoc controller
     * @name beercalc.controller:BillsController
     * @description
     * Controller that controlls bills state
     *
     */
    angular
        .module('beercalc')
        .controller('BillsController', BillsController);

    function BillsController($scope, $state, CurrentStateObserver) {
        var vm = this;

        var init = function() {
            CurrentStateObserver.setCurrentState('Contas');
        }();
    }
})();
