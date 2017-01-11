(function () {
	angular.module('beercalc').factory('ProfileFactory', ProfileFactory);

	function ProfileFactory() {
		return {
			constructUserResponseFromGoogle: constructUserResponseFromGoogle
		};

		function constructUserResponseFromGoogle(response) {
      return {
          "avatar": response.user.photoURL,
          "name": response.user.displayName,
          "level": "20",
          "title": "Brewmaster",
          "currExp": 67
      }
    }
	}
})();
