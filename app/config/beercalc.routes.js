(function() {
    angular
        .module('beercalc')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        var profileState = {
                url: '/profile',
                templateUrl: '/views/profile-view.html',
                controller: "ProfileController",
                controllerAs: "profileControll",
								title: 'Perfil'
            },
            optionsState = {
                url: '/options',
                templateUrl: '/views/options-view.html',
                controller: "OptionsController",
                controllerAs: "optionsControll",
								title: 'Configurações'
            },
            billsState = {
                url: '/bills',
                templateUrl: '/views/bills-view.html',
                controller: "BillsController",
                controllerAs: "billsControll",
								title: 'Contas'
            },
            homeState = {
                url: '/home',
                templateUrl: '/views/home-view.html',
                controller: "NavigationController",
                controllerAs: "navController",
								title: 'Inicio'
            },
            recomendationsState = {
                url: '/social',
                templateUrl: '/views/social-view.html',
                controller: "SocialController",
                controllerAs: "socialControll",
								title: 'Recomendações'
            },
            helpState = {
                url: '/help',
                templateUrl: '/views/help-view.html',
                controller: "HelpController",
                controllerAs: "helpControll",
								title: 'Ajuda'
            },
            optionsAboutState = {
                url: '/about',
                templateUrl: '/views/options.about-view.html',
                title: 'Sobre'
            };

        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('options', optionsState);
        $stateProvider.state('profile', profileState);
        $stateProvider.state('bills', billsState);
        $stateProvider.state('home', homeState);
        $stateProvider.state('recomendations', recomendationsState);
        $stateProvider.state('help', helpState);
        $stateProvider.state('about', optionsAboutState);
    }
})();
