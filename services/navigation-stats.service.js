(function() {
    /**
     * @ngdoc service
     * @name beercalc.service:NavStats
     * @description
     * Service keep navigation stats
     *
     */
    angular
        .module('beercalc')
        .service('NavStats', NavStats);

    NavStats.$inject = ['$q'];

    function NavStats($q) {
        var self = this,
            defer = $q.defer();

        this.observeCurrentState = function() {
            return defer.promise;
        }

        this.setCurrentState = function(currentState) {
            self.currentState = currentState;
            defer.notify(self.currentState);
        }
    }
})();
