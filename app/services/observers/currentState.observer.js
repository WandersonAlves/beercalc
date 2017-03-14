(function() {
    /**
     * @ngdoc service
     * @name beercalc.service:CurrentStateObserver
     * @description
     * Service keep navigation stats
     *
     */
    angular
        .module('beercalc')
        .service('CurrentStateObserver', CurrentStateObserver);

    CurrentStateObserver.$inject = ['$q'];

    function CurrentStateObserver($q) {
        var self = this,
            defer = $q.defer();

        this.observeCurrentState = function() {
            return defer.promise;
        };

        this.setCurrentState = function(currentState) {
            self.currentState = currentState;
            defer.notify(self.currentState);
        };
    }
})();
