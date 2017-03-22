(function() {
    'use strict';

    describe('controllers/options.controller.js', function() {
        var controller,
            AuthService;
        beforeEach(module("beercalc"));

        beforeEach(inject(function($injector, $controller) {
            AuthService = $injector.get('AuthService');
            controller = $controller('OptionsController', {
                'AuthService': AuthService
            });

            spyOn(AuthService, 'logout');
        }));

        it("OptionsController should be defined", inject(function () {
            expect(controller).toBeDefined();
        }));

        it("should logout user", inject(function() {
            controller.logoutAuth0();
            expect(AuthService.logout).toHaveBeenCalled();
        }));

    });

})();
