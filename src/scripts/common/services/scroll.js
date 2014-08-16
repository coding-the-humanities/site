(function(){
  'use strict';

  angular.module('cth').factory('scroll', ['$timeout', scroll]);

  function scroll($timeout){
    return {
      toTop: function(element){
        var header = $('.site-header').height() - 100;
        var top = element.position().top - header;
        $('body').animate({scrollTop: top + 5}, {
          duration: 750,
        });
      }
    };
  }
})();
