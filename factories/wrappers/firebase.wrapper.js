(function() {
    angular.module('beercalc').factory('Firebase', Firebase);

    function Firebase() {
        return {
            getGoogleAuthProvider: getGoogleAuthProvider,
            getFirebase: getFirebase
        };

        function getGoogleAuthProvider() {
            var firebase = window.firebase;
            return new firebase.auth.GoogleAuthProvider();
        }

        function getFirebase() {
            return window.firebase;
        }
    }
})();
