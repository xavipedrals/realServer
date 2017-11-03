var app = angular.module('quotesApp', [
    'quotesApp.services'

    ])
    .constant('myConfig', {
        'baseUrl': 'http://localhost',
        'port': '8080'
    });

app.controller('mainController', function (QuotesFactory) {
    this.hello = "Hello world";
    var vm = this;

    QuotesFactory.getQuotes().then(function (quotes) {
        console.log('Hola');
        console.log(quotes);
        vm.quotes = quotes.data;
    })

});

app.filter('searchAuthorAndBody', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(quote){
            if((quote.body.toLowerCase().indexOf(searchString) !== -1) || (quote.author.toLowerCase().indexOf(searchString) !== -1)){
                result.push(quote);
            }
        });
        return result;
    };
});
