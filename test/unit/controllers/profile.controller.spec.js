(function() {
    'use strict';

    describe('controllers/profile.controller.js', function() {
        var controller,
            CurrentUserObserver,
            rootScope;
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

        beforeEach(inject(function($injector, $controller, $q, $templateCache, $rootScope) {
            $templateCache.put('/views/home-view.html', '');
            rootScope = $rootScope;
            CurrentUserObserver = $injector.get('CurrentUserObserver');
            controller = $controller('ProfileController', {
                'CurrentUserObserver': CurrentUserObserver
            });
        }));

        it('should notify CurrentUserObserver with loggedUserResolve', function() {
          CurrentUserObserver.setSideProfileStats(loggedUserResolve);
          rootScope.$digest();
          expect(controller.currentUser).toBe(loggedUserResolve);
        });
    });

})();
