(function() {
    angular
        .module('beercalc')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        var profileState = {
                url: '/profile',
                templateUrl: '/views/profile-view.html',
            },
            optionsState = {
                url: '/options',
                templateUrl: '/views/options-view.html'
            },
            billsState = {
                url: '/bills',
                templateUrl: '/views/bills-view.html'
            };
        $urlRouterProvider.otherwise('/profile');
        $stateProvider.state('options', optionsState);
        $stateProvider.state('profile', profileState);
        $stateProvider.state('bills', billsState);
    }
})();
