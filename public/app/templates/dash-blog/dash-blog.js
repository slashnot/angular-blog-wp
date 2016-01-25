
(function () {
    'use strict';

    angular.module('blog.template', ["wp-api-angularjs"]);

    angular.module("blog.template")
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        // Now set up the states
        //console.log(appInfo);
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "app/templates/dash-blog/index.html"
            })
            .state('post', {
                url: "/post/:id",
                templateUrl: "app/templates/dash-blog/single.html"
            })
            .state('post.archive', {
                url: "/archive",
                templateUrl: "app/templates/dash-blog/single.html"
            })
            .state('noTemplate', {
                templateUrl: "app/pages/core/no-template.tpl.html"
            });
        //$locationProvider.html5Mode(true);
    })

    //WP API Config
    .config(function (WpApiProvider) {
        WpApiProvider.setBaseUrl("http://127.0.0.1/WORKS/Wp-Angular/wp-json/");
        WpApiProvider.setDefaultHttpProperties({
            timeout: 20000
        });
    });
})();
