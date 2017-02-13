(function () {
	angular
		.module('beercalc')
		.config(config);
	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {
		var profileState = {
				url: '/profile',
				templateUrl: '/views/profile-view.html',
				controller: "ProfileController",
				controllerAs: "profileControll"
			},
			optionsState = {
				url: '/options',
				templateUrl: '/views/options-view.html',
				controller: "OptionsController",
				controllerAs: "optionsControll"
			},
			billsState = {
				url: '/bills',
				templateUrl: '/views/bills-view.html',
				controller: "BillsController",
				controllerAs: "billsControll"
			},
			homeState = {
				url: '/home',
				templateUrl: '/views/home-view.html',
				controller: "NavigationController",
				controllerAs: "navController"
			},
			recomendationsState = {
				url: '/social',
				templateUrl: '/views/social-view.html',
				controller: "SocialController",
				controllerAs: "socialControll"
			},
			helpState = {
				url: '/help',
				templateUrl: '/views/help-view.html',
				controller: "HelpController",
				controllerAs: "helpControll"
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
