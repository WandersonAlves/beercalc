(function() {
    'use strict';
    angular
        .module('beercalc')
        .service('CommonService', CommonService);

    function CommonService($mdToast) {

        function showSimpleToast(location, text, delay) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(text)
                .position(location)
                .hideDelay(delay)
            );
        }

        return {
            showSimpleToast: showSimpleToast
        };
    }
})();
