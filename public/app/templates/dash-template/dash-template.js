
(function () {
    'use strict';

    angular.module('dash.template', []);

    angular.module("dash.template")
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        // Now set up the states
        //console.log(appInfo);
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "app/templates/dash-template/dashboard.html"
            })
            .state('user', {
                url: "/user",
                templateUrl: "app/templates/dash-template/user.html"
            })
            .state('noTemplate', {
                templateUrl: "app/pages/core/no-template.tpl.html"
            });
        //$locationProvider.html5Mode(true);
    });
})();
