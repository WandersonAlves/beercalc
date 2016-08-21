(function() {
    angular
        .module('beercalc')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$scope', '$timeout', '$mdSidenav', '$state'];

    function NavigationController($scope, $timeout, $mdSidenav, $state) {
        var vm = this;

        vm.toggleLeft = buildDelayedToggler('left');
        vm.close = close;
        vm.currentState = 'Perfil';

        function close(currentState) {
            $mdSidenav('left').close();
            vm.currentState = currentState;
        }

        function buildDelayedToggler(navID) {
            return debounce(function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function() {
                        console.log("toggled!");
                    });
            }, 200);
        }

        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }
    }
})();
