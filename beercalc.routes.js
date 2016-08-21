(function() {
    angular
        .module('beercalc')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        var profileState = {
                name: 'profile',
                url: '/profile',
                templateUrl: '/views/profile-view.html',
            },
            optionsState = {
                name: 'options',
                url: '/options',
                templateUrl: '/views/options-view.html'
            },
            billsState = {
                name: 'bills',
                url: '/bills',
                templateUrl: '/views/bills-view.html'
            };
        $urlRouterProvider.otherwise('/profile');
        $stateProvider.state(optionsState);
        $stateProvider.state(profileState);
        $stateProvider.state(billsState);
    }
})();
