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

        return {
            getQuotes: getQuotes
        }
    }]);