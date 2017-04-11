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

    function NavigationController($scope, $log, $timeout, $mdSidenav, $state, SideMenuFactory, CurrentStateObserver, CurrentUserObserver,
        ProfileFactory, AuthService) {
        var vm = this;
        // NOTE Public functions
        vm.toggle = toggle;
        vm.goto = goto;
        vm.loginAuth0 = loginAuth0;
        // NOTE Public attrs
        vm.currentState = null;

        function loginAuth0() {
            AuthService.login();
        }

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
        /**
         * @ngdoc function
         * @name beercalc.NavigationController:init
         * @description
         * Initialize the application
         *
         */
        var init = function() {
            vm.sideMenuOptions = SideMenuFactory.constructSideMenu();
            if (localStorage.getItem('ALREADY_SHOW_WELCOME') == "false") {
                vm.showWelcome = true;
            } else {
                vm.showWelcome = false;
            }
        }();

        CurrentStateObserver.observeCurrentState().then(null, null, function(currentState) {
            vm.currentState = currentState;
        });

        CurrentUserObserver.observeSideProfileStats().then(null, null, function(currentUser) {
            vm.currentUser = currentUser;
        });
    }
})();
