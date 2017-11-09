angular.module('quotesApp.routes', [])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<quotes-list></quotes-list>'
            })
    }
);
