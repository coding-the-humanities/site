(function(){
  'use strict';

  angular.module('cth').factory('scroll', [scroll]);

  function scroll(){
    return {
      toTop: function(element){
        var header = $('.site-header').height() - 100;
        var top = element.position().top - header;
        console.log(header);
        $('body').animate({scrollTop: top + 5}, {
          duration: 750,
        });
      }
    };
  }
})();
