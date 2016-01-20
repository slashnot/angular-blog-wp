
(function () {
	angular.module('testWidget',[])
		   .directive('test', test);

	function test($window) {
	
		var directive = {
			restrict: 'EA',
			replace: true,
			templateUrl: 'app/widgets/test/test.tpl.html'
		};
		return directive;
	};
})();
