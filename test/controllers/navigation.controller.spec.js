(function () {
	'use strict';

	describe('controllers/navigation.controller.js', function () {
		var navController, scope;
		beforeEach(module("beercalc"));

		beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
			navController = new $controller('NavigationController', {$scope: scope});
		}));

		it("vm.perfil should be equal 'Perfil' on first load", function () {
      //expect(scope).toBeDefined();
      expect(navController.currentState).toBeDefined();
			expect(navController.currentState).toEqual('Perfil');
		})
	});

})();
