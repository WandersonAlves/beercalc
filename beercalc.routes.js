(function () {
	angular
		.module('beercalc')
		.config(config);

	function config($stateProvider) {
		var profileState = {
				name: 'profile',
				url: '/profile',
				templateUrl: '/views/profile-view.html'
			},
			optionsState = {
				name: 'options',
				url: '/options',
				templateUrl: '/views/options-view.html'
			},
			billsState = {
				name: 'bills',
				url: '/bills',
				templateUrl: '/views/bills-view.html'
			};

		$stateProvider.state(optionsState);
		$stateProvider.state(profileState);
		$stateProvider.state(billsState);
	}
})();
