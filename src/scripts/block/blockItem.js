(function(){
  'use strict';
  angular.module('cth').directive('blockItem', ['$timeout', 'scroll', blockItem]);
      
  function blockItem($timeout, scroll) {
    return {
      restrict: 'E',
      scope: {
        block: '='
      },
      templateUrl: 'block/blockItem.html',
      controller: 'BlockItemCtrl',
      replace: true,
      link: function(scope, element, attrs){
        attrs.$observe('selected', updateSelection);

        function updateSelection(newValue, oldValue){
          if(newValue === "true"){
            $timeout(function(){
              scroll.toTop(element);
            }, 500);
          }
        }
      }
    };
  }
})();
