(function() {
    'use strict';

    describe('controllers/profile.controller.js', function() {
        var controller,
            CurrentUserObserver;
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

        beforeEach(inject(function($injector, $controller) {
            CurrentUserObserver = $injector.get('CurrentUserObserver');
            controller = $controller('ProfileController', {
                'CurrentUserObserver': CurrentUserObserver
            });
            spyOn(CurrentUserObserver, 'getSideProfileStats').and.returnValue(loggedUserResolve);
        }));

        xit('should get current logged user from CurrentUserObserver.getSideProfileStats', inject(function () {
            expect(controller.currentUser).toBe(loggedUserResolve);
        }));

        xit('should notify CurrentUserObserver with loggedUserResolve', inject(function ($timeout) {
            $timeout.flush();
        }));


    });

})();
