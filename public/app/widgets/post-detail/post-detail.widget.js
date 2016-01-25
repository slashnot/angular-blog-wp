
/*
 * Post Card Widget
 * -- Displays single post item in posts archive view from an post object
 */


(function () {
    angular.module('post.detail', [])
           .directive('postDetail', postDetail);

    postDetail.$inject = ['$wpApiPosts'];

    function postDetail($wpApiPosts) {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            replace: true,
            scope: {
                widgetPostId:"@"
            },
            templateUrl: 'app/widgets/post-detail/post-detail.tpl.html',
            controller: 'PostDetail',
            controllerAs:'post'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    };

    //Widget Controller

    (function () {
        'use strict';
        angular.module('post.detail')
              .controller('PostDetail', PostDetail);
        PostDetail.$inject = ['$scope', '$sce', '$wpApiPosts'];

        function PostDetail($scope, $sce,$wpApiPosts) {
            /* jshint validthis:true */
            $scope.id = $scope.widgetPostId;
            console.log($scope.id);

            //Get Details Page data
            $wpApiPosts.get($scope.id).then(function (post) {
                $scope.detail = post.data;
                console.log($scope.detail);
            });
        }
    })();

})();
