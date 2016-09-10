(function () {
	angular.module('beercalc').factory('SideMenuFactory', SideMenuFactory);

	function SideMenuFactory() {
		return {
			constructSideMenu: constructSideMenu
		};

		function constructSideMenu() {
			return [{
					sref: 'home',
					icon: 'res/svg/ic_home_white_24px.svg',
					label: 'Home'
  			},
				{
					sref: 'profile',
					icon: 'res/svg/ic_account_circle_white_24px.svg',
					label: 'Perfil'
  			},
				{
					sref: 'bills',
					icon: 'res/svg/ic_payment_white_24px.svg',
					label: 'Contas'
  			},
				{
					sref: 'recomendations',
					icon: 'res/svg/ic_more_white_24px.svg',
					label: 'Recomendações'
  			}
  		];
		}
	}
})();
