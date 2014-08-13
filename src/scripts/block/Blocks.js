(function(){
  /* jshint debug: true */
  'use strict';
  angular.module('cth').service('Blocks', ['$http', '$q', 'Block', 'stringManipulators', Blocks]);
      
  function Blocks($http, $q, Block, stringManipulators) {

    function getBlocks(params){
      var url = params.url;
      var order = params.order || 'order';
      var filter = params.filterTag;
      var deferred = $q.defer();

      $http.get(params.url).then(function(response){
        var blocks = response.data.blocks;
        blocks = _(blocks).map(function(block){
          block = new Block(block);
          return block;
        });
        
        blocks = blocks.sortBy(order);

        if(filter){
          blocks = blocks.filter(function(block){
            return _.indexOf(block.tags, filter) >= 0;
          });
        }
        deferred.resolve(blocks.value());
      });

      return deferred.promise;
    }

    return {
      getBlocks: getBlocks
    };
  }
})();
