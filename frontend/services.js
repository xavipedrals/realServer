angular.module('quotesApp.services', [])
    .factory('QuotesFactory', ['$http', '$q', 'myConfig', function ($http, $q, myConfig) {
        var baseUrl = myConfig.baseUrl + ':' + myConfig.port;

        function getQuotes() {
            var q = $q.defer();
            $http({
                method: 'GET',
                url: baseUrl + '/quote'
            }).then(function successCallback(response) {
                console.log("GET quotes success");
                console.log(response);
                q.resolve(response.data);
            }, function errorCallback(response) {
                console.log("GET quotes failure");
                console.log(response);
                q.reject();
            });
            return q.promise;
        }

        function addQuote(authorName, authorPhoto, quote) {
            var q = $q.defer();
            $http({
                method: 'POST',
                url: baseUrl + '/quote',
                data: {
                    "author": authorName,
                    "body": quote,
                    "author_photo": authorPhoto
                }
            }).then(function successCallback(response) {
                console.log("POST quote success");
                console.log(response);
                q.resolve();
            }, function errorCallback(response) {
                console.log("POST quote failure");
                console.log(response);
                q.reject();
            });
            return q.promise;
        }

        return {
            getQuotes: getQuotes,
            addQuote: addQuote
        }
    }]);