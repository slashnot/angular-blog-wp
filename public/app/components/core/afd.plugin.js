
(function () {
    'use strict';

    angular.module('af.core')

    .directive('afWidget', ['$compile', '$ocLazyLoad', '$templateRequest', function ($compile, $ocLazyLoad, $templateRequest) {
        return {
            restrict: 'EA',
            scope: {
                'widget': '@'
            },
            priority: 1,
            link: function (scope, element) {

                $ocLazyLoad.load('app/widgets/' + scope.widget + '/' + scope.widget + '.widget.js')
                    .then(function () {
                        var template = '<' + scope.widget + '></' + scope.widget + '>';
                        var compiled = $compile(template)(scope);
                        element.append(compiled);
                    });
            }
        };
    }])
    .directive('afSection', ['$compile', '$ocLazyLoad', '$templateRequest', function ($compile, $ocLazyLoad, $templateRequest) {
        return {
            restrict: 'EA',
            scope: {
                'view': '@',
                'group': '@'
            },
            priority: 2,
            link: function (scope, element) {
                var template,compiled;
                if (scope.group != undefined) {
                    template = "<div ng-include=\"'app/sections/" + scope.group +"/" +scope.view + ".section.html'\"></div>";
                }
                else {
                    template = "<div ng-include=\"'app/sections/" + scope.view + ".section.html'\"></div>";
                }

                compiled = $compile(template)(scope);
                element.append(compiled);
            }
        };
    }])
})();
