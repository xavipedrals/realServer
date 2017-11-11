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
    }])

    .factory('AuthFactory', ['$http', '$q', '$cookies', '$timeout', 'myConfig', function ($http, $q, myConfig) {

        var _ = window._;
        var TOKEN_STORAGE_KEY = 'token';
        var currentUser = getCurrentUser();

        var baseUrl = myConfig.url + ':' + myConfig.port + '/user';

        function getCurrentUser() {
            var token = window.localStorage.getItem(TOKEN_STORAGE_KEY);
            var user = {};
            if (typeof token !== 'undefined' && !(token === null)) {
                var encoded = token.split('.')[1];
                user = JSON.parse(window.atob(encoded));
            }
            return user;
        }

        var isAuthenticated = function() {
            return !(_.isEmpty(currentUser));
        };

        var logout = function() {
            window.localStorage.removeItem(TOKEN_STORAGE_KEY);
            return;
        };

        var login = function (username, pass) {
            var q = $q.defer();
            $http.get(baseUrl + '/login', {
                params: {
                    "username": username,
                    "password": pass
                }
            }).then(function successCallback(response) {
                window.localStorage.setItem(TOKEN_STORAGE_KEY, response.data.Token);
                currentUser = getCurrentUser();
                //getCurrentUserData();
                q.resolve(response);
            }, function errorCallback(response) {
                console.log("Error al GET user/login");
                console.log(response);
                q.reject();
            });
            console.log('currentuserlogin2: ' + currentUser.userid);

            return q.promise;
        };
    }]);