(function(){
  'use strict';
  angular.module('cth').directive('blockContent', ['$timeout', blockContent]);
      
  function blockContent($timeout) {
    return {
      restrict: 'E',
      scope: {
        markdown: '='
      },
      controller: 'BlockContentCtrl as blockContent',
      templateUrl: 'block/blockContent.html',
      replace: true, 
      link: function(scope, element, attrs, controller){
        $timeout(function(){
          element.children().filter('blockquote').addClass("blockquote-reverse").end();
        }, 0);
      }
    };
  }
})();
