(function() {
    /**
     * @ngdoc service
     * @name beercalc.service:CurrentUserObserver
     * @description
     * Service keep navigation stats
     *
     */
    angular
        .module('beercalc')
        .service('CurrentUserObserver', CurrentUserObserver);

    CurrentUserObserver.$inject = ['$q'];

    function CurrentUserObserver($q) {
        var self = this,
            defer = $q.defer();

        this.observeSideProfileStats = function() {
            return defer.promise;
        }

        this.setSideProfileStats = function(sideProfileStats) {
            self.sideProfileStats = sideProfileStats;
            defer.notify(self.sideProfileStats);
        }
    }
})();
