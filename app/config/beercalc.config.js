(function () {
	angular
		.module('beercalc')
		.config(config);

	function config($mdThemingProvider, lockProvider) {
		$mdThemingProvider.theme('default').primaryPalette('deep-orange').dark();
		lockProvider.init({
      clientID: 'l1OFijv6yxRnOEHZyiaKXOj7iRJKnm2r',
      domain: 'beercalc.auth0.com'
    });
	}
})();
