(function () {
	angular.module('beercalc').factory('SideMenuFactory', SideMenuFactory);

	function SideMenuFactory() {
		return {
			constructSideMenu: constructSideMenu
		};

		function constructSideMenu() {
			return [{
					sref: 'main.home',
					label: 'Home'
  			},
				{
					sref: 'main.profile',
					label: 'Perfil'
  			},
				{
					sref: 'main.bills',
					label: 'Contas'
  			},
				{
					sref: 'main.menu',
					label: 'Cardapios'
				},
				{
					sref: 'main.recomendations',
					label: 'Recomendações'
  			}
  		];
		}
	}
})();
