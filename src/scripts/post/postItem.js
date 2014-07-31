(function(){
  'use strict';
  angular.module('cth').directive('postItem', ['$timeout', 'scroll', postItem]);
      
  function postItem($timeout, scroll) {
    return {
      restrict: 'E',
      scope: {
        post: '='
      },
      templateUrl: 'post/postItem.html',
      controller: 'PostItemCtrl',
      replace: true,
      link: function(scope, element, attrs){
        attrs.$observe('selected', function(newValue, oldValue){
          if(newValue === "true"){
            $timeout(function(){
              scroll.toTop(element);
            }, 500);
          }
        });
      }
    };
  }
})();
