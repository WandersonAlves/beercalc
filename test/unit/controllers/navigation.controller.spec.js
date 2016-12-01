(function() {
    'use strict';

    describe('controllers/navigation.controller.js', function() {
        var navController,
            scope,
            mdSidenav;
        beforeEach(module("beercalc"));

        var toggleMock = jasmine.createSpy();
        var $q;
        var deferred;
        var loggedUserResolve = {
            "data": {
                "avatar": "res/photos/profile.jpg",
                "name": "Wanderson Alves Ferreira",
                "level": "20",
                "title": "Brewmaster",
                "currExp": 67
            }
        };

        beforeEach(inject(function($templateCache, _$q_, $rootScope, $state, $controller, $mdSidenav, _SideMenuFactory_, _ProfileService_, _NavStats_) {
            $templateCache.put('/views/home-view.html', '');
            scope = $rootScope.$new();
            $q = _$q_;
            deferred = _$q_.defer();
            mdSidenav = jasmine.createSpy().and.callFake(function() {
                return {
                    toggle: toggleMock
                };
            });
            spyOn($state, 'go');
            spyOn(_NavStats_, 'setCurrentState');
            spyOn(_ProfileService_, 'getLoggedUser').and.returnValue(deferred.promise);
            navController = new $controller('NavigationController', {
                $scope: scope,
                $mdSidenav: mdSidenav,
                SideMenuFactory: _SideMenuFactory_,
                ProfileService: _ProfileService_,
                NavStats: _NavStats_
            });
        }));

        it("vm.currentState should be equal 'Home'", inject(function(_NavStats_) {
            expect(navController.currentState).toBeDefined();
            _NavStats_.setCurrentState('Home');
            _NavStats_.observeCurrentState.notify();
            expect(navController.currentState).toEqual('Home');
        }));

        it("vm.currentState should be equal 'Profile'", inject(function(_NavStats_) {
            expect(navController.currentState).toBeDefined();
            _NavStats_.setCurrentState('Profile');
            expect(navController.currentState).toEqual('Profile');
        }));

        it("vm.currentState should be equal 'Bills'", inject(function(_NavStats_) {
            expect(navController.currentState).toBeDefined();
            _NavStats_.setCurrentState('Bills');
            expect(navController.currentState).toEqual('Bills');
        }));

        it("vm.currentState should be equal 'Recomendations'", inject(function(_NavStats_) {
            expect(navController.currentState).toBeDefined();
            _NavStats_.setCurrentState('Recomendations');
            expect(navController.currentState).toEqual('Recomendations');
        }));

        it("vm.currentState should be equal 'Configuration'", inject(function(_NavStats_) {
            expect(navController.currentState).toBeDefined();
            _NavStats_.setCurrentState('Configuration');
            expect(navController.currentState).toEqual('Configuration');
        }));

        it("when click on menu, should toggle sidenav", function() {
            navController.toggle();
            expect(toggleMock).toHaveBeenCalled();
        });

        it("goto fn should change $state to profile", inject(function($state) {
            navController.goto(navController.sideMenuOptions[1]);
            expect($state.go).toHaveBeenCalledWith('profile');
        }));

        it("goto fn should change $state to home", inject(function($state) {
            navController.goto(navController.sideMenuOptions[0]);
            expect($state.go).toHaveBeenCalledWith('home');
        }));

        it("goto fn should change $state to options", inject(function($state) {
            navController.goto('options');
            expect($state.go).toHaveBeenCalledWith('options');
        }));

        it("goto fn should change $state to help", inject(function($state) {
            navController.goto('help');
            expect($state.go).toHaveBeenCalledWith('help');
        }));
    });

})();
