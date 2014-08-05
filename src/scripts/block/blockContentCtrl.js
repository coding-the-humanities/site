(function(){
  'use strict';

  angular.module('cth').controller('BlockContentCtrl', ['$scope', '$sce', 'Showdown', BlockContentCtrl]);

  function BlockContentCtrl($scope, $sce, Showdown){
    var vm = this;
    var converter = new Showdown.converter();
    var content = converter.makeHtml($scope.markdown || '');
    vm.content = $sce.trustAsHtml(content);
    return vm;
  }
})();
