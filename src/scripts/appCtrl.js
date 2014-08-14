(function(){
  'use strict';
  angular.module('cth').controller('AppCtrl', ['$state', '$scope', '$timeout', AppCtrl]);

  function AppCtrl($state, $scope, $timeout){

    var vm = this;

    vm.showHeader = true;


    $timeout(function(){
      vm.showHeader = false;
      selectActiveRoute($state.current.name);

      $timeout(function(){
        $scope.$broadcast('pageReady');
      }, 2000);
    }, 1000);
    
    $scope.$on('$stateChangeSuccess', function(event, toState){
      selectActiveRoute(toState.name);
      $scope.$broadcast('pageReady');
    });
    

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

    function selectActiveRoute(routeName){
      var rootRouteName = routeName.split(".")[0];
      vm.routes.map(function(route){
        route.active = false;
        if(rootRouteName === route.name){
          route.active = true;
        }
      });
    }
  }
})();
