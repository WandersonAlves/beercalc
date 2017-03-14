(function() {
    angular.module('beercalc').run(run);

    function run(AuthService, lock) {
        if (!navigator.userAgent.match(/Android/i)) {
            window.loading_screen.finish();
        }
        AuthService.registerAuthenticationListener();
        lock.interceptHash();
    }
})();
