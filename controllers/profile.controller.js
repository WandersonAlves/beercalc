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
        'NavStats'
    ];

    function ProfileController($scope, $state, ProfileService, NavStats) {
        var vm = this;

        var init = function() {
            NavStats.setCurrentState('Perfil');

            ProfileService.getLoggedUser().then(function(success) {
                vm.currentUser = success.data;
            }, function(error) {
                vm.currentUser = undefined;
            });
        }();


    }
})();
