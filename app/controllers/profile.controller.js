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

    function ProfileController($scope, $state, CurrentStateObserver, CurrentUserObserver) {
        var vm = this;

        vm.currentUser = CurrentUserObserver.getSideProfileStats();

        CurrentUserObserver.observeSideProfileStats().then(null, null, function(currentUser) {
            vm.currentUser = currentUser;
        });
    }
})();
