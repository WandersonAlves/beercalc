(function() {
    'use strict';

    describe('controllers/social.controller.js', function() {
        var social,
            scope,
            deferred;
        beforeEach(module("beercalc"));

        beforeEach(inject(function(_$q_, $templateCache, $controller, $rootScope, $state, _CurrentStateObserver_) {
            $templateCache.put('/views/social-view.html', '');
            scope = $rootScope.$new();
            deferred = _$q_.defer();
            spyOn(_CurrentStateObserver_, 'setCurrentState');

            $state.go('recomendations');

            social = new $controller('SocialController', {
                $scope: scope,
                $state: $state,
                CurrentStateObserver: _CurrentStateObserver_
            });
        }));

        xit("should set the nav title to 'Recomendações'", inject(function(_CurrentStateObserver_) {
            expect(_CurrentStateObserver_.setCurrentState).toHaveBeenCalledWith('Recomendações');
        }));

    });

})();
