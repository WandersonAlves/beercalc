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

    SocialController.$inject = [
        '$scope',
        '$state',
        'NavStats'
    ];

    function SocialController($scope, $state, NavStats) {
        var vm = this;

        var init = function() {
            NavStats.setCurrentState('Recomendações');
        }();
    }
})();
