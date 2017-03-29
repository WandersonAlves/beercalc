(function() {

    describe('services/auth-service/auth.service.spec.js', function() {
        var authService,
            lock,
            localStorage,
            currentUserObserver,
            authManager,
            commonService,
            rootScope;

        var authResult = {
            "idToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2JlZXJjYWxjLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNDEyNjg1Mzg5NjI3NjYwMTMwNCIsImF1ZCI6ImwxT0ZpanY2eXhSbk9FSFp5aWFLWE9qN2lSSktubTJyIiwiZXhwIjoxNDkwMjQ3MjkwLCJpYXQiOjE0OTAyMTEyOTB9.IUlc0HsY8LnXc06Cj3TtC6BrpW-qII0TjC8pWGBght8",
            "idTokenPayload": {
                "iss": "https://beercalc.auth0.com/",
                "sub": "google-oauth2|114126853896276601304",
                "aud": "l1OFijv6yxRnOEHZyiaKXOj7iRJKnm2r",
                "exp": 1490247290,
                "iat": 1490211290
            }
        };

        var tokenInfoResult = {
            "email": "popoto900@gmail.com",
            "name": "Wanderson Alves",
            "given_name": "Wanderson",
            "family_name": "Alves",
            "picture": "https://lh6.googleusercontent.com/-hSn812REy-s/AAAAAAAAAAI/AAAAAAAAHaE/EfmySmatmFU/photo.jpg",
            "gender": "male",
            "locale": "pt-BR",
            "nickname": "popoto900",
            "email_verified": true,
            "clientID": "l1OFijv6yxRnOEHZyiaKXOj7iRJKnm2r",
            "updated_at": "2017-03-22T19:57:19.054Z",
            "user_id": "google-oauth2|114126853896276601304",
            "identities": [{
                "provider": "google-oauth2",
                "user_id": "114126853896276601304",
                "connection": "google-oauth2",
                "isSocial": true
            }],
            "created_at": "2017-03-14T17:36:04.686Z",
            "global_client_id": "rNlK4bTjq5CDqqfyERzyTDEsqCLloGAg"
        };

        beforeEach(function() {
            module('beercalc');
        });

        beforeEach(inject(function($injector, _$window_, $rootScope, $templateCache) {
            $templateCache.put('/views/home-view.html', '');
            authService = $injector.get('AuthService');
            lock = $injector.get('lock');
            authManager = $injector.get('authManager');
            currentUserObserver = $injector.get('CurrentUserObserver');
            commonService = $injector.get('CommonService');
            localStorage = _$window_.localStorage;
            rootScope = $rootScope;

            spyOn(lock, 'show');
            spyOn(authManager, 'unauthenticate');
            spyOn(commonService, 'showSimpleToast');
            spyOn(currentUserObserver, 'setSideProfileStats');
            spyOn(currentUserObserver, 'getSideProfileStats').and.callFake(function() {
                return true;
            });
        }));

        afterEach(function() {
            localStorage.clear();
        });

        it('should login', function() {
            authService.login();
            expect(lock.show).toHaveBeenCalled();
        });

        describe('logout()', function() {
            // NOTE: If these 'it's run in another order, the test fail
            // QUESTION: How to "reboot" service?
            beforeEach(function() {
                spyOn(localStorage, 'removeItem');
            });
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

        describe('_getProfileCallback()', function() {
            it('should register Authentication', function() {
                spyOn(localStorage, 'setItem');
                spyOn(lock, 'getProfile');
                authService.registerAuthenticationListener();
                lock.emit('authenticated', authResult);
                expect(localStorage.setItem).toHaveBeenCalledWith('id_token', authResult.idToken);
                expect(lock.getProfile).toHaveBeenCalledWith(authResult.idToken, jasmine.any(Function));
            });

            it('should execute callback without error after authentication resgistered', function() {
                authService._getProfileCallback(null, authResult);
                expect(currentUserObserver.setSideProfileStats).toHaveBeenCalled();
            });

            it('should execute callback with error after authentication resgistered', function() {
                authService._getProfileCallback(true, authResult);
                expect(currentUserObserver.setSideProfileStats).not.toHaveBeenCalled();
            });
        });
    });
})();
