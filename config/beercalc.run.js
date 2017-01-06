(function() {
    angular.module('beercalc').run(run);

    function run() {
        if (!navigator.userAgent.match(/Android/i)) {
            window.loading_screen.finish();
        }
    }
})();
