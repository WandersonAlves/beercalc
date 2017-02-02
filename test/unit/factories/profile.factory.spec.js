(function() {
    'use strict';

    describe('factories/profile.factory.js', function() {
        var profile;
        var mockedResponse = {};
        mockedResponse.user = {};
        mockedResponse.user.photoURL = 'url:test';
        mockedResponse.user.displayName = 'Wanderson';

        var mockedReturn = {
            "avatar": mockedResponse.user.photoURL,
            "name": mockedResponse.user.displayName,
            "level": "20",
            "title": "Brewmaster",
            "currExp": 67
        }

        beforeEach(module("beercalc"));

        beforeEach(inject(function(_ProfileFactory_) {
            profile = _ProfileFactory_;
        }));

        it("should construct user object from response", inject(function() {
            expect(profile.constructUserResponseFromGoogle(mockedResponse)).toEqual(mockedReturn);
        }));

    });

})();
