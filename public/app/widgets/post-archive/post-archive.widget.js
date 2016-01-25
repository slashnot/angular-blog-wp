
/*
 * Post archive Widget
 * -- Displays single post item in posts archive view from an post object
 */


(function () {
    angular.module('post.archive', [])
           .directive('postArchive', postArchive);

    postArchive.$inject = ['$wpApiPosts', '$wpApiPosts'];

    function postArchive($wpApiPosts, $wpApiPosts) {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/widgets/post-archive/post-archive.tpl.html',
            controller: 'PostArchive',
            controllerAs: 'archive'
        };
        return directive;

        function link(scope, element, attrs) {
            
        }
    };

    //Widget Controller

    (function () {
        'use strict';

        angular.module('post.archive')
          .controller('PostArchive', PostArchive);
        PostArchive.$inject = ['$scope', "$wpApiPosts", "$wpApiPages", "$wpApiCustom"];

        function PostArchive($scope, $wpApiPosts, $wpApiPages, $wpApiCustom) {
            /* jshint validthis:true */
            var archive = this;
            archive.posts = {};

            $wpApiPosts.getList({
                page: 1,
                per_page: 12,
                "filter[orderby]": "date",
                "filter[orderby]": "asc"
            }).then(function (posts) {
                archive.posts = posts.data;
                console.log(archive.posts);
            });
        }
    })();

})();
