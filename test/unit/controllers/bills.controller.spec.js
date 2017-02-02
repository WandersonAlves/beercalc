(function() {
    'use strict';

    describe('controllers/bills.controller.js', function() {
        var bills,
            scope,
            deferred;
        beforeEach(module("beercalc"));

        beforeEach(inject(function(_$q_, $templateCache, $controller, $rootScope, $state, _CurrentStateObserver_) {
            $templateCache.put('/views/bills-view.html', '');
            scope = $rootScope.$new();
            deferred = _$q_.defer();
            spyOn(_CurrentStateObserver_, 'setCurrentState');

            $state.go('bills');

            bills = new $controller('BillsController', {
                $scope: scope,
                $state: $state,
                CurrentStateObserver: _CurrentStateObserver_
            });
        }));

        it("should set the nav title to 'Contas'", inject(function(_CurrentStateObserver_) {
            expect(_CurrentStateObserver_.setCurrentState).toHaveBeenCalledWith('Contas');
        }));

    });

})();
