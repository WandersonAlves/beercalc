(function () {
	angular.module('beercalc', ['ngMaterial', 'ui.router'])
		.run(function () {
			window.loading_screen.finish();
		});
})();
