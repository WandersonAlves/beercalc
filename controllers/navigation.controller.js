(function() {
    angular.module('beercalc').controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$scope', '$timeout', '$mdSidenav', '$state'];

    function NavigationController($scope, $timeout, $mdSidenav, $state) {
        var vm = this;

        vm.openLeftMenu = openLeftMenu;
        vm.close = close;
        vm.currentState = 'Perfil';

        function close(currentState) {
            $mdSidenav('left').close();
            vm.currentState = currentState || 'Perfil';
        }

        function openLeftMenu() {
            $mdSidenav('left').toggle();
        }
    }
})();
