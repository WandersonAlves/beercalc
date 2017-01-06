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

    BillsController.$inject = [
        '$scope',
        '$state',
        'NavStats'
    ];

    function BillsController($scope, $state, NavStats) {
        var vm = this;

        var init = function() {
            NavStats.setCurrentState('Contas');
        }();
    }
})();
