function AddQuoteController(QuotesFactory) {
    var vm = this;

    vm.submitQuote = function () {
        console.log(vm.author);
        console.log(vm.quote);
        QuotesFactory.addQuote(vm.author.name, vm.author.photo, vm.quote).then(function (quotes) {
            // console.log('Hola');
            // console.log(quotes);
            //vm.quotes = quotes.data;
        });
    };
}

app.component('addQuote', {
    templateUrl: 'add-quote/add-quote.html',
    controller: AddQuoteController,
    controllerAs: 'vm'
});