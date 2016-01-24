
/*
 * This is the core boot module. This loads the template files and initializes the application 
 */


(function () {
    'use strict';

    //Config Function
    angular.module('af.boot')
    .config(["$provide", function ($provide) {
        $provide.value("appInfo", {
            app: {},
            template: {}
        });
    }]);

    //Directive that loads the required template files and replace the DOM element with ui-view
    angular.module('af.boot')
    .directive("afApp", afApp);
    afApp.$inject = ["$log", "appInfo", "$http", "afTemplate"];


    // ----------------------------------------------------
    // Directive Function --afApp
    // ----------------------------------------------------
    function afApp($log, appInfo, $http, afTemplate) {

        var afApp = {
            restrict: "EA",
            scope: {
                template: "@",
                configHref: "@"
            },
            priority: 99,
            template: "<ui-view></ui-view",
            replace: true,
            link: afLink
        }

        // ----------------------------------------------------
        // Linker Function -- afLink 
        // ----------------------------------------------------

        function afLink(scope, elm, attrs) {

            //Read template from Config
            $http.get("app/app.config.json").then(loadTemplate,
            function (err) {
                $log.error("Error loading app config file. Please check whether the file exists");
            });

            // Template Load Function ------------------
            function loadTemplate(json) {
                appInfo = json.data;

                //Check whether the template is defined
                if (scope.template !== null || scope.template !== undefined) {
                    $log.debug("Template is Defined");
                    appInfo.template.name = scope.template;
                }

                //Load the template and template files
                if (appInfo.template.name !== null || appInfo.template.name !== undefined || appInfo.template.name !== '') {
                    afTemplate.load(appInfo.template.name).then(function () {
                        $log.debug("Boot operation Finished");
                    });
                }
                else {
                    //afMessage.error("Template not defined.");
                }
            }
        }
        return afApp;
    }
})();
