var app = angular.module('quotesApp', [
    'ui.router',
    'quotesApp.services'
    //'quotesApp.routes'
    ])
    .constant('myConfig', {
        'baseUrl': 'http://localhost',
        'port': '8080'
    });

app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<quotes-list></quotes-list>'
            })
    }
);

app.controller('mainController', function (QuotesFactory) {
    var vm = this;
});

