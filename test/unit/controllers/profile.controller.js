(function() {
    'use strict';

    describe('controllers/profile.controller.js', function() {
        var profileController,
            scope,
            mdSidenav;
        var deferred;
        beforeEach(module("beercalc"));

        var loggedUserResolve = {
            "data": {
                "avatar": "res/photos/profile.jpg",
                "name": "Wanderson Alves Ferreira",
                "level": "20",
                "title": "Brewmaster",
                "currExp": 67
            }
        };

        beforeEach(inject(function(_$q_, $templateCache, $controller, $rootScope, $state, _CurrentStateObserver_, _CurrentUserObserver_) {
            $templateCache.put('/views/profile-view.html', '');
            scope = $rootScope.$new();
            deferred = _$q_.defer();
            spyOn(_CurrentStateObserver_, 'setCurrentState');
            spyOn(_CurrentUserObserver_, 'observeSideProfileStats').and.returnValue(deferred.promise);
            
            $state.go('profile');

            profileController = new $controller('ProfileController', {
                $scope: scope,
                $state: $state,
                CurrentStateObserver: _CurrentStateObserver_,
                CurrentUserObserver: _CurrentUserObserver_
            });
        }));

        it("should call setCurrentState with 'Perfil'", inject(function(_CurrentStateObserver_) {
            expect(_CurrentStateObserver_.setCurrentState).toHaveBeenCalledWith('Perfil');
        }));

        it("should notify with 'Profile' in init()", inject(function(_CurrentUserObserver_) {
            deferred.notify(loggedUserResolve);
            scope.$apply();
            expect(profileController.currentUser).toEqual(loggedUserResolve);
        }));

    });

})();
