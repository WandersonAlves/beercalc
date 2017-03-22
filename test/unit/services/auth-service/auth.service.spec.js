(function() {

    describe('services/auth-service/auth.service.spec.js', function() {
        var authService,
            lock,
            localStorage,
            currentUserObserver,
            authManager,
            commonService;

        beforeEach(function() {
            module('beercalc');
        });

        beforeEach(inject(function($injector, _$window_) {
            authService = $injector.get('AuthService');
            lock = $injector.get('lock');
            authManager = $injector.get('authManager');
            currentUserObserver = $injector.get('CurrentUserObserver');
            commonService = $injector.get('CommonService');
            localStorage = _$window_.localStorage;

            spyOn(lock, 'show');
            spyOn(authManager, 'unauthenticate');
            spyOn(commonService, 'showSimpleToast');
            spyOn(localStorage, 'removeItem');
            spyOn(currentUserObserver, 'setSideProfileStats');
            spyOn(currentUserObserver, 'getSideProfileStats').and.callFake(function() {
                return true;
            });
        }));

        it('should login', function() {
            authService.login();
            expect(lock.show).toHaveBeenCalled();
        });

        describe('logout()', function() {
            // NOTE: If these 'it's run in another order, the test fail
            // QUESTION: How to "reboot" service?
            it('should alert that nobody is logged', function() {
                authService.logout();
                expect(commonService.showSimpleToast).toHaveBeenCalledWith('bottom', 'Nenhum usuario logado.', 3000);
            });

            it('should logout', function() {
                localStorage.setItem('profile', true);
                localStorage.setItem('id_token', true);
                authService.logout();
                expect(localStorage.removeItem).toHaveBeenCalled();
                expect(currentUserObserver.setSideProfileStats).toHaveBeenCalled();
                expect(authManager.unauthenticate).toHaveBeenCalled();
                expect(commonService.showSimpleToast).toHaveBeenCalledWith('bottom', 'Usuario deslogado com sucesso!', 3000);
            });
        });
    });
})();
