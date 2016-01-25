

(function () {
    'use strict';

    angular.module('af.boot')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        console.log("AF CONFIG-------------------------");
        //Application root State
        $stateProvider
            .state('af', {
                url: "/af",
                template: "<div><a ui-sref='af.home'>Home</a><ui-view></ui-view></div>'",
                controller: function ($state) {
                    console.log($state.get());
                }
            });
    });
})();
