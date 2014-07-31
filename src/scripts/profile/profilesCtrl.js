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

    var slideSizes = [3, 4, 6, 12];
    var classNames = ['xs', 'sm', 'md', 'lg'];

    $scope.galleries = _.map(slideSizes, function(slideSize, index){
      return {
        pageSize: classNames[index],
        colSize: 12 / slideSize,
        profiles: chunker($scope.people, slideSize)
      };
    });

    function chunker(array, size){
      var clone = array.slice(0);
      var results = [];
      while(clone.length){
        results.push(clone.splice(0, size));
      }
      return results;
    };
  }
})();
