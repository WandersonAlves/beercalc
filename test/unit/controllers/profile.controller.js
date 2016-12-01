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

        beforeEach(inject(function(_$q_, $templateCache, $controller, $rootScope, $state, _ProfileService_, _NavStats_) {
            $templateCache.put('/views/profile-view.html', '');
            scope = $rootScope.$new();
            deferred = _$q_.defer();
            spyOn(_ProfileService_, 'getLoggedUser').and.returnValue(deferred.promise);

            $state.go('profile');

            profileController = new $controller('ProfileController', {
                $scope: scope,
                $state: $state,
                ProfileService: _ProfileService_,
                NavStats: _NavStats_
            });
        }));

        it("should resolve promise in init ProfileService.getLoggedUser fn", inject(function() {
            deferred.resolve(loggedUserResolve);
            scope.$apply();
            expect(profileController.currentUser).not.toBe(undefined);
        }));

        it("should reject promise in init ProfileService.getLoggedUser fn", inject(function() {
            deferred.reject();
            scope.$apply();
            expect(profileController.currentUser).toBe(undefined);
        }));


    });

})();
