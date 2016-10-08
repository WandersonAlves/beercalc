(function () {
	/**
	 * @ngdoc service
	 * @name beercalc.service:ProfileService
	 * @description
	 * Service for profile API
	 *
	 */
	angular
		.module('beercalc')
		.service('ProfileService', ProfileService);

	ProfileService.$inject = ['$http'];

	function ProfileService($http) {
		return {getLoggedUser: getLoggedUser}
		/**
		 * @ngdoc function
		 * @name beercalc.ProfileService:getLoggedUser
		 * @description
		 * Gets the actual logged user from API
		 *
		 */
		function getLoggedUser() {
			return $http.get('../mocks/profile.service/loggedUser.json');
		}
	}

})();
