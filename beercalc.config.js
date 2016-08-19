(function () {
	angular
		.module('beercalc')
		.config(config);

	function config($mdThemingProvider) {
		$mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('orange').dark();
	}
})();
