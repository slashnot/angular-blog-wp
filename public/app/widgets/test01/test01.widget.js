
(function () {
	angular.module('test01Widget',[])
		   .directive('test01', test);

	function test($window) {
	
		var directive = {
			restrict: 'EA',
			replace: true,
			templateUrl: 'app/widgets/test01/testone.tpl.html',
			controller: function ($stateParams) {
			    console.log($stateParams);
			},
		};
		return directive;
	};
})();
