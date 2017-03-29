(function() {
    'use strict';

    describe('controllers/social.controller.js', function() {
        var controller;
        beforeEach(module("beercalc"));

        beforeEach(inject(function($injector, $controller) {
            controller = $controller('SocialController', {
            });
        }));

        it("SocialController should be defined", inject(function() {
            expect(controller).toBeDefined();
        }));

    });

})();
