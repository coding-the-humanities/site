(function(){
  'use strict';

  angular.module('cth').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);


    $stateProvider
      .state('posts', {
        url: '/posts',
        templateUrl: 'block/blockList.html',
        controller: 'BlockCtrl as blockList',
        resolve: {
          content: ['$http', function($http){
            return $http.get('/api/posts.json').then(function(response){
              var posts = response.data.blocks;
              posts = _(posts).sortBy('posted').value().reverse();
              return posts;
            }); 
          }]
        }
      })
      .state('posts.block', {
        url: '/:block_id',
      })
      .state('essays', {
        url: '/essays',
        templateUrl: 'block/blockList.html',
        controller: 'BlockCtrl as blockList',
        resolve: {
          content: ['$http', function($http){
            return $http.get('/api/posts.json').then(function(response){
              var posts = response.data.blocks;
              posts = _(posts).sortBy('posted').value().reverse();
              return posts;
            }); 
          }]
        }
      })
      .state('essays.block', {
        url: '/:block_id',
      })
      .state('pilot', {
        url: '/pilot',
        templateUrl: 'block/blockList.html',
        controller: 'BlockCtrl as blockList',
        resolve: {
          content: ['$http', 'stringManipulators' , function($http, stringManipulators){
            return $http.get('/api/pilot.json').then(function(response){
              var blocks = response.data.blocks;
              blocks = _(blocks).map(function(block, index){
                block.id = stringManipulators.dasherize(block.title);
                return block;
              }).sortBy('order').value();
              return blocks;
            }); 
          }]
        }
      })
      .state('pilot.block', {
        url: '/:block_id',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'block/blockList.html',
        controller: 'BlockCtrl as blockList',
        resolve: {
          content: ['Blocks', 'stringManipulators' , function(Blocks, stringManipulators){
            return Blocks.getBlocks('api/pilot.json').then(function(blocks){
              blocks = _(blocks).map(function(block, index){
                block.id = stringManipulators.dasherize(block.title);
                return block;
              }).sortBy('order').value();
              return blocks;
            }); 
          }]
        }
      })
      .state('about.block', {
        url: '/:block_id',
      });

    $urlRouterProvider.when('/', '/posts');
  }


})();
