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
        'CurrentStateObserver'
    ];

    function HelpController($scope, $state, CurrentStateObserver) {
        var vm = this;

        var init = function() {
            CurrentStateObserver.setCurrentState('Ajuda');
        }();
    }
})();
