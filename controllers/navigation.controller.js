// TODO Complex documentation
(function () {
	/**
	 * @ngdoc controller
	 * @name beercalc.controller:NavigationController
	 * @description
	 * Controller that controlls how screen handles everything
	 *
	 */
	angular
		.module('beercalc')
		.controller('NavigationController', NavigationController);

	NavigationController.$inject = [
		'$scope',
		'$log',
		'$timeout',
		'$mdSidenav',
		'$state',
		'SideMenuFactory',
		'ProfileService'
	];

	function NavigationController($scope, $log, $timeout, $mdSidenav, $state, SideMenuFactory, ProfileService) {
		var vm = this;
		// NOTE Public functions
		vm.toggle = toggle;
		vm.goto = goto;
		// NOTE Public attrs
		// FIXME Set currentState value dynamically
		vm.currentState = null;

		/**
		 * @ngdoc function
		 * @name beercalc.NavigationController:toggle
		 * @description
		 * Open or closes the navigation menu
		 *
		 */
		function toggle() {
			$mdSidenav('left')
				.toggle();
		}
		/**
		 * @ngdoc function
		 * @name beercalc.NavigationController:goto
		 * @description
		 * Change the actual state route of screen
		 *
		 */
		function goto(menu) {
			var label;
			// TODO Refactor this
			if (angular.isString(menu)) {
				if (menu === 'options') {
					label = 'Configurações';
				} else if (menu == 'help') {
					label = 'Ajuda';
				}
				$state.go(menu);
			} else {
				$state.go(menu.sref);
			}
			vm.currentState = menu.label || label;
			toggle();
		}
		/**
		 * @ngdoc function
		 * @name beercalc.NavigationController:init
		 * @description
		 * Initialize the application
		 *
		 */
		var init = function () {
			vm.sideMenuOptions = SideMenuFactory.constructSideMenu();
			ProfileService
				.getLoggedUser()
				.then(function (success) {
					vm.currentUser = success.data;
				}, function (error) {
					vm.currentUser = undefined;
				});
		}();
	}
})();
