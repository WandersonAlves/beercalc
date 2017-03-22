(function() {
    'use strict';

    describe('controllers/bills.controller.js', function() {
        var controller;
        beforeEach(module("beercalc"));

        beforeEach(inject(function($injector, $controller) {
            controller = $controller('BillsController', {
            });
        }));

        it("BillsController should be defined", inject(function() {
            expect(controller).toBeDefined();
        }));

    });

})();
