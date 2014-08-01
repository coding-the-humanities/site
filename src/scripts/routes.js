(function(){
  'use strict';

  angular.module('cth').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);


    $stateProvider
      .state('posts', {
        url: '/posts',
        templateUrl: 'post/postList.html',
        controller: 'BlockCtrl as blockList',
        resolve: {
          content: ['$http', function($http){
            return $http.get('/api/posts.json').then(function(response){
              var posts = response.data.posts;
              posts = _(posts).sortBy('posted').value().reverse();
              return posts;
            }); 
          }]
        }
      })
      .state('posts.post', {
        url: '/:post_id',
      })
      .state('pilot', {
        url: '/pilot',
        templateUrl: 'post/postList.html',
        controller: 'BlockCtrl as blockList',
        resolve: {
          content: ['$http', function($http){
            return $http.get('/api/pilot.json').then(function(response){
              var posts = response.data.pilot;
              posts = _(posts).sortBy('posted').value().reverse();
              return posts;
            }); 
          }]
        }
      })
      .state('pilot.block', {
        url: '/:block_id',
      });

    $urlRouterProvider.when('/', '/posts');
  }


})();
