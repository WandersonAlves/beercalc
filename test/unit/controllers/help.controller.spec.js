(function() {
    'use strict';

    describe('controllers/help.controller.js', function() {
        var help,
            scope,
            deferred;
        beforeEach(module("beercalc"));

        beforeEach(inject(function(_$q_, $templateCache, $controller, $rootScope, $state, _CurrentStateObserver_) {
            $templateCache.put('/views/help-view.html', '');
            scope = $rootScope.$new();
            deferred = _$q_.defer();
            spyOn(_CurrentStateObserver_, 'setCurrentState');

            $state.go('help');

            help = new $controller('HelpController', {
                $scope: scope,
                $state: $state,
                CurrentStateObserver: _CurrentStateObserver_
            });
        }));

        it("should set the nav title to 'Ajuda'", inject(function(_CurrentStateObserver_) {
            expect(_CurrentStateObserver_.setCurrentState).toHaveBeenCalledWith('Ajuda');
        }));

    });

})();
