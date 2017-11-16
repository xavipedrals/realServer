var app = angular.module('quotesApp', [
    'ui.router',
    'quotesApp.services',
    'quotesApp.routes'
    //'ngCookies'
    ])
    .constant('myConfig', {
        'baseUrl': 'http://localhost',
        'port': '8080'
    });

app.controller('mainController', function () {
    var vm = this;
});

