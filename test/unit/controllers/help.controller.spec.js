(function() {
    'use strict';

    describe('controllers/help.controller.js', function() {
        var controller;
        beforeEach(module("beercalc"));

        beforeEach(inject(function($injector, $controller) {
            controller = $controller('HelpController', {
            });
        }));

        it("HelpController should be defined", inject(function() {
            expect(controller).toBeDefined();
        }));

    });

})();
