
/*
 * Service to load all the dependencies of a given template and inject them to the app module
 */


(function () {
    'use strict';

    angular
      .module('af.boot')
      .factory('afTemplate', afTemplate);

    afTemplate.$inject = [
        '$ocLazyLoad',
        '$http',
        '$log',
        '$q',
        'appInfo',
        '$location',
        '$state'
    ];

    function afTemplate($ocLazyLoad, $http, $log, $q, appInfo, $location, $state) {
        var service = {
            load: load
        };
        return service;


        // ----------------------------------------------------
        // Service Function -- afTemplate 
        // ----------------------------------------------------
        function load(template) {

            var d = $q.defer();
            $http.get("app/templates/" + template + "/config.json").then(loadTemplate,
            function (err) {
                $log.error("Error loading app config file. Please check whether the file exists");
                d.reject();
            });

            // Template Load Function ------------------
            function loadTemplate(json) {
                $log.debug(json);

                //Set global values
                appInfo.template = json.data;
                appInfo.template.name = template;
                $log.debug(appInfo);
                appInfo.template.path = "app/templates/" + template + "/";

                //create a placeholder at boottom of body to load templates
                var head = document.getElementsByTagName("head");
                angular.element(document.body).append("<span id='af-scripts'></span>");
                angular.element(head).append("<span id='af-css'></span>");

                // Lazy Load Files --------------------------------------
                $ocLazyLoad.load([{
                    files: json.data.deps.css,
                    insertBefore: "#af-css"
                }, {
                    files: json.data.deps.scripts,
                    serie: true,
                    insertBefore: "#af-scripts"
                }])
                // After Loading --------------------------------------
                .then(function () {
                    console.log($ocLazyLoad.getModules());
                    $log.debug("Core Dependencies loaded");

                    //Load state changes
                    loadStates();
                    d.resolve();
                },
                function (err) {
                    $log.error("Error loading app dependencies. Please check whether the files exist");
                    d.reject();
                });
                // ------------------------------------------------------

                //Load state Changes function
                function loadStates() {
                    var url = $location.path();
                    //Check default
                    if (url === "/" || url === "") {
                        $state.go(appInfo.template.defaultState);
                    }
                    else {
                        var state = url.replace(/^\/|\/$/gi, '');
                        var parentState = state.replace(/\/.*/, '');
                        $state.go(parentState).then(function () {
                            state = state.replace(/\//g, ".");
                            $state.go(state);
                        });
                    }
                }
            }
            return d.promise;
        }
    }
})();
