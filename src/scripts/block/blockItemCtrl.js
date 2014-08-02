(function(){
  'use strict';

  angular.module('cth').controller('BlockItemCtrl', ['$scope', '$element', '$timeout', 'stringManipulators', 'scroll', BlockItemCtrl]);

  function BlockItemCtrl($scope, $element, $timeout, stringManipulators, scroll){
    var vm = this;

    vm.block = $scope.block;
    vm.block.id = stringManipulators.dasherize(vm.block.title);
    vm.block.headerImage = vm.block.images[0];

    $scope.toggleExpanded = function(){
      vm.block.expanded = !vm.block.expanded;
    };

    return vm;
  }
})();
