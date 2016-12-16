(function () {
	angular
		.module('beercalc')
		.config(config);
	config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

	function config($stateProvider, $urlRouterProvider, $locationProvider) {
		var profileState = {
				url: '/profile',
				templateUrl: '/views/profile-view.html',
				controller: "ProfileController",
				controllerAs: "profileControll"
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
			},
			specialState = {
				url: '/special',
				templateUrl: '/views/special-view.html'
			};
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/home');
		$stateProvider.state('options', optionsState);
		$stateProvider.state('profile', profileState);
		$stateProvider.state('bills', billsState);
		$stateProvider.state('home', homeState);
		$stateProvider.state('recomendations', recomendationsState);
		$stateProvider.state('help', helpState);
		$stateProvider.state('special', specialState);
	}
})();
