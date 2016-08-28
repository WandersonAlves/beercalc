(function() {
    'use strict';

    describe('controllers/navigation.controller.js', function() {
        var navController, scope, mdSidenav;
        beforeEach(module("beercalc"));

        var sideNavCloseMock = jasmine.createSpy();

        beforeEach(inject(function($rootScope, $controller, $mdSidenav) {
            scope = $rootScope.$new();
            mdSidenav = jasmine.createSpy().and.callFake(function() {
                return {
                    toggle: sideNavCloseMock,
										close: sideNavCloseMock
                };
            });
            navController = new $controller('NavigationController', {
                $scope: scope,
                $mdSidenav: mdSidenav
            });
        }));

        it("vm.currentState should be equal 'Perfil' on first load", function() {
            //expect(scope).toBeDefined();
            expect(navController.currentState).toBeDefined();
            expect(navController.currentState).toEqual('Perfil');
        });

        it("close function should change vm.currentState value even if someone call it without parameters", function(){
            navController.close();
            expect(navController.currentState).toEqual('Perfil');
        });

        it("close function should change vm.currentState value", function() {
            navController.close('Home');
            expect(navController.currentState).toEqual('Home');
        });

        it("when click on menu, should toggle sidenav", function() {
            navController.openLeftMenu();
            expect(sideNavCloseMock).toHaveBeenCalled();
        });
    });

})();
