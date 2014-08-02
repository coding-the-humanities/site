(function(){
  'use strict';
  angular.module('cth').controller('BlockCtrl', ['$scope', 'content', '$state', 'stringManipulators', '_', BlockCtrl]);

  function BlockCtrl($scope, content, $state, stringManipulators, _){

    var vm = this;

    var params = $state.params;
    vm.blocks = selectBlock(content, params);

    $scope.$on('$stateChangeSuccess', 
      function(event, toState, toParams, fromState, fromParams){
        var params = toParams; 
        vm.blocks = selectBlock(content, params);
      }
    );

    return vm;

    function selectBlock(blocks, params){
      var selectedBlocks = _.map(blocks, function(block, index){
        var block_id = stringManipulators.dasherize(block.title);
        if(params.block_id === block_id){
          block.selected = true;
          block.expanded = true;
        } else {
          block.selected = false;
        } 
        return block;
      });

      var selectedBlockExists = _.some(selectedBlocks, 'selected');

      if(!selectedBlockExists){
        blocks[0].initial = true;
      }

      return selectedBlocks;
    }

  }
})();
