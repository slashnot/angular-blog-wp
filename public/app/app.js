
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
                templateUrl: "app/pages/blog/blog.tpl.html",
                resolve: {
                    loadBlogCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['app/pages/blog/blog.js', 'app/pages/blog/blog.css']);
                    }]
                }
            });
        //$locationProvider.html5Mode(true);
    })

    .controller('BlogCtrl', [function () {

    }]);
