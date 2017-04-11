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
            },
            mainState = {
                abstract: true,
                templateUrl: '/views/main-view.html',
                title: 'Teste'
            }

        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('main', mainState);
        $stateProvider.state('main.options', optionsState);
        $stateProvider.state('main.profile', profileState);
        $stateProvider.state('main.bills', billsState);
        $stateProvider.state('main.home', homeState);
        $stateProvider.state('main.recomendations', recomendationsState);
        $stateProvider.state('main.help', helpState);
        $stateProvider.state('main.about', optionsAboutState);
    }
})();
