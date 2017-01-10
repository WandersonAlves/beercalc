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
        'CurrentStateObserver'
    ];

    function SocialController($scope, $state, CurrentStateObserver) {
        var vm = this;

        var init = function() {
            CurrentStateObserver.setCurrentState('Recomendações');
        }();
    }
})();
