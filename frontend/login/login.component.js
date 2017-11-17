function LoginController(AuthFactory, $state) {
    var vm = this;

    vm.login = function () {
        AuthFactory.login(vm.email, vm.password).then(function successCallback() {
            console.log('SUCCESS');
            $state.go('home');

        }, function errorCallback() {
            console.log('OH NO :(');
        })
    };
}

app.component('login', {
    templateUrl: 'login/login.html',
    controller: LoginController,
    controllerAs: 'vm'
});