
/*
 * MAIN ANGULAR APP MODULE
 */

angular.module("blogApp", ["afm.boot"])

    

    //Main Application Controller Logic
    .controller('BlogCtrl', [function () {


    }]);
angular.element(document).ready(function () {
    console.log("Ready");
    angular.module("testApp", []);
    angular.module("testApp1", ["testApp"]);
});