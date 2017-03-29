(function() {

    describe('services/observers/currentState.observer.js', function() {
        var currentStateObserver,
            q,
            defer,
            rootScope;

        beforeEach(function() {
            module("beercalc");
        });

        beforeEach(inject(function($injector, $rootScope) {
            currentStateObserver = $injector.get('CurrentStateObserver');
            q = $injector.get('$q');
            defer = q.defer();
            rootScope = $rootScope;
        }));

        it('should return a promise on observeCurrentState()', function() {
            expect(currentStateObserver.observeCurrentState()).toEqual(defer.promise);
        });

        it('should notify a promise on currentState()', function() {
            expect(currentStateObserver.setCurrentState).not.toThrow();
        });
    });
})();
