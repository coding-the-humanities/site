(function(){
  'use strict';

  angular.module('cth').directive('profiles', [profiles]);

  function profiles() {
    return {
      restrict: 'E',
      scope: {
        people: '='
      },
      templateUrl: 'profile/profiles.html',
      controller: 'ProfilesCtrl',
      replace: true,
    };
  }


  angular.module('cth').controller('ProfilesCtrl', ['$scope', ProfilesCtrl]);

  function ProfilesCtrl($scope){

    $scope.galleries = generateGalleries($scope.people);

    function generateGalleries(items){
      var slideSizes = [3, 4, 6, 12];
      var pageSizes = ['xs', 'sm', 'md', 'lg'];
      return _.map(slideSizes, function(slideSize, index){
        var pageSize = pageSizes[index];
        return new Slide(items, slideSize, pageSize);
      });
    }

    function Slide(items, slideSize, pageSize){
      return {
        pageSize: pageSize,
        colSize: 12 / slideSize,
        profiles: chunker(items, slideSize)
      };
    }

    function chunker(array, size){
      var clone = array.slice(0);
      var results = [];
      while(clone.length){
        results.push(clone.splice(0, size));
      }
      return results;
    }
  }
})();
