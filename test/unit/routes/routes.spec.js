(function() {
    'use strict';

    describe('beercalc.routes.js', function() {
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

        beforeEach(inject(function($rootScope, $state, $templateCache) {
            rootScope = $rootScope;
            state = $state;
            $templateCache.put('/views/profile-view.html', '');
            $templateCache.put('/views/options-view.html', '');
            $templateCache.put('/views/bills-view.html', '');
            $templateCache.put('/views/help-view.html', '');
            $templateCache.put('/views/home-view.html', '');
            $templateCache.put('/views/social-view.html', '');
        }));

        it("should respond to URL profile", function() {
            var result = state.href(PROFILE, {});
            var reachedSuccessfulPage = (result === '#!/profile' || result === '#/profile');
            expect(reachedSuccessfulPage).toBe(true);
        });

        it("should return name of route 'profile'", function() {
            state.go(PROFILE);
            rootScope.$digest();
            expect(state.current.name).toEqual(PROFILE);
        });

        it("should respond to URL options", function() {
            var result = state.href(OPTIONS, {});
            var reachedSuccessfulPage = (result === '#!/options' || result === '#/options');
            expect(reachedSuccessfulPage).toBe(true);
        });

        it("should return name of route 'options'", function() {
            state.go(OPTIONS);
            rootScope.$digest();
            expect(state.current.name).toEqual(OPTIONS);
        });

        it("should respond to URL bills", function() {
            var result = state.href(BILLS, {});
            var reachedSuccessfulPage = (result === '#!/bills' || result === '#/bills');
            expect(reachedSuccessfulPage).toBe(true);
        });

        it("should return name of route 'bills'", function() {
            state.go(BILLS);
            rootScope.$digest();
            expect(state.current.name).toEqual(BILLS);
        });

        it("should respond to URL home", function() {
            var result = state.href(HOME, {});
            var reachedSuccessfulPage = (result === '#!/home' || result === '#/home');
            expect(reachedSuccessfulPage).toBe(true);
        });

        it("should return name of route 'home'", function() {
            state.go(HOME);
            rootScope.$digest();
            expect(state.current.name).toEqual(HOME);
        });

        it("should respond to URL help", function() {
            var result = state.href(HELP, {});
            var reachedSuccessfulPage = (result === '#!/help' || result === '#/help');
            expect(reachedSuccessfulPage).toBe(true);
        });

        it("should return name of route 'help'", function() {
            state.go(HELP);
            rootScope.$digest();
            expect(state.current.name).toEqual(HELP);
        });

        it("should respond to URL social", function() {
            var result = state.href(SOCIAL, {});
            var reachedSuccessfulPage = (result === '#!/social' || result === '#/social');
            expect(reachedSuccessfulPage).toBe(true);
        });

        it("should return name of route 'social'", function() {
            state.go(SOCIAL);
            rootScope.$digest();
            expect(state.current.name).toEqual(SOCIAL);
        });

        it("should have all routes defined", function() {
            expect(state.get().length - 1).toBe(TOTAL_ROUTES);
        });
    });
})();
