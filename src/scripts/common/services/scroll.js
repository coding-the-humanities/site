(function(){
  'use strict';

  angular.module('cth').factory('scroll', [scroll]);

  function scroll(){
    return {
      toTop: function(element){
        var top = element.position().top;
        console.log(top);
        $('body').animate({scrollTop: top + 5}, {
          duration: 750,
        });
      }
    };
  }
})();
