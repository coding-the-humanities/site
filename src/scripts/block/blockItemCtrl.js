(function(){
  'use strict';

  angular.module('cth').controller('BlockItemCtrl', ['$scope', '$state', 'stringManipulators', BlockItemCtrl]);

  function BlockItemCtrl($scope, $state, stringManipulators){
    var vm = this;
    var stateName = $state.current.name.split(".")[0];

    vm.block = $scope.block;
    vm.block.id = stringManipulators.dasherize(vm.block.title);
    vm.block.headerImage = vm.block.images[0];
    vm.block.url = $state.href(stateName + ".block", {block_id: vm.block.id});
    
    $scope.toggleExpanded = function(){
      vm.block.expanded = !vm.block.expanded;
    };

    return vm;
  }
})();
