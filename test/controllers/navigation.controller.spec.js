(function () {
	'use strict';

	describe('controllers/navigation.controller.js', function () {
		var navController, scope;
		beforeEach(module("beercalc"));

		beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
			navController = new $controller('NavigationController', {$scope: scope});
		}));

		it("vm.currentState should be equal 'Perfil' on first load", function () {
      //expect(scope).toBeDefined();
      expect(navController.currentState).toBeDefined();
			expect(navController.currentState).toEqual('Perfil');
		});

    it("close function should change vm.currentState value", function () {
      //expect(scope).toBeDefined();
      navController.close('Home');
			expect(navController.currentState).toEqual('Home');
		});
	});

})();
