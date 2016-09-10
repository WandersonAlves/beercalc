(function () {
	'use strict';

	describe('controllers/navigation.controller.js', function () {
		var navController, scope, mdSidenav;
		beforeEach(module("beercalc"));

		var toggleMock = jasmine.createSpy();

		beforeEach(inject(function ($rootScope, $state, $controller, $mdSidenav, _SideMenuFactory_) {
			scope = $rootScope.$new();
			mdSidenav = jasmine.createSpy().and.callFake(function () {
				return {
					toggle: toggleMock
				};
			});
			spyOn($state, 'go');
			navController = new $controller('NavigationController', {
				$scope: scope,
				$mdSidenav: mdSidenav,
				SideMenuFactory: _SideMenuFactory_
			});
		}));

		it("vm.currentState should be equal 'Home' on first load", function () {
			//expect(scope).toBeDefined();
			expect(navController.currentState).toBeDefined();
			expect(navController.currentState).toEqual('Home');
		});

		it("when click on menu, should toggle sidenav", function () {
			navController.toggle();
			expect(toggleMock).toHaveBeenCalled();
		});

		it("goto fn should change $state to profile", inject(function ($state) {
			navController.goto('profile');
			expect($state.go).toHaveBeenCalledWith('profile');
		}));

		it("goto fn should change $state to home", inject(function ($state) {
			navController.goto('home');
			expect($state.go).toHaveBeenCalledWith('home');
		}));

		it("goto fn should change $state to options", inject(function ($state) {
			navController.goto('options');
			expect($state.go).toHaveBeenCalledWith('options');
		}));
	});

})();
