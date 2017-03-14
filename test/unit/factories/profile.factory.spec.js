(function() {
    'use strict';

    describe('factories/profile.factory.js', function() {
        var profile;
        var mockedResponse = {
            picture: 'url:test',
            name: 'Wanderson'
        };
        var mockedReturn = {
            "avatar": mockedResponse.picture,
            "name": mockedResponse.name,
            "level": 20,
            "title": "Brewmaster",
            "currExp": 67
        };

        beforeEach(module("beercalc"));

        beforeEach(inject(function(_ProfileFactory_) {
            profile = _ProfileFactory_;
        }));

        it("should construct user object from response", inject(function() {
            expect(profile.constructUserLoginProfile(mockedResponse)).toEqual(mockedReturn);
        }));

    });

})();
