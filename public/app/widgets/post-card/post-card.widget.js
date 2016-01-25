
/*
 * Post Card Widget
 * -- Displays single post item in posts archive view from an post object
 */


(function () {
    angular.module('post.card', [])
           .directive('postCard', postCard);

    postCard.$inject = ['$wpApiPosts'];

    function postCard($wpApiPosts) {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            replace: true,
            scope: {
                widgetData: "=",
                widgetTest:"@"
            },
            templateUrl: 'app/widgets/post-card/post-card.tpl.html',
            controller: 'PostCard as card',
        };
        return directive;

        function link(scope, element, attrs) {
        }
    };

    //Widget Controller

    (function () {
        'use strict';
        angular.module('post.card')
              .controller('PostCard', PostCard);
        PostCard.$inject = ['$scope'];

        function PostCard($scope) {
            /* jshint validthis:true */
            var card = this;
            card.posts = $scope.widgetData;
        }
    })();

})();
