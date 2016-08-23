(function () {
	'use strict';

	describe('controllers/navigation.controller.js', function () {
		var navController;
		beforeEach(module("beercalc"));

		beforeEach(inject(function (_NavigationController_) {
			navController = _NavigationController_;
			console.log("navController ok");
		}));

		it("vm.perfil should be equal 'Perfil' on first load", function () {
			expect(navController.perfil).toBeDefined();
			expect(navController.pefil).toEqual('Perfil');
		})
	});

})();
