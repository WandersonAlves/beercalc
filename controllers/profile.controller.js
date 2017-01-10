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
        'ProfileService',
        'CurrentStateObserver',
        'CurrentUserObserver'
    ];

    function ProfileController($scope, $state, ProfileService, CurrentStateObserver, CurrentUserObserver) {
        var vm = this;

        var init = function() {
            CurrentStateObserver.setCurrentState('Perfil');

            ProfileService.getLoggedUser().then(function(success) {
                vm.currentUser = success.data;
                CurrentUserObserver.setSideProfileStats(vm.currentUser);
            }, function(error) {
                vm.currentUser = undefined;
            });
        }();
    }
})();
