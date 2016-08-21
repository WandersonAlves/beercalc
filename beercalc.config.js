(function() {
    angular
        .module('beercalc')
        .config(config);

    config.$inject = ['$mdThemingProvider'];

    function config($mdThemingProvider) {
        $mdThemingProvider.definePalette('amber', {
            '50': '#fffaf5',
            '100': '#fed7a9',
            '200': '#febe72',
            '300': '#fd9d2b',
            '400': '#fd8f0d',
            '500': '#e97f02',
            '600': '#cb6e02',
            '700': '#ac5e01',
            '800': '#8e4d01',
            '900': '#703d01',
            'A100': '#fffaf5',
            'A200': '#fed7a9',
            'A400': '#fd8f0d',
            'A700': '#ac5e01',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 A100 A200'
        });
        $mdThemingProvider.theme('default').primaryPalette('amber').dark();
    }
})();
