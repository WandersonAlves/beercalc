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

	NavigationController.$inject = ['$scope', '$timeout', '$mdSidenav', '$state', 'SideMenuFactory'];

	function NavigationController($scope, $timeout, $mdSidenav, $state, SideMenuFactory) {
		var vm = this;
		// NOTE Public functions
		vm.toggle = toggle;
		vm.goto = goto;
		// NOTE Public attrs
		// FIXME Set currentState value dynamically
		vm.currentState = 'Home';
		// TODO Get currentUser value from userService
		vm.currentUser = {
			avatar: 'res/photos/profile.jpg',
			name: 'Wanderson Alves Ferreira',
			level: '20',
			title: 'Brewmaster'
		};
		// NOTE Mock value
		vm.currExp = 62;

		vm.sideMenuOptions = SideMenuFactory.constructSideMenu();
		/**
		 * @ngdoc function
		 * @name beercalc.NavigationController:toggle
		 * @description
		 * Open or closes the navigation menu
		 *
		 */
		function toggle() {
			$mdSidenav('left').toggle();
		}
		/**
		 * @ngdoc function
		 * @name beercalc.NavigationController:goto
		 * @description
		 * Change the actual state route of screen
		 *
		 */
		function goto(state) {
			$state.go(state);
			toggle();
		}
	}
})();
