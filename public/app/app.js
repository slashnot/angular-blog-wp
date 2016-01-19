
/*
 * MAIN ANGULAR APP MODULE
 */

angular.module("blogApp", ["ngMaterial", "oc.lazyLoad", "ui.router"])

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
                templateUrl: "app/pages/blog/blog.tpl.html"
            });
        //$locationProvider.html5Mode(true);
    })

    .controller('BlogCtrl', [function () {

    }]);
