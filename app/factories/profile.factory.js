(function () {
	angular.module('beercalc').factory('ProfileFactory', ProfileFactory);

	function ProfileFactory() {
		return {
			constructUserLoginProfile: constructUserLoginProfile
		};

		function constructUserLoginProfile(auth0Info, databaseInfo) {
			databaseInfo = databaseInfo || {
				level: 20,
				title: 'Brewmaster',
				currExp: 67
			};
      return {
          "avatar": auth0Info.picture,
          "name": auth0Info.name,
          "level": databaseInfo.level,
          "title": databaseInfo.title,
          "currExp": databaseInfo.currExp
      };
    }
	}
})();
