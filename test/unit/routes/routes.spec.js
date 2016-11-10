(function () {
	'use strict';

	describe('beercalc.routes.js', function () {
		var rootScope, state;
		var PROFILE = 'profile';
		var OPTIONS = 'options';
		var BILLS = 'bills';
		var HELP = 'help';
		var HOME = 'home';
		var SOCIAL = 'recomendations';
		var SPECIAL = 'special';
		// NOTE This const is equal the number of routes that application have
		var TOTAL_ROUTES = 7;

		beforeEach(module("beercalc"));

		beforeEach(inject(function ($rootScope, $state, $templateCache) {
			rootScope = $rootScope;
			state = $state;
			$templateCache.put('/views/profile-view.html', '');
			$templateCache.put('/views/options-view.html', '');
			$templateCache.put('/views/bills-view.html', '');
			$templateCache.put('/views/help-view.html', '');
			$templateCache.put('/views/home-view.html', '');
			$templateCache.put('/views/social-view.html', '');
			$templateCache.put('/views/special-view.html', '');
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

		it("should respond to URL home", function () {
			expect(state.href(HOME, {})).toEqual('#/home');
		});

		it("should return name of route 'home'", function () {
			state.go(HOME);
			rootScope.$digest();
			expect(state.current.name).toEqual(HOME);
		});

		it("should respond to URL help", function () {
			expect(state.href(HELP, {})).toEqual('#/help');
		});

		it("should return name of route 'help'", function () {
			state.go(HELP);
			rootScope.$digest();
			expect(state.current.name).toEqual(HELP);
		});

		it("should respond to URL social", function () {
			expect(state.href(SOCIAL, {})).toEqual('#/social');
		});

		it("should return name of route 'social'", function () {
			state.go(SOCIAL);
			rootScope.$digest();
			expect(state.current.name).toEqual(SOCIAL);
		});

		it("should respond to URL special", function () {
			expect(state.href(SPECIAL, {})).toEqual('#/special');
		});

		it("should return name of route 'special'", function () {
			state.go(SPECIAL);
			rootScope.$digest();
			expect(state.current.name).toEqual(SPECIAL);
		});

		it("should have all routes defined", function () {
			expect(state.get().length-1).toBe(TOTAL_ROUTES);
		});
	});
})();
