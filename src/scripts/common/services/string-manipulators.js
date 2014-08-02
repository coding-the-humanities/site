(function(){
  'use strict';

  angular.module('cth').factory('stringManipulators', [stringManipulators]);

  function stringManipulators(){
    return {
      dasherize: function(str){
        return str.replace(/\s+/g, '-').toLowerCase(); 
      }
    };
  }
})();
