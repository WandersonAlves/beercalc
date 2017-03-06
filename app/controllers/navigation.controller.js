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

    function NavigationController($scope, $log, $timeout, $mdSidenav, $state, SideMenuFactory, CurrentStateObserver, CurrentUserObserver, Firebase,
        ProfileFactory) {
        var vm = this;
        // NOTE Public functions
        vm.toggle = toggle;
        vm.goto = goto;
        vm.loginWithGoogle = loginWithGoogle;
        vm.logoutWithGoogle = logoutWithGoogle;
        // NOTE Public attrs
        vm.currentState = null;

        function loginWithGoogle() {
            var provider = Firebase.getGoogleAuthProvider();
            Firebase.getFirebase().auth().signInWithPopup(provider).then(function(result) {
                console.log('Login with Google success!', result);
                var currentUser = ProfileFactory.constructUserResponseFromGoogle(result);
                CurrentUserObserver.setSideProfileStats(currentUser);
            }).catch(function(error) {
                // Handle Errors here.
                console.log('Login with Google failed :(', error);
            });
        }

        function logoutWithGoogle() {
            Firebase.getFirebase().signOut().then(function() {
                vm.currentUser = null;
            }, function(error) {
                // An error happened.
            });
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
            CurrentStateObserver.setCurrentState('Home');
            vm.sideMenuOptions = SideMenuFactory.constructSideMenu();
        }();

        CurrentStateObserver.observeCurrentState().then(null, null, function(currentState) {
            vm.currentState = currentState;
        });

        CurrentUserObserver.observeSideProfileStats().then(null, null, function(currentUser) {
            vm.currentUser = currentUser;
        });
    }
})();
