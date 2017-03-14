(function() {
    'use strict';
    angular
        .module('beercalc')
        .service('AuthService', AuthService);

    function AuthService(lock, authManager) {

        function login() {
            lock.show();
        }
        // Set up the logic for when a user authenticates
        // This method is called from app.run.js
        function registerAuthenticationListener() {
            lock.on('authenticated', function(authResult) {
                localStorage.setItem('id_token', authResult.idToken);
                lock.getUserInfo(authResult.accessToken, function(error, profile) {
                    if (error) {
                        // Handle error
                        return;
                    }
                    localStorage.setItem('accessToken', authResult.accessToken);
                    localStorage.setItem('profile', JSON.stringify(profile));
                });
                authManager.authenticate();
            });
            if (localStorage.getItem('id_token')) {
                authManager.authenticate();
            }
        }

        function logout() {
            localStorage.removeItem('id_token');
            authManager.unauthenticate();
        }
        return {
            login: login,
            registerAuthenticationListener: registerAuthenticationListener,
            logout: logout
        };
    }
})();
