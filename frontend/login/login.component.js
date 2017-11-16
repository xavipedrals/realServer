function LoginController(AuthFactory) {
    var vm = this;

    vm.login = function () {
        AuthFactory.login(vm.email, vm.password).then(function successCallback() {
            console.log('SUCCESS');
            location
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