angular.module('quotesApp.routes', [])

    .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                // .state('login', {
                //     url: '/login',
                //     templateUrl: 'app/auth/login/login.html',
                //     controller: 'LoginCtrl'
                // })
                .state(' ', {
                    url: '/',
                    templateUrl: 'quotes-list/quotes-list.html',
                    controller: 'HomeCtrl'
                })
        }
    )

    // .run(['$rootScope', '$state',
    //     function($rootScope, $state) {
    //         $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error) {
    //             //if (error === 'Not authorized') {
    //             //  console.log(error);
    //             //  $state.go('login');
    //             //}
    //         })
    //     }
    // ]);
