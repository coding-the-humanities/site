(function(){
  'use strict';
  angular.module('cth').service('Blocks', ['$http', '$q', 'stringManipulators', Blocks]);
      
  function Blocks($http, $q, stringManipulators) {

    function getBlocks(url){
      var deferred = $q.defer();

      $http.get(url).then(function(response){
        var blocks = response.data.blocks;
        deferred.resolve(blocks);
      });

      return deferred.promise;
    }

    return {
      getBlocks: getBlocks
    };
  }
})();
