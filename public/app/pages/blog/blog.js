
(function () {

    angular.module('app.blog', [])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        // Now set up the states
        $stateProvider
            .state('blog.archive', {
                url: "/archive",
                templateUrl: "app/pages/blog/archive.tpl.html"
            })
            .state('blog.details', {
                url: "/archive",
                templateUrl: "app/pages/blog/details.tpl.html"
            })
             .state('blog.category', {
                 url: "/archive",
                 templateUrl: "app/pages/blog/category.tpl.html"
             })
            .state('blog.authors', {
                url: "/archive",
                templateUrl: "app/pages/blog/authors.tpl.html"
            });
    })
})();
