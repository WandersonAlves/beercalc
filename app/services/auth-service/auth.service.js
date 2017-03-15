(function() {
    'use strict';
    angular
        .module('beercalc')
        .service('AuthService', AuthService);

    function AuthService(lock, authManager, ProfileFactory, CurrentUserObserver, CommonService) {

        function login() {
            lock.show();
        }
        // Set up the logic for when a user authenticates
        // This method is called from app.run.js
        function registerAuthenticationListener() {
            lock.on('authenticated', function(authResult) {
                localStorage.setItem('id_token', authResult.idToken);
                lock.getProfile(authResult.idToken, function(error, profile) {
                    if (error) {
                        // Handle error
                        // TODO: Handle the fucking error
                        return;
                    }
                    localStorage.setItem('profile', JSON.stringify(profile));
                    authManager.authenticate();
                    var profileParsed = JSON.parse(localStorage.getItem('profile')) || null;
                    var constructedProfile = ProfileFactory.constructUserLoginProfile(profileParsed);
                    CurrentUserObserver.setSideProfileStats(constructedProfile);
                });
            });
        }

        function logout() {
            var ls = localStorage;
            if (ls.getItem('id_token') && ls.getItem('profile') && CurrentUserObserver.getSideProfileStats()) {
                ls.removeItem('id_token');
                ls.removeItem('profile');
                CurrentUserObserver.setSideProfileStats(null);
                authManager.unauthenticate();
                CommonService.showSimpleToast('bottom', 'Usuario deslogado com sucesso!', 3000);
            }
            else {
                CommonService.showSimpleToast('bottom', 'Nenhum usuario logado.', 3000);
            }
        }
        return {
            login: login,
            registerAuthenticationListener: registerAuthenticationListener,
            logout: logout
        };
    }
})();
