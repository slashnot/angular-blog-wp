
(function () {
    'use strict';

    angular.module('blog.template', []);

    angular.module("blog.template")
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        // Now set up the states
        //console.log(appInfo);
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "app/templates/dash-blog/index.html"
            })
            .state('user', {
                url: "/post",
                templateUrl: "app/templates/dash-blog/single.html"
            })
            .state('noTemplate', {
                templateUrl: "app/pages/core/no-template.tpl.html"
            });
        //$locationProvider.html5Mode(true);
    });
})();
