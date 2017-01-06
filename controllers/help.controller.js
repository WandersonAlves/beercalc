// TODO Complex documentation
(function() {
    /**
     * @ngdoc controller
     * @name beercalc.controller:HelpController
     * @description
     * Controller that controlls social state
     *
     */
    angular
        .module('beercalc')
        .controller('HelpController', HelpController);

    HelpController.$inject = [
        '$scope',
        '$state',
        'NavStats'
    ];

    function HelpController($scope, $state, NavStats) {
        var vm = this;

        var init = function() {
            NavStats.setCurrentState('Ajuda');
        }();
    }
})();
