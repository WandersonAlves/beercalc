// TODO Complex documentation
(function() {
    /**
     * @ngdoc controller
     * @name beercalc.controller:OptionsController
     * @description
     * Controller that controlls social state
     *
     */
    angular
        .module('beercalc')
        .controller('OptionsController', OptionsController);

    function OptionsController($scope, $state, CurrentStateObserver, CurrentUserObserver, Firebase) {
        var vm = this;
        vm.logoutUser = logoutUser;

        function logoutUser() {
            Firebase.getFirebase().auth().signOut().then(function() {
                // Sign-out successful.
                CurrentUserObserver.setSideProfileStats(null);
            }, function(error) {
                // An error happened.
            });
        }

        var init = function() {
            CurrentStateObserver.setCurrentState('Configurações');
        }();
    }
})();
