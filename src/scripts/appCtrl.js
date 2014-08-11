(function(){
  'use strict';
  angular.module('cth').controller('AppCtrl', ['$state', '$scope', '$timeout', AppCtrl]);

  function AppCtrl($state, $scope, $timeout){
    var vm = this;
    vm.showHeader = true;


    $timeout(function(){
      vm.showHeader = false;
      $timeout(function(){
        $scope.$broadcast('pageReady');
      }, 3000);
    }, 2000);
    
    vm.postOrder = '-posted';

    vm.routes = [{
      name: 'posts'
    }, {
      name: 'essays',
    }, {
      name: 'pilot'
    }, {
      name: 'about'
    }];

    return vm;
  }
})();
