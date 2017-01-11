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

        beforeEach(inject(function($templateCache, _$q_, $rootScope, $state, $controller, $mdSidenav, _SideMenuFactory_, _CurrentStateObserver_, _CurrentUserObserver_) {
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
            spyOn(_CurrentStateObserver_, 'observeCurrentState').and.returnValue(deferred.promise);
            spyOn(_CurrentUserObserver_, 'observeSideProfileStats').and.returnValue(deferred.promise);
            navController = new $controller('NavigationController', {
                $scope: scope,
                $mdSidenav: mdSidenav,
                SideMenuFactory: _SideMenuFactory_,
                CurrentStateObserver: _CurrentStateObserver_
            });
        }));

        it("vm.currentState should be equal 'Home'", inject(function(_CurrentStateObserver_) {
            deferred.notify('Home');
            scope.$apply();
            expect(navController.currentState).toEqual('Home');
        }));

        it("vm.currentState should be equal 'Profile'", inject(function(_CurrentStateObserver_) {
            deferred.notify('Profile');
            scope.$apply();
            expect(navController.currentState).toEqual('Profile');
        }));

        it("vm.currentState should be equal 'Bills'", inject(function(_CurrentStateObserver_) {
            deferred.notify('Bills');
            scope.$apply();
            expect(navController.currentState).toEqual('Bills');
        }));

        it("vm.currentState should be equal 'Recomendations'", inject(function(_CurrentStateObserver_) {
            deferred.notify('Recomendations');
            scope.$apply();
            expect(navController.currentState).toEqual('Recomendations');
        }));

        it("vm.currentState should be equal 'Configuration'", inject(function(_CurrentStateObserver_) {
            deferred.notify('Configuration');
            scope.$apply();
            expect(navController.currentState).toEqual('Configuration');
        }));

        it("Respond to notify on observeSideProfileStats", inject(function(_CurrentUserObserver_) {
            deferred.notify(null);
            scope.$apply();
            expect(navController.currentUser).toEqual(null);
        }));

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

        it("when click on menu, should toggle sidenav", function() {
            navController.toggle();
            expect(toggleMock).toHaveBeenCalled();
        });
    });

})();
