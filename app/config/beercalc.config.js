(function () {
	angular
		.module('beercalc')
		.config(config);

	function config($mdThemingProvider, $provide, lockProvider) {
		$mdThemingProvider.theme('default').primaryPalette('deep-orange').dark();
		lockProvider.init({
      clientID: 'l1OFijv6yxRnOEHZyiaKXOj7iRJKnm2r',
      domain: 'beercalc.auth0.com',
			options: {
				theme: {
					logo: 'res/logo.png',
					primaryColor: '#FF5722'
				},
				language: 'pt-br',
        languageDictionary: {
          title: "BeerCalc!"
        }
      }
    });
	}
})();
