/**
 * @ngdoc function
 * @name loading_screen
 * @description
 * Method that closes the initial splash screen
 *
 */
if (!navigator.userAgent.match(/Android/i)) {
    window.loading_screen = window.pleaseWait({
        logo: "res/logo.png",
        backgroundColor: '#FF5722',
        loadingHtml: ""
    });
}

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD9bMSLY2Qntf9M2n_PXCXqabJ3-V9jEWc",
    authDomain: "beercalc-401e8.firebaseapp.com",
    databaseURL: "https://beercalc-401e8.firebaseio.com",
    storageBucket: "beercalc-401e8.appspot.com",
    messagingSenderId: "331430884413"
};
firebase.initializeApp(config);
