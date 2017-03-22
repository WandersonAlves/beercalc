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
