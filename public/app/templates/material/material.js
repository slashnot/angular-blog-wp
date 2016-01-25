
(function () {
    'use strict';

    angular.module('material.template', []);

    angular.module("material.template")
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        // Now set up the states
        //console.log(appInfo);
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "app/templates/material/home.html"
            })
            .state('user', {
                url: "/user",
                templateUrl: "app/templates/material/user.html"
            })
        //$locationProvider.html5Mode(true);
    });
})();
