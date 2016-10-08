(function () {
	angular
		.module('beercalc')
		.config(config);
	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {
		var profileState = {
				url: '/profile',
				templateUrl: '/views/profile-view.html',
			},
			optionsState = {
				url: '/options',
				templateUrl: '/views/options-view.html'
			},
			billsState = {
				url: '/bills',
				templateUrl: '/views/bills-view.html'
			},
			homeState = {
				url: '/home',
				templateUrl: '/views/home-view.html'
			},
			recomendationsState = {
				url: '/social',
				templateUrl: '/views/social-view.html'
			},
			helpState = {
				url: '/help',
				templateUrl: '/views/help-view.html'
			};
		$urlRouterProvider.otherwise('/home');
		$stateProvider.state('options', optionsState);
		$stateProvider.state('profile', profileState);
		$stateProvider.state('bills', billsState);
		$stateProvider.state('home', homeState);
		$stateProvider.state('recomendations', recomendationsState);
		$stateProvider.state('help', helpState);
	}
})();
