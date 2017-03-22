(function() {

    describe('services/utils/common.service.spec.js', function() {
        var mdToast,
            commonService;

        beforeEach(function() {
            module("beercalc");
        });

        beforeEach(inject(function($injector) {
            mdToast = $injector.get("$mdToast");
            commonService = $injector.get('CommonService');
            spyOn(mdToast, 'show');
        }));
        
        it('should show a toast', function() {
            commonService.showSimpleToast();
            expect(mdToast.show).toHaveBeenCalled();
        });
    });
})();
