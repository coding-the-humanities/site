(function(){
  'use strict';
  angular.module('cth').controller('AppCtrl', ['$state', '$scope', '$timeout', AppCtrl]);

  function AppCtrl($state, $scope, $timeout){
    var vm = this;
    vm.showHeader = true;


    $timeout(function(){
      vm.showHeader = false;
      selectActiveRoute();
      $timeout(function(){
        $scope.$broadcast('pageReady');
      }, 2000);
    }, 1000);

    
    $scope.$on('$stateChangeSuccess', function(){
      selectActiveRoute();
      $scope.$broadcast('pageReady');
    });
    
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

    function selectActiveRoute(){
      vm.routes.map(function(route){
        route.active = false;
        if($state.includes(route.name)){
          route.active = true;
        }
      });
    }
  }
})();
