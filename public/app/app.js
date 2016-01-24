
/*
 * MAIN ANGULAR APP MODULE
 */

angular.module("blogApp", ["af.boot", "ngResource"])

.factory('Entry', function ($resource) {
    return $resource('http://127.0.0.1/WORKS/Wp-Angular/wp-json/wp/v2/posts/', {},
       {
           get: {
               method: 'GET',
               isArray: true
           }
       }); // Note the full endpoint address
})

//Main Application Controller Logic
.controller('BlogCtrl', ["Entry", function (Entry) {
    var entry = Entry.get( function () {
        console.log(entry);
    });
}]);
