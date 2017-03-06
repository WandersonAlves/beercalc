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

    function HelpController($scope, $state, CurrentStateObserver, MockService) {
        var vm = this;

        var init = function() {
            CurrentStateObserver.setCurrentState('Ajuda');
            MockService.sampleService().then(function(result) {
                console.log(result);
            });
        }();
    }
})();
