// TODO Complex documentation
(function() {
    /**
     * @ngdoc controller
     * @name beercalc.controller:NavigationController
     * @description
     * Controller that controlls how screen handles everything
     *
     */
    angular
        .module('beercalc')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = [
        '$scope',
        '$log',
        '$timeout',
        '$mdSidenav',
        '$state',
        'SideMenuFactory',
        'ProfileService',
        'NavStats'
    ];

    function NavigationController($scope, $log, $timeout, $mdSidenav, $state, SideMenuFactory, ProfileService, NavStats) {
        var vm = this;
        // NOTE Public functions
        vm.toggle = toggle;
        vm.goto = goto;
        // NOTE Public attrs
        // FIXME Set currentState value dynamically
        vm.currentState = null;

        /**
         * @ngdoc function
         * @name beercalc.NavigationController:toggle
         * @description
         * Open or closes the navigation menu
         *
         */
        function toggle() {
            $mdSidenav('left').toggle();
        }
        /**
         * @ngdoc function
         * @name beercalc.NavigationController:goto
         * @description
         * Change the actual state route of screen
         *
         */
        function goto(menu) {
            var label;
            // TODO Refactor this
            if (angular.isString(menu)) {
                $state.go(menu);
            } else {
                $state.go(menu.sref);
            }
            toggle();
        }

        NavStats.observeCurrentState().then(null, null, function(currentState) {
            vm.currentState = currentState;
        });
        /**
         * @ngdoc function
         * @name beercalc.NavigationController:init
         * @description
         * Initialize the application
         *
         */
        var init = function() {
						NavStats.setCurrentState('Home');
            vm.sideMenuOptions = SideMenuFactory.constructSideMenu();
        }();


    }
})();
