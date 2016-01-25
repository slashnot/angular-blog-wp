
(function () {
    'use strict';

    angular.module('af.core')

    .directive('afWidget', ['$compile', '$ocLazyLoad', '$templateRequest', function ($compile, $ocLazyLoad, $templateRequest) {
        return {
            restrict: 'EA',
            scope: {
                widget: '@',
                widgetNamespace: '@'
            },
            priority: 1,
            link: function (scope, elm, attrs) {

                $ocLazyLoad.load('app/widgets/' + scope.widget + '/' + scope.widget + '.widget.js')
                    .then(function () {
                        var template = angular.element('<' + scope.widget + '></' + scope.widget + '>');
                        var namespace = "widget";

                        //Add all the attributes defined in the element
                        angular.forEach(attrs, function (val, attr) {
                            if (angular.isString(val)) {
                                if (attr.indexOf(namespace) >= 0) {
                                    template.attr(attrs.$attr[attr], val);
                                }
                            }
                        });
                        var compiled = $compile(template)(scope);
                        elm.append(compiled);
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
                var template, compiled;
                if (scope.group != undefined) {
                    template = "<div ng-include=\"'app/sections/" + scope.group + "/" + scope.view + ".section.html'\"></div>";
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
