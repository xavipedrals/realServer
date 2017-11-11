function LoginController() {
    var vm = this;

    vm.login = function () {
        console.log(vm.username);
        console.log(vm.password);

    };
}

app.component('login', {
    templateUrl: 'login/login.html',
    controller: LoginController,
    controllerAs: 'vm'
});