(function(){
  'use strict';
  angular.module('cth').controller('PresentationCtrl', ['$scope', PresentationCtrl]);

  function PresentationCtrl($scope){

    var vm = this;

    vm.title = "Hi";

    vm.slides = [
      {title: "one"},
      {title: "two"},
      {title: "three"}
    ];
   

    return vm;
  }
})();
