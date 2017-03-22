(function() {
    angular.module('beercalc').run(run);

    function run(AuthService, lock, $rootScope, CurrentStateObserver) {
        if (!navigator.userAgent.match(/Android/i)) {
            window.loading_screen.finish();
        }
        AuthService.registerAuthenticationListener();
        lock.interceptHash();

        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
            CurrentStateObserver.setCurrentState(toState.title);
        });
    }
})();
