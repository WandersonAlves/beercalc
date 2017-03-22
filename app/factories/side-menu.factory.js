(function () {
	angular.module('beercalc').factory('SideMenuFactory', SideMenuFactory);

	function SideMenuFactory() {
		return {
			constructSideMenu: constructSideMenu
		};

		function constructSideMenu() {
			return [{
					sref: 'home',
					label: 'Home'
  			},
				{
					sref: 'profile',
					label: 'Perfil'
  			},
				{
					sref: 'bills',
					label: 'Contas'
  			},
				{
					sref: 'menu',
					label: 'Cardapios'
				},
				{
					sref: 'recomendations',
					label: 'Recomendações'
  			}
  		];
		}
	}
})();
