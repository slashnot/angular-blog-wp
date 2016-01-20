
/*
 * MAIN ANGULAR APP MODULE
 */

angular.module("blogApp", ["ngMaterial", "oc.lazyLoad", "ui.router", "pluginModule"])

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider, $provide) {

        //Directive compile
        $compileProvider.directive(
            "myDir", function () {
                return {
                    template: '<script src="libs/js/jquery-2.2.0.min.js"></script>',
                    replace: true,
                    priority: 99
                }
            });

        $provide.factory("dynFactory", function ($http) {
            return {
                res: function methodThatDoesAThing() {
                    $http.head("app/json.json").then(
                    function (res) {
                        console.log(res);
                        return res;
                    });
                }
            }
        });

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
            })
            .state('noTemplate', {
                templateUrl: "app/pages/core/no-template.tpl.html"
            });
        //$locationProvider.html5Mode(true);
    })
    .value('appInfo', {
        name: "Blog App",
        version: "0.1",
        rootUrl: "/",
        appTemplate: "Material Angular"
    })


    .directive('loadDir', function ($http, $compile) {
        var templ, scripts;
        return {
            replace: true,
            controller: ['$scope', function ($scope) {
                $scope.msg = "Message";
            }],
            link: function (scope, elm, attrs) {
                $http.get("app/test.tpl.html").then(function (tpl) {
                    tpl = angular.element(tpl.data);
                    var scr = tpl.find("logic");
                    scripts = angular.element(scr).html();
                    var doc = angular.element(document.body);
                    //doc.append(scripts);

                    var dynScr = document.createElement("script");
                    dynScr.src = "libs/js/jquery-2.2.0.min.js";
                    //dynScr.text = "alert('hi')";
                    document.body.appendChild(dynScr);
                    ////

                    templ = tpl.find("template");
                    templ = angular.element(templ).html();
                    console.log(templ);
                    var compiled = $compile(templ)(scope);
                    console.log(compiled);
                    elm.replaceWith(compiled);

                    var css = 'h1 { background: red; }',
                    head = document.head || document.getElementsByTagName('head')[0],
                    //style = document.createElement('style');
                    style = document.createElement('link');

                    //style.type = 'text/css';
                    style.rel = "stylesheet";
                    style.href = "app/pages/blog/blog.css";
                    console.log(style.styleSheet);
                    if (style.styleSheet) {
                        //style.styleSheet.cssText = css;
                    } else {
                       // style.appendChild(document.createTextNode(css));
                    }

                    head.appendChild(style);
                });
            }

        };
    })

    .controller('BlogCtrl', ["appInfo", "$state", "$http", "dynFactory", function (appInfo, $state, $http, dynFactory) {
        if (appInfo.appTemplate === undefined || appInfo.appTemplate === '') {
            console.log("No Template");
            $state.go("noTemplate");
        }
        this.data = {};
        console.log(dynFactory.res());

        if (angular.home) {
            console.log(angular.home);
        }

    }]);

