function QuotesListController(QuotesFactory) {
    var vm = this;

    QuotesFactory.getQuotes().then(function (quotes) {
        console.log('Hola');
        console.log(quotes);
        vm.quotes = quotes.data;
    })
}

app.component('quotesList', {
    templateUrl: 'quotes-list/quotes-list.html',
    controller: QuotesListController,
    controllerAs: 'vm'
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