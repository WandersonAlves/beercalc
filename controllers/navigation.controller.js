(function () {
	angular.module('beercalc').controller('NavigationController', NavigationController);

	NavigationController.$inject = ['$scope', '$timeout', '$mdSidenav', '$state', 'SideMenuFactory'];

	function NavigationController($scope, $timeout, $mdSidenav, $state, SideMenuFactory) {
		var vm = this;
		// NOTE Public functions
		vm.toggle = toggle;
		vm.goto = goto;
		// NOTE Public attrs
		vm.currentState = 'Home';
		vm.currentUser = {
			avatar: 'res/photos/profile.jpg',
			name: 'Wanderson Alves Ferreira',
			level: '20',
			title: 'Brewmaster'
		};
		// NOTE Mock value
		vm.currExp = 62;

		vm.sideMenuOptions = SideMenuFactory.constructSideMenu();

		function toggle() {
			$mdSidenav('left').toggle();
		}

		function goto(state) {
			$state.go(state);
			toggle();
		}
	}
})();
