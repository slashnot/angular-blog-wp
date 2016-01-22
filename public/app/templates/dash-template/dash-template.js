
(function () {
    'use strict';

    angular.module('dash.template', []);

    //angular.module('dash.template')

    angular.module("dash.template")
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "app/pages/home/home.tpl.html"
            })
            .state('blog', {
                url: "/blog",
                templateUrl: "app/pages/blog/blog.tpl.html",
                controller:"BlogPage",
                resolve: {
                    loadBlogCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['app/pages/blog/blog.js', 'app/pages/blog/blog.css']);
                    }]
                }
            })
            .state('noTemplate', {
                templateUrl: "app/pages/core/no-template.tpl.html"
            });
        //$locationProvider.html5Mode(true);
    });
})();
