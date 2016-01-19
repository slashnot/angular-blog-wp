
(function () {
    'use strict';

    angular.module('app.blog', [
        // Angular modules 
        'oc.lazyload',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise("/");

        // Now set up the states
        $stateProvider
            .state('blog.archive', {
                url: "/archive",
                templateUrl: "app/pages/blog/archive.tpl.html"
            });
        //$locationProvider.html5Mode(true);
    })
})();
