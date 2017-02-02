(function() {
    'use strict';

    describe('controllers/options.controller.js', function() {
        var options,
            scope,
            deferred;
        beforeEach(module("beercalc"));

        beforeEach(inject(function(_$q_, $templateCache, $controller, $rootScope, $state, _CurrentStateObserver_, _CurrentUserObserver_, _Firebase_) {
            $templateCache.put('/views/options-view.html', '');
            scope = $rootScope.$new();
            deferred = _$q_.defer();
            spyOn(_CurrentStateObserver_, 'setCurrentState');
            spyOn(_CurrentUserObserver_, 'setSideProfileStats');

            $state.go('options');

            options = new $controller('OptionsController', {
                $scope: scope,
                $state: $state,
                CurrentStateObserver: _CurrentStateObserver_,
                CurrentUserObserver: _CurrentUserObserver_,
                Firebase: _Firebase_
            });
        }));

        it("should set the nav title to 'Configurações'", inject(function(_CurrentStateObserver_) {
            expect(_CurrentStateObserver_.setCurrentState).toHaveBeenCalledWith('Configurações');
        }));

        // it("should logout the user when asked to in logoutUser() fn", inject(function(_Firebase_) {
        //     options.logoutUser();
        //     deferred.success();
        //     scope.$apply();
        //     expect(_CurrentUserObserver_.setSideProfileStats).toHaveBeenCalledWith(null);
        // }));

    });

})();
