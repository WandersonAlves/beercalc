// TODO Complex documentation
(function() {
    /**
     * @ngdoc controller
     * @name beercalc.controller:ProfileController
     * @description
     * Controller that controlls profile state
     *
     */
    angular
        .module('beercalc')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = [
        '$scope',
        '$state',
        'CurrentStateObserver',
        'CurrentUserObserver'
    ];

    function ProfileController($scope, $state, CurrentStateObserver, CurrentUserObserver) {
        var vm = this;

        CurrentUserObserver.observeSideProfileStats().then(null, null, function(currentUser) {
            vm.currentUser = currentUser;
        });

        var init = function() {
            CurrentStateObserver.setCurrentState('Perfil');
        }();
    }
})();
