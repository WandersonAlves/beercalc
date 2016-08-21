(function () {
	angular
		.module('beercalc')
		.config(config);

	config.$inject = ['$mdThemingProvider'];

	function config($mdThemingProvider) {
		//$mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('orange').dark();
	}
})();
