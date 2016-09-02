(function () {
	angular.module('beercalc').controller('NavigationController', NavigationController);

	NavigationController.$inject = ['$scope', '$timeout', '$mdSidenav', '$state'];

	function NavigationController($scope, $timeout, $mdSidenav, $state) {
		var vm = this;
		// NOTE Public functions
		vm.openLeftMenu = openLeftMenu;
		vm.close = close;
		// NOTE Public attrs
		vm.currentState = 'Perfil';
		vm.currentUser = {
			avatar: 'res/photos/profile.jpg',
			name: 'Wanderson Alves Ferreira',
			level: '20',
			title: 'Brewmaster'
		};

		function close(currentState) {
			$mdSidenav('left').close();
			vm.currentState = currentState || 'Perfil';
		}

		function openLeftMenu() {
			$mdSidenav('left').toggle();
		}
	}
})();
