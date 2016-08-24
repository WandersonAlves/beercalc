(function () {
	'use strict';

	describe('beercalc.routes.js', function () {
		var rootScope, state;
		var PROFILE = 'profile';
		var OPTIONS = 'options';
		var BILLS = 'bills';

		beforeEach(module("beercalc"));

		beforeEach(inject(function ($rootScope, $state, $templateCache) {
			rootScope = $rootScope;
			state = $state;
			$templateCache.put('/views/profile-view.html', '');
			$templateCache.put('/views/options-view.html', '');
			$templateCache.put('/views/bills-view.html', '');
		}));

		it("should respond to URL profile", function () {
			expect(state.href(PROFILE, {})).toEqual('#/profile');
		});

		it("should return name of route 'profile'", function () {
			state.go(PROFILE);
			rootScope.$digest();
			expect(state.current.name).toEqual(PROFILE);
		});

		it("should respond to URL options", function () {
			expect(state.href(OPTIONS, {})).toEqual('#/options');
		});

		it("should return name of route 'options'", function () {
			state.go(OPTIONS);
			rootScope.$digest();
			expect(state.current.name).toEqual(OPTIONS);
		});

		it("should respond to URL bills", function () {
			expect(state.href(BILLS, {})).toEqual('#/bills');
		});

		it("should return name of route 'bills'", function () {
			state.go(BILLS);
			rootScope.$digest();
			expect(state.current.name).toEqual(BILLS);
		});
	});
})();
