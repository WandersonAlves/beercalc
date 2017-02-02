(function() {
    'use strict';

    describe('factories/wrappers/firebase.factory.js', function() {
        var firebase;

        beforeEach(module("beercalc"));

        beforeEach(inject(function(_Firebase_) {
            firebase = _Firebase_;
        }));

        it("should return a firebase instance", inject(function() {
            expect(firebase.getFirebase()).toEqual(jasmine.any(Object));
        }));

        it("should return a GoogleAuth instance", inject(function () {
          expect(firebase.getGoogleAuthProvider()).toEqual(jasmine.any(Object));
        }));

    });

})();
