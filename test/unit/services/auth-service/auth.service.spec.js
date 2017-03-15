(function() {

  describe('services/auth-service/auth.service.spec.js', function() {
    var authService,
        $httpBackend,
        $templateCache,
        lock;

    beforeEach(function() {
      module("beercalc");
    });

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get("$httpBackend");
        $templateCache = $injector.get("$templateCache");
        authService = $injector.get("AuthService");
        lock = $injector.get("lock");
    }));

    beforeEach(function () {
      var store = {};

      $templateCache.put('/views/home-view.html', '');

      spyOn(localStorage, 'getItem').and.callFake(function (key) {
        return store[key];
      });
      spyOn(lock, 'show');
    });

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should log in', function() {
      authService.login();
      expect(lock.show).toHaveBeenCalled();
    });
  });
  //NG-DESCRIBE
  // ngDescribe({
  //   name: "Test Auth Service",
  //   modules: 'beercalc',
  //   inject: 'AuthService',
  //   tests: function (deps) {
  //     beforeEach(function() {
  //       var store = {
  //         'profile' : 'XPTO'
  //       };
  //
  //       spyOn(deps.localStorage, 'getItem').andCallFake(function (key) {
  //         return store[key];
  //       });
  //     });
  //
  //     it("should logout", function() {
  //       deps.AuthService.logout();
  //     });
  //   }
  // });
})();
