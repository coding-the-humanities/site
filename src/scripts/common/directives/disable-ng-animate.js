(function(){
  'use strict';
  angular.module('cth').directive('disableNgAnimate', ['$animate', disableNgAnimate]);
    
  function disableNgAnimate($animate){
    return {
      restrict: 'A',
      link: function(scope, element) {
        $animate.enabled(false, element);
      }
    };
  }
})();
